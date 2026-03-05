# Portfolio Customization Checklist

Use this checklist to quickly customize your portfolio with your personal information.

## ✅ Essential Customizations

### 1. Hero Section (`components/Hero.tsx`)

- [ ] Line 7: Replace `"Your Name"` with your actual name
- [ ] Line 9: Update job title/tagline (currently "Computer Engineer")
- [ ] Line 11-12: Update your personal introduction text

**Example:**
```tsx
<h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6">
  Hi, I'm <span className="text-blue-600 dark:text-blue-500">John Doe</span>
</h1>
<h2 className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 mb-8">
  Embedded Systems Engineer
</h2>
```

### 2. About Section (`components/About.tsx`)

- [ ] Lines 11-16: Update your personal bio
- [ ] Lines 17-22: Add your unique story/expertise
- [ ] Lines 25-27: Update education information
- [ ] Line 10: Replace gradient div with your photo (optional)

**Example for adding your photo:**
```tsx
<div>
  <Image 
    src="/your-photo.jpg" 
    alt="Your Name"
    width={400}
    height={400}
    className="rounded-lg"
  />
</div>
```

### 3. Skills Section (`components/Skills.tsx`)

- [ ] Lines 4-31: Update skills based on your expertise
- [ ] Add/remove skill categories as needed
- [ ] Add/remove individual skills

**Tip:** Organize by your strongest areas first!

### 4. Projects Section (`components/Projects.tsx`)

- [ ] Lines 4-39: Replace ALL placeholder projects with your actual projects
- [ ] Update project titles
- [ ] Update descriptions
- [ ] Update tech stacks
- [ ] Add real GitHub links (replace `"#"`)
- [ ] Add real demo links (replace `"#"`)

**Example:**
```tsx
{
  title: "Your Actual Project",
  description: "What it does and why it matters",
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project-repo",
  demo: "https://project-demo.com",
}
```

### 5. Contact Section (`components/Contact.tsx`)

- [ ] Line 44: Update email address
- [ ] Lines 59-64: Update GitHub username and URL
- [ ] Lines 79-84: Update LinkedIn URL
- [ ] Lines 108-124: Implement form submission (see Form Integration below)

### 6. Footer (`components/Footer.tsx`)

- [ ] Line 7: Update `"Your Name"` with your actual name
- [ ] Lines 9-31: Update all social media links

### 7. Metadata (`app/layout.tsx`)

- [ ] Lines 17-19: Update page title and description for SEO

## 🎨 Optional Enhancements

### Color Scheme

Want to change the primary color? Update all instances of:
- `blue-600` → your preferred color (e.g., `purple-600`, `green-600`)
- `blue-500` → adjust for dark mode

Common color pairs:
- Blue: `blue-600` / `blue-500`
- Purple: `purple-600` / `purple-500`
- Green: `green-600` / `green-500`
- Red: `red-600` / `red-500`

### Adding Your Photo

1. Add your photo to the `/public` folder (e.g., `profile.jpg`)
2. Import Image from next/image in `components/About.tsx`
3. Replace the gradient div (line 10) with:

```tsx
<Image 
  src="/profile.jpg" 
  alt="Your Name"
  width={500}
  height={500}
  className="rounded-lg object-cover aspect-square"
/>
```

### Form Integration

For the contact form to actually work, integrate with one of these services:

#### Option 1: EmailJS (Free, Easy)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `pnpm add @emailjs/browser`
3. Update `handleSubmit` in `components/Contact.tsx`

#### Option 2: Formspree (Free, Easy)

1. Sign up at [Formspree](https://formspree.io/)
2. Just change form action:
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option 3: Custom API

Create your own API endpoint in `app/api/contact/route.ts`

## 📱 Social Media Links

Update these in multiple places:

1. **Contact Section** (`components/Contact.tsx`): Lines 44-84
2. **Footer** (`components/Footer.tsx`): Lines 9-31

Social platforms you might want to add:
- GitHub
- LinkedIn  
- Email
- Twitter/X
- Personal website
- Medium/Dev.to
- Stack Overflow

## 🚀 Before Deploying

- [ ] Test all navigation links work
- [ ] Test form submission (if implemented)
- [ ] Check responsive design on mobile
- [ ] Verify all social links are correct
- [ ] Test in both light and dark mode
- [ ] Update browser tab icon (`app/favicon.ico`)
- [ ] Add real project images if possible

## 💡 Content Writing Tips

### About Section
- Keep it conversational and authentic
- Highlight what makes you unique
- Mention your passion/interests
- Include current status (student/professional)

### Project Descriptions
- Start with the problem you solved
- Explain your role if it was a team project
- Highlight the tech stack
- Mention any notable achievements (users, performance, etc.)

### Skills
- List skills you're comfortable discussing in an interview
- Organize by proficiency level
- Include relevant soft skills if you add that section

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev

Remember: Your portfolio should represent YOU. Feel free to modify the design, add sections, or remove things that don't fit your style!
