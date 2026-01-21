import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Contact'
import { SectionReveal } from '@/components/ui/section-reveal'

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary pt-32">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <SectionReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Terms and Conditions
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement
              made between you, whether personally or on behalf of an entity
              (“you”) and myself (“we,” “us” or “our”), concerning your access
              to and use of the website as well as any other media form, media
              channel, mobile website or mobile application related, linked, or
              otherwise connected thereto (collectively, the “Site”).
            </p>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, the “Content”) and the trademarks, service marks,
              and logos contained therein (the “Marks”) are owned or controlled
              by us or licensed to us, and are protected by copyright and
              trademark laws.
            </p>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              3. User Representations
            </h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                All registration information you submit will be true, accurate,
                current, and complete.
              </li>
              <li>
                You will maintain the accuracy of such information and promptly
                update such registration information as necessary.
              </li>
              <li>
                You have the legal capacity and you agree to comply with these
                Terms and Conditions.
              </li>
            </ul>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              4. Prohibited Activities
            </h2>
            <p>
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
          </div>
        </SectionReveal>
      </div>
      <Footer />
    </main>
  )
}
