const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

let users = [];
let bookings = [];

const bookingsTextFile = path.join(__dirname, 'bookings.txt');
const bookingsJsonFile = path.join(__dirname, 'booking.json');

// ===== Load Bookings from File on Startup =====
if (fs.existsSync(bookingsTextFile)) {
  const lines = fs.readFileSync(bookingsTextFile, 'utf-8')
    .split('\n')
    .filter(Boolean);

  bookings = lines.map(line => {
    try {
      return JSON.parse(line);
    } catch (e) {
      console.error('❌ Invalid line in bookings.txt:', line);
      return null;
    }
  }).filter(Boolean);
}

// ===== ✅ Middleware (only ONCE!) =====
app.use(cors({
  origin: [
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'https://armankhan02.github.io'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'travelmate-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static(__dirname));

// ===== User Registration =====
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.json({ success: false, message: 'User already exists' });
  }
  users.push({ name, email, password });
  res.json({ success: true, redirect: '/login.html' });
});

// ===== User Login =====
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    req.session.user = user;
    res.json({ success: true, redirect: '/dashboard.html' });
  } else {
    res.json({ success: false });
  }
});

// ===== Booking API =====
app.post('/book', (req, res) => {
  console.log("📨 Booking request received with body:", req.body);

  const { name, email, phone, date, package } = req.body;
  const entry = { name, email, phone, date, package };
  bookings.push(entry);

  try {
    fs.appendFileSync(bookingsTextFile, JSON.stringify(entry) + '\n');
    fs.writeFileSync(bookingsJsonFile, JSON.stringify(bookings, null, 2));
    res.json({
      success: true,
      message: 'Booking successful!',
      redirect: '/thankyou.html'
    });
  } catch (err) {
    console.error('❌ Error saving booking:', err);
    res.json({
      success: false,
      message: 'Failed to save booking. Please try again.'
    });
  }
});

// ===== Admin Login =====
const ADMIN = {
  username: 'admin',
  password: 'admin123'
};

app.post('/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN.username && password === ADMIN.password) {
    req.session.isAdmin = true;
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// ===== Middleware for Protected Routes =====
function authMiddleware(req, res, next) {
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.redirect('/login.html');
  }
}

// ===== Logout =====
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login.html');
});

// ===== Session Check =====
app.get('/session-check', (req, res) => {
  res.json({ isAdmin: req.session.isAdmin || false });
});

// ===== Serve Pages =====
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/thankyou.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'thankyou.html'));
});

app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/booking.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'booking.html'));
});

// ===== Bookings API =====
app.get('/bookings', (req, res) => {
  res.json(bookings);
});

// ===== Admin Page (Protected) =====
app.get('/admin.html', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
