# Secure Registration App - Web Application Security Project
### Live in Production
A Full-Stack Web Application featuring a secure user registration system, built with security best practices following OWASP guidelines.<br/>

🌐 **Frontend:** [Live Demo](https://ivonnebenitesrodriguez.github.io/web-application-security-project) <br/>
🚀 **Backend:** [Railway](https://web-application-security-project-production.up.railway.app)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Ruby on Rails 8.1.3 |
| Database | PostgreSQL |
| Testing | RSpec, Jest |
| Security | BCrypt, Rack::Attack, Rack::Cors, Dotenv |
| Deployment | GitHub Pages, Railway |

---

## 🖥️ Registration Form

![Registration Form](screenshots/Registration-Form.png)

---

## 🔒 Security Measures

### 1. XSS Protection — OWASP A03
![XSS Protection](screenshots/CROSS-SITE-SCRIPTING-PROTECTION.png)

### 2. Mass Assignment Prevention — OWASP A03
![Mass Assignment](screenshots/FIFTH-MASS-ASSIGNMENT.png)

### 3. Gems Used to Implement Security
![Security Gems](screenshots/GEMS-USED.png)

### 4. Password Hashing — OWASP A02
![Password Hashing](screenshots/PASSWORD-HASHING.png)

### 5. Secrets Management — OWASP A02
![Secrets Management](screenshots/SECRETS-MANAGEMENT.png)

### 6. Brute-Force Protection — OWASP A07
![Brute Force](screenshots/SIXTH-IP-BLOCKING.png)

### 7. Log Filtering — OWASP A02
![Log Filtering](screenshots/THIRD-FILTER.png)

---

## 🧪 Tests

### Backend — RSpec (TDD Methodology)
![RSpec Tests](screenshots/TEST-BACKEND.png)

### Frontend — Jest Framework (TDD Methodology)
![Jest Tests](screenshots/TEST-FrontEnd.png)

---

## ⚙️ How to Clone & Run the Project

### Requirements
- Ruby 3.4.7
- Rails 8.1.3
- PostgreSQL
- Node.js

### Clone the repository
```bash
git clone https://github.com/IvonneBenitesRodriguez/web-application-security-project.git
cd web-application-security-project
```
### Backend Setup
```bash
cd backend
bundle install
cp .env.example .env
# Add your database credentials in .env
rails db:create db:migrate
rails server
```
### Run Backend Tests
```bash
bundle exec rspec
```
### Frontend
Open `docs/index.html` in your browser or visit the GitHub Pages URL.

### Run Frontend Tests
```bash
cd docs
npm test
```

---

## 🚀 Deployment

| Layer | Platform | URL |
|-------|----------|-----|
| Frontend | GitHub Pages | [Live Frontend](https://ivonnebenitesrodriguez.github.io/web-application-security-project) |
| Backend | Railway | [Live Backend](https://web-application-security-project-production.up.railway.app) |

---

## 🗄️ Database

**PostgreSQL** is used as the production database, hosted on Railway.

![Database](screenshots/DATABASE-USED-PG-ADMIN.png)

---

## ✅ Live in Production



