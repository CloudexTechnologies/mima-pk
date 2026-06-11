import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import RevealOnScroll from '@/components/RevealOnScroll'
import JourneyTimeline from '@/components/JourneyTimeline'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <>
      <Nav transparent />
      <PageHero
        label="About"
        crumb="About"
        title="A quiet, enduring record of building for Pakistan's institutions."
        image="/backgrounds/standard-chartered.png"
      />

      {/* Intro */}
      <section className="intro">
        <div className="container">
          <div className="intro__grid">
            <RevealOnScroll className="intro__copy">
              <span className="label label--blue">Who We Are</span>
              <h2 className="display h2">An institutional construction partner, not a contractor.</h2>
              <p>
                Since our founding in 1959, MIMA has been a quiet partner to Pakistan&apos;s leading
                institutions, banks, hospitals, multinational companies, universities, and
                non-profits. Our reputation is built on technical depth, on-time delivery, and
                a refusal to take shortcuts.
              </p>
              <p>
                The group operates as five specialised companies, each led by experienced
                technical leadership, but sharing a single set of standards for quality,
                safety, and client communication. A project handed to one company has the
                full capability of the group behind it.
              </p>
              <p>
                We work without fanfare. Most of our projects are referred by clients we have
                worked with for years. That, more than any award, is the measure we use.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={1} className="intro__right">
              <div className="intro__img intro__img--contain">
                <Image src="/backgrounds/meezan-bank-001.png" alt="Meezan Bank — MIMA Construction project" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'contain' }} priority />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Mentor */}
      <section className="section" aria-label="Our mentor">
        <div className="container">
          <div className="mentor__grid">
            <RevealOnScroll className="mentor__photo" tag="div">
              <Image src="/asa.jpg.jpeg" alt="Shahid Abdulla, Mentor" fill sizes="(max-width: 768px) 100vw, (max-width: 1320px) 40vw, 528px" loading="lazy" style={{ objectFit: 'cover' }} />
            </RevealOnScroll>
            <RevealOnScroll delay={1} className="mentor__copy">
              <span className="label label--blue">Our Mentor</span>
              <h3>Shahid Abdulla</h3>
              <div className="mentor__role">Mentor</div>
              <p>
                Shahid Abdulla, Founder of Arshad Shahid Abdulla (ASA) Pvt. Ltd. and a towering figure in
                Pakistan&apos;s architectural profession, is a mentor whose influence is deeply woven into
                the foundation and growth of MIMA Construction. To our CEO, Muhammad Aamir Sultan, he has
                been a guiding, fatherly presence - one whose trust, wisdom, and belief helped shape not only
                a career, but an institution.
              </p>
              <p>
                Shahid Abdulla was the first architect to place confidence in MIMA by awarding its first
                major contract at Schon Circle, setting the company on a path defined by integrity,
                excellence, and long-term growth. Under his mentorship and strategic direction, MIMA
                expanded into Facility Management, successfully delivering large-scale maintenance and
                operations projects, including the complete maintenance of operational buildings and all
                branches of Standard Chartered Bank (SCB) in Pakistan.
              </p>
              <p>
                Having also shared a longstanding professional association with Sultan Ashrafi, Founder of
                MIMA Construction and father of our CEO, Shahid Abdulla represents continuity, trust, and
                values that transcend generations. MIMA holds him in the highest esteem - as a mentor, a
                visionary, and a cornerstone of our journey toward sustainable success.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="cq" aria-label="Chairman's message">
        <div className="cq__container">
          <div className="cq__bg-mark" aria-hidden="true">&ldquo;</div>

          <RevealOnScroll className="cq__card">
            <div className="cq__top" aria-hidden="true">
              <span className="cq__top-line" />
              <span className="cq__top-icon">&ldquo;</span>
              <span className="cq__top-line" />
            </div>

            <p>
              From a small electrical contracting firm founded by my father, MIMA has grown
              into a trusted organisation delivering MEP, civil works, and facility management
              projects across Pakistan. Our reputation has been built on{' '}
              <strong>quality work, reliability, and lasting client relationships</strong>.
            </p>

            <div className="cq__divider" aria-hidden="true">
              <span className="cq__div-line" />
              <span className="cq__div-dot" />
              <span className="cq__div-line" />
            </div>

            <p>
              We remain committed to <strong>practical solutions</strong>,{' '}
              <strong>on-time delivery</strong>, and <strong>the values</strong> on which MIMA
              was founded. Our engineers, technicians, and staff are the foundation of
              everything we achieve.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={1} className="cq__attrib">
            <div className="cq__signature">Muhammad Aamir Sultan</div>
            <div className="cq__sig-line" />
            <div className="cq__title">Chairman, MIMA Group</div>
          </RevealOnScroll>
        </div>
      </section>

      <JourneyTimeline />

      <Footer />
    </>
  )
}
