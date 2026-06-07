/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║      VARAVI MAKEUP HENNA ARTIST — SITE CONFIG           ║
 * ║  ✏️  ONLY THIS FILE NEEDS EDITING FOR CONTENT UPDATES   ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * HOW TO ADD YOUR OWN PHOTOS:
 * Option A – From Instagram (desktop):
 *   1. Open instagram.com/varavimakeuphennaartist
 *   2. Click a photo → right-click the image → "Copy image address"
 *   3. Paste that URL as the  image:  value below
 *
 * Option B – Your own files:
 *   1. Drop photo into  assets/images/  folder
 *   2. Set  image: "assets/images/your-photo.jpg"
 *
 * Option C – Google Drive:
 *   Change: drive.google.com/file/d/FILE_ID/view
 *   To:     drive.google.com/uc?id=FILE_ID
 */

const SITE = {

  /* ── BUSINESS INFO ── */
  business: {
    name:        "Varavi MakeUp Henna Artist",
    shortName:   "Varavi",
    artistName:  "Varalakshmi",
    title:       "Certified Bridal Makeup Artist & Henna Specialist",
    tagline:     "Where Every Bride Becomes Her Most Beautiful Self",
    bio:         "With over 8 years of experience creating unforgettable bridal transformations across South India, I blend classical beauty traditions with modern artistry. Every client deserves to feel radiant, confident, and authentically themselves on their most precious day.",
    bio2:        "From intricate Mehandi patterns that tell your love story, to flawless bridal looks that photograph beautifully under every light — each detail is crafted with passion, precision, and deep respect for your heritage.",
    experience:  "8+",
    brides:      "500+",
    events:      "1,200+",
    rating:      "4.9",
    reviewCount: "300+",
  },

  /* ── CONTACT ← UPDATE THESE ── */
  contact: {
    phone:     "+91 99999 99999",
    whatsapp:  "919999999999",
    email:     "varavimakeup@gmail.com",
    instagram: "varavimakeuphennaartist",
    location:  "Chennai, Tamil Nadu, India",
    hours:     "Monday – Sunday  ·  9:00 AM – 8:00 PM",
    mapLink:   "https://maps.google.com",
  },

  /* ── NAVIGATION ── */
  nav: [
    { label: "Home",     href: "index.html"    },
    { label: "About",    href: "about.html"    },
    { label: "Services", href: "services.html" },
    { label: "Gallery",  href: "gallery.html"  },
    { label: "Contact",  href: "contact.html"  },
  ],

  /* ── IMAGES ← Replace with YOUR photos ── */
  images: {
    hero:  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=90",
    about: "https://images.unsplash.com/photo-1487412840831-e848a9e8ce21?auto=format&fit=crop&w=900&q=90",
  },

  /* ── SERVICES ── */
  services: [
    {
      id: "bridal", icon: "💍", badge: "Most Popular", featured: true,
      title:    "Bridal Makeup Artist",
      short:    "A flawless wedding-day look crafted entirely for you.",
      desc:     "Your wedding day is once in a lifetime — your look should be too. We craft a completely personalised bridal look that flatters your unique features, lasts through every emotional moment, and photographs beautifully from the morning puja to the midnight reception.",
      includes: ["One-on-one consultation & skin analysis","Full face, eye & lip makeup","HD & airbrush finish options","Long-wear transfer-proof products","Touch-up kit provided on the day"],
      image:    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "southasian", icon: "✨", badge: null, featured: false,
      title:    "South Asian Bridal",
      short:    "Honouring the grandeur of South Asian wedding traditions.",
      desc:     "Rich jewel-toned eyeshadows, precise kajal and liner work, luminous skin prep — all crafted with deep reverence for Hindu, Muslim, and Sikh wedding aesthetics. A look that honours your heritage while celebrating your individuality.",
      includes: ["Traditional & fusion bridal looks","Jewellery-matching colour palette","Gold & glitter application","Heavy-coverage flawless base","Temple, mosque & church ceremony ready"],
      image:    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "glam", icon: "🌟", badge: null, featured: false,
      title:    "Celebrity & Party Glam",
      short:    "Bold, editorial looks for events, shoots & celebrations.",
      desc:     "Turn every sangeet, reception, or red-carpet event into your personal runway. Dramatic, photogenic looks engineered to turn heads and light up every camera — in natural light or studio conditions.",
      includes: ["Sangeet, reception & event looks","Editorial & shoot-ready glam","Smoky eyes, bold lips, dewy glass skin","Studio & outdoor lighting tested","Group bookings welcome"],
      image:    "https://images.unsplash.com/photo-1596704017254-9e89c88f6cdc?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "henna", icon: "🌿", badge: null, featured: false,
      title:    "Custom Mehandi / Henna",
      short:    "Intricate, personalised designs that tell your love story.",
      desc:     "Every pattern is designed personally for you — from elaborate traditional bridal Mehandi spanning both hands and feet to delicate modern fusion art. Premium-grade natural henna for rich, dark colour that deepens beautifully over time.",
      includes: ["Full bridal hand & feet Mehandi","Modern fusion & minimalist patterns","Hidden initials & personalised motifs","100% natural henna — no chemicals","Arm, back & neck designs available"],
      image:    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "saree", icon: "🥻", badge: "New", featured: false,
      title:    "Expert Saree & Dhoti Draping",
      short:    "Flawless draping in 30+ regional styles. Stays perfect all day.",
      desc:     "The perfect saree look is entirely in the drape. We expertly drape sarees and dhotis in over 30 regional styles — Nivi, Bengali, Gujarati, Madisar, Coorg — pinned and finished to stay immaculate from the first ceremony to the last dance.",
      includes: ["30+ regional draping styles","Bridal Madisar & Kanjivaram silk","Blouse pinning & petticoat finishing","Dhoti & veshti draping for men","Pre-event & day-of draping available"],
      image:    "https://images.unsplash.com/photo-1610189025-22891d29b5b1?auto=format&fit=crop&w=800&q=85",
    },
  ],

  /* ── GALLERY ← ADD YOUR INSTAGRAM PHOTOS HERE ──
     category: "bridal" | "southasian" | "henna" | "glam" | "saree"
     span: "wide" = double-width (for hero shots)                   */
  gallery: [
    { image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85", title: "Classic Bridal Glam",        category: "bridal",     span: "wide" },
    { image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=85", title: "South Asian Bridal",         category: "southasian" },
    { image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=85", title: "Traditional Henna Art",      category: "henna" },
    { image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=85", title: "Bridal Morning Prep",        category: "bridal" },
    { image: "https://images.unsplash.com/photo-1596704017254-9e89c88f6cdc?auto=format&fit=crop&w=700&q=85", title: "Party Glam Night Look",      category: "glam" },
    { image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",    title: "Traditional Jewel Bridal",   category: "southasian", span: "wide" },
    { image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=85", title: "Reception Night Glam",       category: "glam" },
    { image: "https://images.unsplash.com/photo-1610189025-22891d29b5b1?auto=format&fit=crop&w=700&q=85",    title: "Elegant Saree Draping",      category: "saree" },
    { image: "https://images.unsplash.com/photo-1583391733981-8498408ee4b6?auto=format&fit=crop&w=700&q=85", title: "Bridal Mehandi Patterns",    category: "henna" },
    { image: "https://images.unsplash.com/photo-1516726817505-a8a4a0b78cfe?auto=format&fit=crop&w=700&q=85", title: "Tamil Bridal Portrait",      category: "bridal" },
    { image: "https://images.unsplash.com/photo-1487412840831-e848a9e8ce21?auto=format&fit=crop&w=700&q=85", title: "Dewy Skin Glam",             category: "glam" },
    { image: "https://images.unsplash.com/photo-1519308783770-e48a9e8ce21?auto=format&fit=crop&w=700&q=85",  title: "Bridal Eye Art",             category: "bridal" },
  ],

  /* ── TESTIMONIALS ── */
  testimonials: [
    { name: "Priya Krishnamurthy", event: "Tamil Bridal · Chennai",       initials: "PK", color: "#C49A2A", stars: 5, text: "Varalakshmi made me feel like an absolute queen. My bridal look was beyond everything I dreamed of — every single guest couldn't stop complimenting me. She is truly magical!" },
    { name: "Zara Ahmed",          event: "Bridal Mehandi · Hyderabad",   initials: "ZA", color: "#C4838A", stars: 5, text: "The Mehandi design was so intricate and personal — she hid our initials inside the pattern! Months later I'm still showing people the photos. Absolutely stunning." },
    { name: "Kavitha Suresh",      event: "South Asian Bridal · Chennai", initials: "KS", color: "#7B9E87", stars: 5, text: "My saree stayed perfectly draped through the entire 10-hour wedding! The makeup was fresh and flawless in every single photo. Varavi is the only artist I will ever recommend." },
    { name: "Roshni Patel",        event: "Celebrity Glam · Bangalore",   initials: "RP", color: "#9B7BB8", stars: 5, text: "My sangeet glam lasted all night and looked stunning in every photo and video. Everyone kept asking who did my makeup. Worth every single penny!" },
  ],

  /* ── PROCESS ── */
  process: [
    { num: "01", icon: "💬", title: "Consultation",  desc: "A detailed conversation about your vision, skin type, event & inspiration — virtual or in-person." },
    { num: "02", icon: "🪞", title: "Trial Session",  desc: "A full trial run to refine your look and test products on your skin before the big day." },
    { num: "03", icon: "✨", title: "Day-Of Glam",    desc: "We arrive fully prepared and create your perfected look with precision, care, and calm." },
    { num: "04", icon: "💄", title: "Touch-Up Kit",   desc: "We leave you with a personalised kit so your look stays flawless from morning to midnight." },
  ],
};
