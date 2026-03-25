# Portfolio Website Specification

## Concept & Vision
A captivating, immersive portfolio website that commands attention through fluid animations, bold color gradients, and magnetic interactions. The experience should feel like exploring a digital art gallery — each scroll reveals new visual surprises, creating an unforgettable first impression that sets the user apart from typical portfolio sites.

## Design Language

### Aesthetic Direction
Cyberpunk-meets-modern minimalism with glassmorphism elements. Dark backgrounds with vibrant gradient accents create depth and drama.

### Color Palette
- **Primary Gradient**: `#667eea` → `#764ba2` (Purple-violet dream)
- **Secondary Gradient**: `#f093fb` → `#f5576c` (Pink flame)
- **Accent Gradient**: `#4facfe` → `#00f2fe` (Electric cyan)
- **Background**: `#0a0a1a` (Deep space black)
- **Surface**: `rgba(255, 255, 255, 0.05)` (Glass panels)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `rgba(255, 255, 255, 0.7)`

### Typography
- **Headings**: 'Poppins', sans-serif (700 weight)
- **Body**: 'Inter', sans-serif (400, 500 weights)
- **Code/Accent**: 'JetBrains Mono', monospace

### Motion Philosophy
- **Entrance animations**: Elements fade up with stagger (50ms between items)
- **Scroll-triggered reveals**: Intersection Observer with 0.15 threshold
- **Hover effects**: Scale 1.05 with glow intensification
- **Background**: Floating gradient orbs with slow parallax movement
- **Text animations**: Typewriter effect on hero, gradient text on hover

## Layout & Structure

### Navigation
Fixed glassmorphism navbar with smooth scroll to sections, active state highlighting

### Sections (in order)
1. **Hero/Home**: Full viewport, animated gradient background with floating orbs, typewriter name, CTA buttons
2. **Skills**: Animated skill bars with percentage counters, icon cards with hover glow
3. **Experience**: Timeline design with alternating cards, scroll-triggered slide-in
4. **Projects**: Grid cards with image preview, overlay animations, GitHub links
5. **Training**: Horizontal scroll cards with course details
6. **Certifications**: Badge-style display with animated borders
7. **Achievements**: Counter animation on scroll, trophy/icon visualizations
8. **Education**: Institution cards with animated borders

### Responsive Strategy
- Desktop: Multi-column layouts, full animations
- Tablet: 2-column grids, reduced animation complexity
- Mobile: Single column, essential animations preserved

## Features & Interactions

### Core Features
- Smooth scroll navigation
- Scroll-triggered animations (AOS-like custom implementation)
- Particle/gradient orb background animation
- Animated skill progress bars
- Interactive project cards with hover effects
- Typing animation on hero section
- Animated statistics counters
- Glassmorphism UI elements

### Interaction Details
- Nav links: Smooth scroll with 800ms duration
- Cards: Scale to 1.05 on hover, box-shadow glow intensifies
- Buttons: Gradient shift on hover, ripple effect on click
- Skill bars: Fill animation triggered on scroll into view
- Timeline items: Stagger slide-in from left/right alternating

## Component Inventory

### Navbar
- Glassmorphism background (blur 20px, 10% white)
- Logo with gradient text
- Nav links with underline animation
- Mobile hamburger menu

### Hero Section
- Animated gradient orbs background
- Large heading with typewriter effect
- Subtitle fade-in
- CTA buttons with gradient borders

### Section Headings
- Gradient text
- Animated underline
- Fade-up entrance

### Skill Cards
- Icon with gradient background
- Progress bar with percentage
- Animated fill on scroll

### Timeline
- Vertical line with gradient
- Alternating cards
- Date badges
- Scroll-triggered slide animations

### Project Cards
- Image container with overlay
- Title and description
- Tech stack tags
- Hover reveal of links

### Stat Counters
- Large number with count-up animation
- Icon and label
- Glow effect

## Technical Approach
- **Framework**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Animations**: CSS animations + Intersection Observer API
- **Fonts**: Google Fonts (Poppins, Inter)
- **Icons**: Font Awesome 6
- **Deployment**: Static files ready for GitHub Pages
