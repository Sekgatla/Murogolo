# Murogolo Primary School — Official Website

**"Learning Today, Leading Tomorrow."**

This is the official website for **Murogolo Primary School**, a public primary school located in Ha Muila Village, Kwaaidraai, Tshitale, Makhado, Limpopo Province, South Africa.

---

## About the School

Murogolo Primary School serves learners from Grade R through Grade 7. The school is committed to providing quality education in a safe, supportive, and inclusive environment — rooted in African community values and a deep belief that every child has the potential to succeed.

---

## Website Pages

| Page | Description |
|------|-------------|
| `/` | **Home** — Hero with 3D animation, vision/mission/values, principal's message, donation banner |
| `/about` | **About** — School background, what makes us special, community involvement |
| `/academics` | **Academics** — Foundation Phase (R–3), Intermediate & Senior Phase (4–7), all 8 learning areas |
| `/activities` | **Activities** — Sports, athletics, cultural activities, leadership programmes |
| `/admissions` | **Admissions** — Enrollment process, required documents |
| `/contact` | **Contact** — Phone, address, operating hours, OpenStreetMap embed, parents & community section |
| `/donate` | **Donate** — Donation tiers, payment methods (Credit/Debit, Instant EFT, SnapScan/Zapper), FNB bank details, resource donations, impact section |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Routing | Wouter |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Fonts | Playfair Display (headings) + Plus Jakarta Sans (body) |
| Package Manager | pnpm (monorepo) |

---

## Project Structure

```
artifacts/school-website/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Hero, vision/mission, principal
│   │   ├── About.tsx         # School background, community
│   │   ├── Academics.tsx     # Curriculum, grades, learning areas
│   │   ├── Activities.tsx    # Sports, cultural, leadership
│   │   ├── Admissions.tsx    # Enrollment, required documents
│   │   ├── Contact.tsx       # Contact info + OpenStreetMap
│   │   └── Donate.tsx        # Donation form + bank details
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   │   ├── Footer.tsx        # Footer with address and motto
│   │   └── ThreeScene.tsx    # Animated 3D orbs for hero section
│   ├── App.tsx               # Router and layout wrapper
│   └── index.css             # Global theme, custom properties, Google Fonts
└── package.json
```

---

## School Contact Details

| | |
|-|---|
| **Address** | Ha Muila Village, Kwaaidraai, Tshitale, Makhado, Limpopo |
| **Postal** | P.O. Box 354, Muila, Limpopo |
| **Phone** | 082 668 8165 |
| **Hours** | Monday – Friday, 07:30 – 14:30 |

---

## Donation Bank Details (FNB)

| | |
|-|---|
| **Bank** | FNB (First National Bank) |
| **Account Name** | Murogolo Primary School |
| **Account Number** | 62345678901 |
| **Branch Code** | 250655 |

Resource donations (books, stationery, sports equipment, uniforms) can be dropped off at the school office.

---

## Running Locally

```bash
# Install dependencies
pnpm install

# Start the school website
pnpm --filter @workspace/school-website run dev

# Typecheck
pnpm --filter @workspace/school-website run typecheck
```

---

## School Vision

> "To be a leading primary school that inspires excellence, integrity, creativity, and lifelong learning in every learner."

## Core Values

**Respect · Integrity · Excellence · Responsibility · Teamwork · Discipline · Compassion**

---

*Built with care for the Murogolo community — Ha Muila Village, Limpopo, South Africa.*
