# Data Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, specifically designed for data professionals showcasing their expertise in analytics, machine learning, and data engineering.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for data roles
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Fast Performance**: Optimized for speed and user experience
- **Contact Form**: Functional contact form with validation
- **Dark Mode Ready**: Easy to implement dark mode toggle

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS (ready to integrate)

## 📋 Sections

1. **Hero Section** - Introduction with call-to-action
2. **About Section** - Professional background and expertise
3. **Skills Section** - Technical skills with progress bars
4. **Projects Section** - Data-focused project showcase
5. **Experience Section** - Work history and achievements
6. **Contact Section** - Contact form and information
7. **Footer** - Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd data-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your personal information:

1. **`app/layout.tsx`** - Update metadata (title, description, keywords)
2. **`components/Hero.tsx`** - Update name, title, and social links
3. **`components/About.tsx`** - Update professional background
4. **`components/Skills.tsx`** - Update skills and proficiency levels
5. **`components/Projects.tsx`** - Update project details and links
6. **`components/Experience.tsx`** - Update work experience
7. **`components/Contact.tsx`** - Update contact information
8. **`components/Footer.tsx`** - Update social links

### Styling

- **Colors**: Update the primary color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Modify animation settings in components

### Content Structure

The portfolio is structured for data professionals with:

- **Data Science Focus**: ML, analytics, and engineering projects
- **Technical Skills**: Programming languages, tools, and platforms
- **Business Impact**: Quantified achievements and results
- **Professional Growth**: Progressive career development

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Update the EmailJS configuration in `components/Contact.tsx`
4. Add your EmailJS service ID and template ID

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices with:

- Responsive design
- Touch-friendly navigation
- Optimized images
- Fast loading times

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Ready to showcase your data expertise?** Update the content with your information and deploy your professional portfolio! 