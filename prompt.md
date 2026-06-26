# GPT-4.1 Coding Agent Prompt

You are a Staff+ Frontend Engineer and UI/UX expert.

Build a production-quality portfolio website for **Nandini Kumar**.

The website should feel like a luxury fashion brand rather than a traditional portfolio.

The design language should be inspired by high-end fashion editorials, luxury wedding brands, premium design studios, and boutique creative agencies.

---

# Overall Theme

Use the uploaded **theme.jpg** as the single source of inspiration.

The mood is:

- Calm
- Sophisticated
- Editorial
- Minimal
- Warm
- Elegant
- Spacious
- Premium
- Timeless
- Luxury

Avoid:

- Bright colors
- Loud gradients
- Heavy shadows
- Tech startup aesthetics
- Glassmorphism
- Neon
- Rounded playful cards
- Material UI look
- Bootstrap look

Everything should feel handcrafted.

---

# Color Palette

Extract and consistently use the colors from theme.jpg.

Primary background:

RGB(149,129,118)

Approx Hex:

`#958176`

Secondary background:

RGB(224,201,168)

Approx Hex:

`#E0C9A8`

Primary text:

RGB(255,255,255)

Secondary text:

RGB(245,241,236)

Dark text:

RGB(35,35,35)

Muted text:

RGB(130,130,130)

Accent:

Use the warm beige from the image.

No saturated accent colors.

---

# Typography

Use elegant typography.

Heading:

Playfair Display

Body:

Inter

or

Manrope

Large typography.

Generous spacing.

Luxury editorial feel.

---

# Website Structure

The website has **3 pages**.

- Home
- About
- ArtistiqueTale
- NKFA

Navigation should exist on every page.

---

# Navbar

Transparent initially.

Turns solid after scrolling.

Height:

72px

Layout:

Left:

- logo from

```
media/logo.png
```

- Nandini Kumar

Right:

- About
- ArtistiqueTale
- NKFA
- Services
- Contact

Desktop:

Horizontal navbar.

Mobile:

Hamburger.

Sticky navigation.

Smooth transitions.

---

# Global Layout

Every page should have:

Large margins.

Maximum width:

1400px

Centered content.

Section spacing:

120px+

Whitespace is important.

Every section ends with a small downward arrow centered horizontally.

Clicking the arrow smoothly scrolls to the next section.

Arrow should animate gently.

---

# Animations

Use Framer Motion.

Animations should be subtle.

Examples:

- fade up
- fade in
- slight image reveal
- parallax
- smooth hover zoom
- text reveal

No flashy animations.

---

# Images

Never hardcode image names.

Automatically load every image inside each directory.

Example:

```
media/About/
```

should automatically populate the gallery.

Same for:

```
media/HeroBanner/
media/ArtistiqueTale/
media/NKFA/
```

---

# Text Files

Load section descriptions from:

```
text/HeroBanner.txt
text/About.txt
text/ArtistiqueTale.txt
text/NKFA.txt
```

Do NOT hardcode text.

---

# HOME PAGE

The homepage contains these sections:

1 Hero Banner

2 About

3 ArtistiqueTale

4 NKFA

5 Services

6 Contact

Every section occupies almost the full viewport.

---

# Hero Banner

Images:

```
media/HeroBanner/
```

Use a cinematic slideshow.

Crossfade.

Ken Burns effect.

Large full-screen imagery.

Overlay with a subtle warm tint.

Center aligned text:

Entrepreneur • Fashion Visionary • Creative Director • Cultural Advocate • Mentor

Large typography.

Elegant entrance animation.

CTA:

Explore Journey

Scroll Indicator

---

# About Section

Layout:

Left:

A vertical stack of overlapping editorial images.

Use only a few representative images.

Right:

Load text from:

```
text/About.txt
```

Headline:

About

Editorial magazine layout.

---

# ArtistiqueTale Section

Same visual language.

Left:

Layered images.

Right:

Text from:

```
text/ArtistiqueTale.txt
```

Button:

Explore Collection

Links to ArtistiqueTale page.

---

# NKFA Section

Same layout.

Images left.

Text right.

Button:

Explore NKFA

