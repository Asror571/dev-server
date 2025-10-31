// API test script
const API_URL = 'http://localhost:5000'; // yoki deploy qilingan URL

// Test health endpoint
fetch(`${API_URL}/`)
  .then(res => res.json())
  .then(data => console.log('Health check:', data))
  .catch(err => console.error('Error:', err));

// Test signup
fetch(`${API_URL}/api/auth/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'testuser',
    email: 'test@example.com',
    password: 'test123'
  })
})
.then(res => res.json())
.then(data => console.log('Signup test:', data))
.catch(err => console.error('Signup error:', err));