import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'
import ContactForm from '@/components/ContactForm'
import CareerForm from '@/components/CareerForm'

export const metadata: Metadata = {
  title: "MIMA Group | Building Pakistan's Landmark Spaces Since 1959",
}

const companies = [
  { logo: '/mima-mbros.png',    est: 'Est. 1960s', sector: 'Electrical & HVAC Contracting',       name: 'MIMA Brothers',              href: '/mima-groups/electrical'  },
  { logo: '/mima-const.png',    est: 'Est. 2003',  sector: 'Civil & Interior Works',               name: 'MIMA Construction',          href: '/mima-groups/construction' },
  { logo: '/mima-facility.png', est: 'Est. 2009',  sector: 'Facility Management',                  name: 'MIMA Facilities Management', href: '/mima-groups/facility'     },
  { logo: '/mima-eng.png',      est: 'Est. 2012',  sector: 'MEP & Engineering',                    name: 'MIMA Engineering',           href: '/mima-groups/engineering'  },
]

const sectors = [
  { num: '01', label: 'Multinational',   count: 'SKF · Oracle · IBM · Microsoft', img: '/portfolio/MNCs/1%20sgs.png',                           href: '/portfolio?cat=multinational', name: 'Multinational Companies' },
  { num: '02', label: 'Banks',           count: 'HBL · Meezan · Allied',          img: '/old-project/standard-chartered.png',                    href: '/portfolio?cat=banks',         name: 'Banks' },
  { num: '03', label: 'Hospitals',       count: 'NICVD · Indus · Aga Khan',       img: '/old-project/liaqat-national.jpeg',                      href: '/portfolio?cat=hospitals',     name: 'Hospitals' },
  { num: '04', label: 'Education',       count: 'NASTP · Universities',           img: '/portfolio/Education/ivs.jpg',                           href: '/portfolio?cat=education',     name: 'Education' },
  { num: '05', label: 'Commercials',     count: 'Retail · F&B · Offices',         img: '/old-project/goolotlo.png',                              href: '/portfolio?cat=commercials',   name: 'Commercials' },
  { num: '06', label: 'NPOs',            count: 'Non-Profit Institutions',         img: '/portfolio/Hospital/JPMC.jpeg',                          href: '/portfolio?cat=npos',          name: 'NPOs', imgPos: '30% center' },
]

const INTEG_LOGO = '/partner-logos/integ.png?v=20260616'

