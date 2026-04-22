# BK-TECH ACADEMY - Password Validator

A stunning, high-end password validation form with real-time feedback and beautiful animations. Built with modern web technologies and featuring a glassmorphism design with blue/black color scheme.

## 🌟 Features

### Real-Time Password Validation

- **Length Check**: Minimum 10 characters required
- **Character Restrictions**: No special characters allowed
- **Uppercase Letter**: At least 1 uppercase letter (A-Z)
- **Lowercase Letter**: At least 1 lowercase letter (a-z)
- **Number**: At least 1 numeric digit (0-9)
- **Symbol**: At least 1 special symbol (!@#$%^&\*, etc.)

### Visual Feedback

- ✅ Animated checkboxes that light up when requirements are met
- 🎨 Custom-styled checkboxes with gradient fills
- 🔒 Password confirmation with error messaging
- ✨ Success animation when account is created
- 🎯 Hover effects on all interactive elements

### Design Highlights

- **Glassmorphism Effect**: Frosted glass card with backdrop blur
- **Animated Background**: Floating gradient shapes
- **Blue/Black Theme**: Professional dark theme with blue accents
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Cubic-bezier transitions for premium feel

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - uses CDN for Tailwind CSS

### Installation

1. Clone or download this repository
2. Open `docs/index.html` in your browser
3. Start typing a password to see the validation in action!

### File Structure

```
.
├── docs/
│   ├── index.html          # Main HTML file with embedded styles
│   └── src/
│       └── index.js        # JavaScript validation logic
├── index.html              # Alternative standalone version
├── index.js                # Alternative standalone JS
└── README.md               # This file
```

## 💻 Usage

### Try It Out

1. Open the page in your browser
2. Fill in the form fields:
   - Full Name
   - Email Address
   - Phone Number
   - Password
   - Confirm Password
3. Watch the checkboxes animate as you meet each requirement
4. Once all requirements are met, the "Create Account" button becomes active
5. Click to see the success message!

### Example Valid Password

Try typing: `MyPassword123!`

This password meets all requirements:

- ✅ 14 characters (more than 10)
- ✅ No special characters in restricted range
- ✅ Contains uppercase: M, P
- ✅ Contains lowercase: y, a, s, s, w, o, r, d
- ✅ Contains numbers: 1, 2, 3
- ✅ Contains symbol: !

## 🎨 Customization

### Colors

The color scheme uses CSS variables and Tailwind classes. Main colors:

- **Primary Blue**: `#3b82f6`
- **Dark Blue**: `#1d4ed8`
- **Background**: `#000428` to `#004e92` gradient
- **Accent**: Blue-400, Blue-500, Blue-600

### Validation Rules

Edit `index.js` or `docs/src/index.js` to modify validation logic:

```javascript
// Change minimum length
function checklength(password) {
  if (password.length < 10) {
    // Change 10 to your desired length
    Status.checked = false;
  } else {
    Status.checked = true;
  }
}
```

### Styling

All styles are embedded in the HTML file using:

- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Custom CSS**: Additional animations and effects in `<style>` tag
- **Google Fonts**: Poppins font family

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: > 768px (lg)

The form automatically adjusts:

- Single column on mobile
- Two-column grid for password requirements on tablet/desktop
- Adaptive text sizes and spacing

## 🔧 Technical Details

### Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)

### Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support
- IE11: ❌ Not supported (uses modern CSS features)

### Performance

- Lightweight: No heavy frameworks
- Fast load time: CDN-hosted dependencies
- Smooth animations: Hardware-accelerated CSS transforms
- Efficient validation: Real-time with minimal overhead

## 🎯 Validation Logic

The password validator checks:

1. **Length**: Uses `password.length` property
2. **Character Codes**: Uses `charCodeAt()` to check ASCII values
   - Uppercase: 65-90
   - Lowercase: 97-122
   - Numbers: 48-57
   - Symbols: Various ranges (33-47, 58-64, 91-96, 123-126)
3. **Special Characters**: Validates against restricted character range (0-32, 127+)

## 🐛 Known Issues

None at this time! If you find any bugs, please report them.

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

**BK-TECH ACADEMY**

## 🙏 Acknowledgments

- Tailwind CSS for the utility framework
- Google Fonts for Poppins typeface
- Inspiration from modern UI/UX design trends

---

**Note**: This is a front-end validation demo. For production use, always implement server-side validation as well for security purposes.
