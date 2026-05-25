'use client'

import { useEffect, useState } from 'react'

export default function ThankYouPage() {
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    // Trigger checkmark animation after mount
    const timer = setTimeout(() => setShowCheckmark(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen noise-overlay flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Checkmark */}
          <div className="mb-8 flex justify-center">
            <div 
              className={`w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center ${showCheckmark ? 'checkmark-bounce' : 'opacity-0'}`}
            >
              <svg 
                className="w-12 h-12 text-green-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Eyebrow */}
          <p className="text-studio-amber text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-6">
            Success
          </p>
          
          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            You&apos;re All Set!
          </h1>
          
          {/* Subhead */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Check your inbox in the next few minutes. Your guide + printable checklist is on its way.
          </p>

          {/* Email Reminder Box */}
          <div className="p-6 rounded-xl bg-studio-black/50 border border-studio-wood/30 max-w-xl mx-auto mb-10">
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-studio-amber/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-studio-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-studio-cream mb-1">Can&apos;t find it?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Check your spam or promotions folder. Add <span className="text-studio-amber">justin@theaisessions.net</span> to your contacts so you never miss an update.
                </p>
              </div>
            </div>
          </div>
          
          {/* Secondary CTA */}
          <a
            href="https://www.youtube.com/@TheAISessions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-lg font-semibold text-studio-cream bg-studio-wood/30 border border-studio-amber/50 rounded-lg hover:bg-studio-wood/50 transition-all duration-300"
          >
            <svg className="mr-2 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch Our Latest Videos
          </a>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-studio-darker/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
            What Happens Next
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Check Your Email',
                description: 'Your PDF guide and printable checklist should arrive within 5 minutes.',
              },
              {
                step: '2',
                title: 'Download & Print',
                description: 'Save the PDF to your device. Print the checklist and keep it handy.',
              },
              {
                step: '3',
                title: 'Start Creating',
                description: 'Follow the framework and build your first AI music video from scratch.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-studio-amber/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-studio-amber">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-studio-cream">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-xl font-semibold mb-6 text-studio-cream">
            Follow The Journey
          </h3>
          <p className="text-gray-400 mb-8">
            Get behind-the-scenes looks at how these videos are made, new tool discoveries, and creative experiments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@TheAISessions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-studio-black/50 border border-studio-wood/30 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm font-medium">YouTube</span>
            </a>
            
            <a
              href="https://x.com/Loboy32"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-studio-black/50 border border-studio-wood/30 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm font-medium">X / Twitter</span>
            </a>
            
            <a
              href="https://www.instagram.com/easytrafficsecrets/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-studio-black/50 border border-studio-wood/30 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-8 border-t border-studio-wood/20 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            Built by <span className="text-studio-amber">Clutch</span>. 
            Approved by <span className="text-studio-amber">Justin</span>. 
            The AI Sessions.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} ScottyDog Creatives LLC
          </p>
        </div>
      </footer>
    </main>
  )
}