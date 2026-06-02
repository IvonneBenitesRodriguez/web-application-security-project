class Rack::Attack
#This measure limits login attempts - OWASP A07 Brute Force Protection
throttle('logins/ip', limit: 5, period: 60.seconds) do |req|
    if req.path == '/users/login' && req.post?
        req.ip
    end
end

#Limit register attempts per IP:
throttle('registrations/ip', limit: 10, period: 60.seconds) do |req|
    if req.path == 'users/register' && req.post?
        req.ip
    end
end

#Block suspicious requests:
blocklist('block bad actors') do |req|
    Rack::Attack::Allow2Ban.filter(req.ip, maxretry:10, findtime: 1.minute, bantime: 1.hour) do
        req.path == '/users/login' && req.post?
      end
    end
end