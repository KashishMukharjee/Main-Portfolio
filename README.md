# Portfolio Website

A stunning, fully animated portfolio website with modern design and engaging interactions. Perfect for showcasing your skills, experience, and projects.

## ✨ Features

- **Fully Animated**: Smooth scroll animations, hover effects, and micro-interactions
- **Modern Design**: Glassmorphism, gradient backgrounds, and floating orbs
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **8 Sections**: Home, Skills, Experience, Projects, Training, Certifications, Achievements, Education
- **GitHub Pages Ready**: Static files ready for deployment

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your browser to view the portfolio.

### Option 2: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📦 Deploy to GitHub Pages

1. **Create a new repository** on GitHub

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

3. **Copy portfolio files** to the repository
   - Copy all files from `portfolio/` folder to your repo
   - Keep `index.html`, `styles.css`, and `script.js` in the root

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add portfolio website"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository **Settings** > **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

6. **Your site will be live at**: `https://yourusername.github.io/your-repo/`

## 🎨 Customization

### Update Personal Information

Edit `index.html` to customize:
- **Name/Title**: Find the typewriter text in the hero section
- **Stats**: Update the numbers in `.hero-stats`
- **Skills**: Modify skill cards with your technologies
- **Experience**: Update timeline items
- **Projects**: Add your project cards
- **Training & Certifications**: Update with your credentials
- **Contact Info**: Update email, phone, and social links

### Color Scheme

Modify `styles.css` CSS variables:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --bg-dark: #0a0a1a;
}
```

### Animation Settings

Adjust in `script.js`:
- Typewriter speed
- Scroll reveal threshold
- Counter animation duration
- Parallax effect intensity

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css     # All styles and animations
├── script.js      # Interactive JavaScript
├── SPEC.md        # Design specifications
└── README.md      # This file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive features
- **Google Fonts** - Typography (Poppins, Inter, JetBrains Mono)
- **Font Awesome** - Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - Feel free to use and customize!

---

Made with ❤️ for showcasing your work