/* Marquee partner sets (Architects & Consultants) */
const partnerRow1 = [
  { src: '/partner-logos/FND.png',                                   alt: 'FND' },
  { src: '/partner-logos/nes-pak.png',                               alt: 'NESPAK' },
  { src: '/partner-logos/arcop.png',                                 alt: 'Arcop' },
  { src: '/partner-logos/eleken.png',                                alt: 'ElekEn Associates' },
  { src: '/partner-logos/asa.png',                                   alt: 'Arshad Shahid Abdulla' },
  { src: INTEG_LOGO,                                                 alt: 'INTEG Integrated Engineering Services' },
  { src: '/partner-logos/arif-belguami.png',                         alt: 'Arif Belgaumi Architects' },
  { src: '/partner-logos/Mushtaq-Bilal.png',                         alt: 'Mushtaq and Bilal' },
  { src: '/partner-logos/aaa-partnership.png',                       alt: 'AAA Partnership' },
  { src: '/partner-logos/habib-fida-ali.png',                        alt: 'Habib Fida Ali Architects' },
  { src: '/partner-logos/NM.png',                                    alt: 'Naheed Mashooqullah' },
  { src: '/partner-logos/AS-Consultants.png',                        alt: 'A.S Consultants' },
  { src: '/partner-logos/SMC.png',                                   alt: 'SMC Consulting Engineers' },
  { src: '/partner-logos/vital-associates.png',                      alt: 'Vital Associates' },
  { src: '/partner-logos/aspl.png',                                  alt: 'ASPL' },
  { src: '/partner-logos/najmi.png',                                 alt: 'Najmi Bilgrami' },
  { src: '/partner-logos/matrix-consultants.png',                    alt: 'Matrix Consultants' },
  { src: '/partner-logos/Nazeeha.png',                               alt: 'Nazeera Ayaz Architects' },
  { src: '/partner-logos/shahab-ghani.png',                          alt: 'Shahab Ghani & Associates' },
  { src: '/partner-logos/sk-engineering.png',                        alt: 'KS & Associates' },
  { src: '/partner-logos/tilt-interior.png',                         alt: 'Tilt Interior Design' },
  { src: '/partner-logos/Ahed-Associate.png',                        alt: 'Ahed Associates' },
  { src: '/partner-logos/identity.png',                              alt: 'Identity' },
  { src: '/partner-logos/merchant-associate.png',                    alt: 'Merchant & Associates' },
]
const partnerRow2 = [
  { src: '/partner-logos/icon-architects%20and%20engineer.png',      alt: 'Icon Architects' },
  { src: '/partner-logos/ANA.png',                                   alt: 'ANA' },
  { src: '/partner-logos/jba-associates.png',                        alt: 'JBA and Associates' },
  { src: '/partner-logos/taq.png',                                   alt: 'TAQ' },
  { src: '/partner-logos/studio-tariq-nasar.png',                    alt: 'Studio Iqbal Nasser' },
  { src: '/partner-logos/atcon.png',                                  alt: 'ATcons' },
  { src: '/partner-logos/ea.png',                                    alt: 'EA' },
  { src: '/partner-logos/AA%26AAssociate.png',                       alt: 'AA&A Associate' },
  { src: '/partner-logos/AA-Tecno-Engineers.png',                    alt: 'AA Tecno Engineers' },
  { src: '/partner-logos/asif-associates.png',                       alt: 'Asif Associates' },
  { src: '/partner-logos/associated-technical-consultant.png',       alt: 'Associated Technical Consultant' },
  { src: '/partner-logos/ayub-associates.png',                       alt: 'Ayub Associates' },
  { src: '/partner-logos/bilgrami%26partners.png',                   alt: 'Bilgrami & Partners' },
  { src: '/partner-logos/design-architecture.png',                   alt: 'Design Architecture' },
  { src: '/partner-logos/econs.png',                                 alt: 'Econs' },
  { src: '/partner-logos/excellent-associates.png',                  alt: 'Excellent Associates' },
  { src: '/partner-logos/impact-design.png',                         alt: 'Impact Design' },
  { src: '/partner-logos/KP-associates.png',                         alt: 'KP Associates' },
  { src: '/partner-logos/lotia-sons.png',                            alt: 'Lotia Sons' },
  { src: '/partner-logos/matrix-engineering.png',                    alt: 'Matrix Engineering' },
  { src: '/partner-logos/mb-associates.png',                         alt: 'MB Associates' },
  { src: '/partner-logos/pd-associate.png',                          alt: 'PD Associate' },
  { src: '/partner-logos/progressive-consultants.png',               alt: 'Progressive Consultants' },
  { src: '/partner-logos/sem-engineers.png',                         alt: 'SEM Engineers' },
]
const partnerRow3 = [
  { src: '/partner-logos/shuja-rahim-associates.png',                alt: 'Shuja Rahim Associates' },
  { src: '/partner-logos/sm-zubair%26co.png',                        alt: 'SM Zubair & Co' },
  { src: '/partner-logos/turnkey-groups.png',                        alt: 'Turnkey Groups' },
  { src: '/partner-logos/TYA-Associates.png',                        alt: 'TYA Associates' },
  { src: '/partner-logos/universal-consultant.png',                  alt: 'Universal Consultant' },
  { src: '/partner-logos/vplanners.png',                             alt: 'V Planners' },
  { src: '/partner-logos/wazir-associates.png',                      alt: 'Wazir Associates' },
  { src: '/partner-logos/yh-associates.png',                         alt: 'YH Associates' },
  { src: '/partner-logos/atlas-battery.png',                         alt: 'Atlas Battery' },
  { src: '/partner-logos/group1-automotive.png',                     alt: 'Group 1 Automotive' },
  { src: '/partner-logos/imran-motors.png',                          alt: 'Imran Motors' },
  { src: '/partner-logos/urdu-point.png',                            alt: 'Urdu Point' },
  { src: '/partner-logos/FND.png',                                   alt: 'FND' },
  { src: '/partner-logos/nes-pak.png',                               alt: 'NESPAK' },
  { src: '/partner-logos/arcop.png',                                 alt: 'Arcop' },
  { src: '/partner-logos/eleken.png',                                alt: 'ElekEn Associates' },
  { src: '/partner-logos/asa.png',                                   alt: 'Arshad Shahid Abdulla' },
  { src: INTEG_LOGO,                                                 alt: 'INTEG Integrated Engineering Services' },
  { src: '/partner-logos/najmi.png',                                 alt: 'Najmi Bilgrami' },
  { src: '/partner-logos/matrix-consultants.png',                    alt: 'Matrix Consultants' },
  { src: '/partner-logos/Ahed-Associate.png',                        alt: 'Ahed Associates' },
  { src: '/partner-logos/jba-associates.png',                        alt: 'JBA and Associates' },
  { src: '/partner-logos/taq.png',                                   alt: 'TAQ' },
]

