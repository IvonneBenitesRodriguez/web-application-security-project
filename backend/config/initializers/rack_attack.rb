Rack::Attack.throttle('logins/ip', limit: 5, period: 60) do |req|
  req.ip if req.path == '/users/login' && req.post?
end

Rack::Attack.throttle('registrations/ip', limit: 10, period: 60) do |req|
  req.ip if req.path == '/users/register' && req.post?
end

Rack::Attack.blocklist('block bad actors') do |req|
  Rack::Attack::Allow2Ban.filter(req.ip, maxretry: 10, findtime: 60, bantime: 3600) do
    req.path == '/users/login' && req.post?
  end
end