Links to NKFA page.

---

# Services Section

Large elegant typography.

Use editorial layout.

Title:

Wedding Curation Experience

Subtitle:

By Nandini Kumar

Introduction:

Where timeless tradition meets modern luxury.

Display the provided content beautifully.

Instead of bullet lists, create elegant service cards.

Service Groups:

## Signature Wedding Curation Services

- Bridal Styling
- The Groom Edit
- Couple Styling
- Family Styling
- Personal Colour Analysis
- Bridal Shopping Assistance
- Luxury Sourcing
- Shopping Strategy
- Jewellery & Accessory Integration
- Online Wedding Consultations

---

## Luxury Bridal & NRI Trousseau Services

- Luxury bridal styling
- Bespoke trousseau curation
- Capsule Wedding Wardrobe
- Destination Wedding Support
- Luxury Virtual Styling

---

## NKFA Bridal Trousseau Clarity Session

Show in a highlighted luxury panel.

Include:

- 45 minute consultation
- Wardrobe mapping
- Styling direction
- Expert guidance

Investment:

Price on request

Primary CTA:

Book A Consultation

---

# Consultation Form

Elegant minimal form.

Fields:

Bride Name

Groom Name

Wedding Date

Residence

Phone

Email

Instagram

Wedding Location

Wedding Type

Checkboxes:

- Intimate Wedding
- Destination Wedding
- Traditional Wedding
- Luxury Wedding
- NRI Wedding
- Multi-City Celebrations

Consultation Mode

Radio buttons:

- In Person
- Video
- Phone

Preferred Date

Preferred Time

Large submit button.

No backend required.

Mock submit.

---

# Contact Section

Minimal.

Elegant.

Placeholder content.

Email

Phone

WhatsApp

Instagram

LinkedIn

Location

Footer:

© Nandini Kumar

---

# ABOUT PAGE

Purpose:

Media gallery.

Layout:

Hero title.

Description loaded from

```
text/About.txt
```

Below:

Responsive masonry gallery.

Use every image from:

```
media/About/
```

Click image:

Fullscreen lightbox.

Keyboard navigation.

---

# ARTISTIQUETALE PAGE

Hero.

Description from

```
text/ArtistiqueTale.txt
```

Responsive masonry gallery.

Images from

```
media/ArtistiqueTale/
```

Fullscreen viewer.

---

# NKFA PAGE

Hero.

Description from

```
text/NKFA.txt
```

Responsive masonry gallery.

Images from

```
media/NKFA/
```

Fullscreen viewer.

---

# Galleries

Pinterest/editorial style.

Different image heights.

No cropping where possible.

Lazy loading.

Hover:

Slight zoom.

Soft overlay.

---

# Footer

Consistent on every page.

Minimal.

Luxury.

Links:

Home

About

ArtistiqueTale

NKFA

Services

Contact

Social icons.

---

# Responsiveness

Desktop first.

Tablet optimized.

Mobile optimized.

Image stacks become carousels on mobile.

Typography scales appropriately.

Navigation becomes hamburger.

No horizontal scrolling.

---

# Accessibility

Semantic HTML.

Proper landmarks.

Keyboard navigation.

Alt text.

Visible focus states.

Good contrast.

---

# Performance

Lazy load images.

Optimize rendering.

Avoid layout shifts.

Use modern image components.

---

# Tech Stack

Use:

- React
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

Optional:

- react-photo-album
- yet-another-react-lightbox

---

# Folder Structure

```
media/
│
├── logo.png
├── HeroBanner/
├── About/
├── ArtistiqueTale/
└── NKFA/

text/
│
├── HeroBanner.txt
├── About.txt
├── ArtistiqueTale.txt
└── NKFA.txt
```

---

# Code Quality

- Modular components
- Reusable layouts
- Clean folder structure
- Type-safe
- Responsive
- Production-ready
- No placeholder lorem ipsum except Contact placeholders
- Automatically renders all images found in each media directory
- Automatically loads text from corresponding text files
- Consistent visual language across all pages

The final result should feel like the online presence of a globally recognized fashion stylist and creative director—minimal, editorial, luxurious, timeless, immersive, and emotionally engaging.