/* Marquee client sets */
const row1 = [
  { src: '/clients/IBM_logo.svg.webp',                        alt: 'IBM' },
  { src: '/clients/microsoft.webp',                           alt: 'Microsoft' },
  { src: '/clients/Oracle_logo.webp',                         alt: 'Oracle' },
  { src: '/clients/SKF-Logo.svg.webp',                        alt: 'SKF' },
  { src: '/clients/shell-logo-png.png',                       alt: 'Shell' },
  { src: '/clients/BP_Helios_logo.svg.png',                   alt: 'BP' },
  { src: '/clients/Procter_&_Gamble_logo.svg.png',            alt: 'Procter & Gamble' },
  { src: '/clients/Unilever-Logo.wine.png',                   alt: 'Unilever' },
  { src: '/clients/Coca-Cola_logo.svg.png',                   alt: 'Coca-Cola' },
  { src: '/clients/Mondelez_international_2012_logo.svg.png', alt: 'Mondelez' },
  { src: '/clients/eni.png',                                  alt: 'ENI' },
  { src: '/clients/maersk.png',                               alt: 'Maersk' },
  { src: '/clients/SGS_Logo.svg.png',                         alt: 'SGS' },
  { src: '/clients/logo-toyota-transparent-19.png',           alt: 'Toyota' },
  { src: '/clients/mercedes_logos_PNG27.png',                 alt: 'Mercedes-Benz' },
  { src: '/clients/Dialog_Axiata_logo.svg.png',               alt: 'Dialog Axiata' },
  { src: '/clients/clipsal-logo.png',                         alt: 'Clipsal' },
  { src: '/clients/hutchison-ports.png',                      alt: 'Hutchison Ports KICT' },
]
const row2 = [
  { src: '/clients/Logo_of_Habib_Bank.svg.webp',              alt: 'HBL' },
  { src: '/clients/meezan-bank-logo.webp',                    alt: 'Meezan Bank' },
  { src: '/clients/allied-bank-limited-logo.webp',            alt: 'Allied Bank' },
  { src: '/clients/mcb-logo.png',                             alt: 'MCB Bank' },
  { src: '/clients/js-bank-logo.png',                         alt: 'JS Bank' },
  { src: '/clients/bank-alfalah-logo.png',                    alt: 'Bank Alfalah' },
  { src: '/clients/bank-al-habib-logo.png',                   alt: 'Bank Al Habib' },
  { src: '/clients/Standard_Chartered_(2021).svg.png',        alt: 'Standard Chartered' },
  { src: '/clients/Citibank-Logo.wine.png',                   alt: 'Citibank' },
  { src: '/clients/Barclays-logo.png',                        alt: 'Barclays' },
  { src: '/clients/deutsche-bank.png',                        alt: 'Deutsche Bank' },
  { src: '/clients/Dubai-Islamic-Bank-logo.png',              alt: 'Dubai Islamic Bank' },
  { src: '/clients/emirates-global.png',                      alt: 'Emirates Global Islamic Bank' },
  { src: '/clients/United_Bank_Limited_logo.svg.png',         alt: 'United Bank Limited' },
  { src: '/clients/ibl.png',                                  alt: 'IBL' },
  { src: '/clients/KBC.png',                                  alt: 'KBC' },
  { src: '/clients/1LINK_logo.svg.png',                       alt: '1LINK' },
]
const row3 = [
  { src: '/clients/nicvd-logo.webp',                                         alt: 'NICVD' },
  { src: '/clients/aga%20k.webp',                                            alt: 'Aga Khan' },
  { src: '/clients/liaquat-national.png',                                    alt: 'Liaquat National' },
  { src: '/clients/dhanak.svg',                                              alt: 'Dhanak Healthcare' },
  { src: '/clients/kfc_PNG53.webp',                                          alt: 'KFC' },
  { src: '/clients/Nandos-Logo.webp',                                        alt: "Nando's" },
  { src: '/clients/Dunkin-donuts-1-logo-png-transparent.png',                alt: "Dunkin' Donuts" },
  { src: '/clients/Khaadi_logo_(2022).png',                                  alt: 'Khaadi' },
  { src: '/clients/habitt-logo.webp',                                        alt: 'Habitt' },
  { src: '/clients/Institute_of_Business_Administration,_Karachi_(logo).png',alt: 'IBA Karachi' },
  { src: '/clients/nastp.png',                                               alt: 'NASTP' },
  { src: '/clients/LOGO_PAF.png',                                            alt: "Patients' Aid Foundation" },
  { src: '/clients/ALKHIDMAT-Logo.png',                                      alt: 'Al Khidmat' },
  { src: '/clients/TCF-Filled-Logo-small.png',                               alt: 'TCF' },
  { src: '/clients/The-Hunar-Foundation-02.png',                             alt: 'Hunar Foundation' },
  { src: '/clients/Shaheen_Foundation_logo.png',                             alt: 'Shaheen Foundation' },
  { src: '/clients/Searle_Company_logo.svg',                                 alt: 'Searle' },
  { src: '/clients/Martin_Dow_logo.png',                                     alt: 'Martin Dow' },
  { src: '/clients/national-foods-logo.png',                                 alt: 'National Foods' },
  { src: '/clients/Sana_Safinaz_logo.png',                                   alt: 'Sana Safinaz' },
]

