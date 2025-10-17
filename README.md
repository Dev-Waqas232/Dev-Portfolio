# Waqas Munir - Portfolio

A stunning, modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Beautiful dark theme with gradient effects
- 🎨 Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎯 Type-safe with TypeScript
- 🎭 Modern UI/UX with Tailwind CSS
- 📊 Easy-to-update project data structure

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Icons:** React Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Update your personal information:
   - Edit `/src/data/contact.ts` with your contact details
   - Edit `/src/data/projects.ts` to add/modify your projects
   - Edit `/src/data/skills.ts` to customize your skills

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Short description',
  longDescription: 'Detailed description (optional)',
  technologies: ['Tech1', 'Tech2'],
  imageUrl: 'image-url (optional)',
  demoUrl: 'demo-url (optional)',
  githubUrl: 'github-url (optional)',
  featured: true, // Set to true for featured projects
}
```

### Updating Contact Information

Edit `src/data/contact.ts`:

```typescript
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  whatsapp: 'https://wa.me/1234567890',
};
```

### Modifying Skills

Edit `src/data/skills.ts` to add or remove skills and categories.

### Changing Colors

Colors are configured in `tailwind.config.js`. The main color scheme uses:
- `primary`: Blue tones
- `accent`: Purple/Pink tones

You can customize these in the `theme.extend.colors` section.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📄 Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/              # Data files (easy to edit)
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── contact.ts
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎯 Performance

- Optimized bundle size
- Lazy loading images
- Smooth animations
- Fast initial load

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact

For any questions or suggestions, feel free to reach out!

---

Made with ❤️ using React, TypeScript, and Tailwind CSS




