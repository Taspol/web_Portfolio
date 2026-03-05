# Computer Engineering Portfolio

A minimal and modern web portfolio built with Next.js and Tailwind CSS, designed for computer engineering professionals and students.

## Features

- ✨ Modern and minimal design
- 🌙 Dark mode support (automatic based on system preference)
- 📱 Fully responsive layout
- ⚡ Built with Next.js 16 and React 19
- 🎨 Styled with Tailwind CSS v4
- 📝 TypeScript for type safety
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

Dependencies are already installed. If you need to reinstall:
```bash
pnpm install
```

### Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization Guide

### Personal Information

Edit the following files to add your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Replace "Your Name" with your actual name
   - Update the description text

2. **About Section** (`components/About.tsx`):
   - Update your bio and description
   - Change education details
   - Replace the gradient placeholder with your photo

3. **Skills Section** (`components/Skills.tsx`):
   - Add or remove skills based on your expertise
   - Customize skill categories

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update project titles, descriptions, tech stacks
   - Add links to GitHub repos and live demos

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address: `your.email@example.com`
   - Update GitHub username: `yourusername`
   - Update LinkedIn URL: `linkedin.com/in/yourusername`
   - Implement form submission logic (e.g., EmailJS, Formspree, or your own API)

6. **Footer** (`components/Footer.tsx`):
   - Update your name and social links

7. **Metadata** (`app/layout.tsx`):
   - Update title and description for SEO

### Styling

The portfolio uses Tailwind CSS v4. Customize colors and styles in:
- `app/globals.css` - Global styles and CSS variables
- Individual component files - Component-specific styles

### Adding New Sections

To add new sections:
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/Navigation.tsx`

## Build for Production

Build the optimized production bundle:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
pnpm dlx vercel
```

### Other Platforms

You can also deploy to:
- Netlify
- GitHub Pages
- AWS
- Any hosting platform that supports Node.js

## Project Structure

```
webport/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page combining all sections
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero/landing section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Projects.tsx      # Projects portfolio
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer section
└── public/               # Static assets
```

## Technologies Used

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Package Manager**: pnpm

## Tips for Computer Engineering Portfolio

Consider adding these sections based on your experience:
- **Research Papers**: If you've published any papers
- **Certifications**: Professional certifications or courses
- **Lab Projects**: Hardware projects with photos/videos
- **GitHub Stats**: Showcase your open-source contributions
- **Blog**: Share technical articles and tutorials

## Troubleshooting

If you encounter any issues:

1. **Port already in use**: Kill the process or use a different port
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Lock acquisition failure**: Remove .next directory
   ```bash
   rm -rf .next
   ```

3. Check that Node.js version is 18 or higher:
   ```bash
   node --version
   ```

For more help, refer to [Next.js Documentation](https://nextjs.org/docs).