function MarqueeRow({ items, cls }: { items: typeof row1; cls?: string }) {
  return (
    <div className="marquee-row">
      <div className={`marquee${cls ? ` ${cls}` : ''}`}>
        <div className="marquee__group">
          {items.map((item, i) => (
            <div key={i} className="marquee-logo">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((item, i) => (
            <div key={i} className="marquee-logo">
              <img
                src={item.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/backgrounds/indus.png" />
      <Nav transparent />

      {/* ===== HERO ===== */}
      <section className="hero" id="top">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__inner">
          <h1>
            Building Pakistan&apos;s<br />
            Landmark Spaces<br />
            Since 1959.
          </h1>
          <p>
            Integrated construction, MEP, interiors, and facility management
            solutions delivered with precision, quality, and technical expertise.
          </p>
          <div className="hero__ctas">
            <Link className="btn btn--solid-light" href="#portfolio">Explore Portfolio</Link>
            <Link className="btn btn--ghost-light" href="#contact">Discuss Your Project</Link>
          </div>
        </div>
      </section>


      {/* ===== OUR COMPANIES ===== */}
      <section className="section section--warm" id="companies">
        <div className="container">
          <RevealOnScroll className="companies__head">
            <span className="label label--blue">Our Companies</span>
            <h2 className="display h2">
              Four Specialised Companies. One Shared Commitment.
            </h2>
            <p>Each division operates with its own technical leadership while sharing the group&apos;s
              standards for quality, safety, and on-time delivery.</p>
          </RevealOnScroll>

          <div className="co-2grid">
            {companies.map((co, i) => (
              <RevealOnScroll key={co.name} delay={(i % 2) as 0 | 1} tag="article" className="co-2card">
                <Image
                  src={co.logo}
                  alt={`${co.name} logo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 660px"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority={i < 2}
                />
                <div className="co-2card__overlay">
                  <Link className="co-2card__cta" href={co.href}>
                    Explore <ArrowRight size={15} strokeWidth={2.5} />
                  </Link>
                </div>
                <Link className="co-2card__mobile-link" href={co.href} aria-label={`Explore ${co.name}`} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ARCHITECTS & CONSULTANTS MARQUEE ===== */}
      <section className="section section--warm clients" id="architects">
        <RevealOnScroll className="container clients__head">
          <span className="label">Architects &amp; Consultants We Collaborate With</span>
          <h3>Trusted by Pakistan&apos;s leading design and consultancy firms.</h3>
        </RevealOnScroll>
        <MarqueeRow items={partnerRow1} />
        <MarqueeRow items={partnerRow2} cls="marquee--rev" />
        <MarqueeRow items={partnerRow3} cls="marquee--slow" />
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section className="section" id="portfolio">
        <div className="container">
          <RevealOnScroll tag="header" className="portfolio__head">
            <div>
              <span className="label label--blue">Portfolio</span>
              <h2 className="display h2">
                Building Across Sectors. Delivering Lasting Impact.
              </h2>
            </div>
            <p className="right">Six sectors. Hundreds of projects. A long, quiet record of execution for
              Pakistan&apos;s most demanding clients.</p>
          </RevealOnScroll>

          <div className="sectors">
            {sectors.map((s, i) => (
              <RevealOnScroll key={s.name} delay={(i % 3) as 0 | 1 | 2} tag="a" className="sector" href={s.href}>
                <Image src={s.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: (s as any).imgPos ?? 'center' }} priority={i === 0} />
                <span className="sector__num">{s.num} / {s.label}</span>
                <div className="sector__body">
                  <h3 className="sector__name">{s.name}</h3>
                  <span className="sector__cta">View Projects <span aria-hidden="true">→</span></span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS MARQUEE ===== */}
      <section className="section section--warm clients" id="clients">
        <RevealOnScroll className="container clients__head">
          <span className="label">Trusted By Pakistan&apos;s Leading Companies &amp; Institutions</span>
          <h3>A long client list, earned through decades of consistent delivery.</h3>
        </RevealOnScroll>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} cls="marquee--rev" />
        <MarqueeRow items={row3} cls="marquee--slow" />
      </section>

      {/* ===== CONTACT & CAREERS ===== */}
      <section className="section contact-careers" id="contact">
        <div className="container">
          <div className="contact-careers__grid">

            {/* Contact */}
            <RevealOnScroll className="contact-careers__panel" id="careers">
              <span className="label label--blue">Contact</span>
              <h2 className="display h2">Contact Us</h2>

              <ContactForm />
            </RevealOnScroll>

            <div className="contact-careers__divider" aria-hidden="true" />

            {/* Careers */}
            <RevealOnScroll delay={1} className="contact-careers__panel">
              <span className="label label--blue">Careers</span>
              <h2 className="display h2">Build Your Career<br />With MIMA.</h2>
              <CareerForm />
            </RevealOnScroll>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
