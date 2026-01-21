import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Contact'
import { SectionReveal } from '@/components/ui/section-reveal'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary pt-32">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <SectionReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              1. Introduction
            </h2>
            <p>
              Welcome to my portfolio. This Privacy Policy explains how I
              collect, use, disclose, and safeguard your information when you
              visit my website. Please read this privacy policy carefully. If
              you do not agree with the terms of this privacy policy, please do
              not access the site.
            </p>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              2. Information I Collect
            </h2>
            <p>
              I may collect information about you in a variety of ways. The
              information I may collect on the Site includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong className="text-foreground">Personal Data:</strong>{' '}
                Personally identifiable information, such as your name, shipping
                address, email address, and telephone number, and voluntarily
                give to me when you choose to participate in various activities
                related to the Site, such as contact forms.
              </li>
              <li>
                <strong className="text-foreground">Derivative Data:</strong>{' '}
                Information our servers automatically collect when you access
                the Site, such as your IP address, your browser type, your
                operating system, your access times, and the pages you have
                viewed directly before and after accessing the Site.
              </li>
            </ul>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              3. Use of Your Information
            </h2>
            <p>
              Having accurate information about you permits me to provide you
              with a smooth, efficient, and customized experience. I may use
              information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Compile anonymous statistical data and analysis for use
                internally.
              </li>
              <li>Contact you regarding inquiries or projects.</li>
              <li>Respond to product and customer service requests.</li>
            </ul>

            <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold">
              4. Contact Me
            </h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact me at:
            </p>
            <p className="mt-2 text-foreground font-medium">
              iampandit193728@gmail.com
            </p>
          </div>
        </SectionReveal>
      </div>
      <Footer />
    </main>
  )
}
