import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

type LogoCell = { src: string; alt: string; sq?: boolean; lg?: boolean; xl?: boolean }

const PARTNERS: LogoCell[] = [
  // — ordered by client-supplied list —
  { src: '/partner-logos/FND.png',                                    alt: 'FND' },
  { src: '/partner-logos/nes-pak.png',                                alt: 'NESPAK' },
  { src: '/partner-logos/arcop.png',                                  alt: 'Arcop' },
  { src: '/partner-logos/eleken.png',                                 alt: 'ElekEn Associates' },
  { src: '/partner-logos/asa.png',                                    alt: 'Arshad Shahid Abdulla' },
  { src: '/partner-logos/integ.png',                                  alt: 'Integg' },
  { src: '/partner-logos/arif-belguami.png',                          alt: 'Arif Belgaumi Architects' },
  { src: '/partner-logos/Mushtaq-Bilal.png',                          alt: 'Mushtaq and Bilal Consulting Engineers' },
  { src: '/partner-logos/aaa-partnership.png',                        alt: 'AAA Partnership Pvt. Ltd' },
  { src: '/partner-logos/habib-fida-ali.png',                         alt: 'Habib Fida Ali Architects' },
  { src: '/partner-logos/NM.png',                                     alt: 'Naheed Mashooqullah' },
  { src: '/partner-logos/AS-Consultants.png',                         alt: 'A.S Consultants' },
  { src: '/partner-logos/SMC.png',                                    alt: 'SMC Consulting Engineers' },
  { src: '/partner-logos/vital-associates.png',                       alt: 'Vital Associates' },
  { src: '/partner-logos/aspl.png',                                   alt: 'ASPL – Arif Shah Private Limited' },
  { src: '/partner-logos/najmi.png',                                  alt: 'Najmi Bilgrami' },
  { src: '/partner-logos/matrix-consultants.png',                     alt: 'Matrix Consultants – Architecture Planning' },
  { src: '/partner-logos/Nazeeha.png',                                alt: 'Nazeera Ayaz Architects' },
  { src: '/partner-logos/shahab-ghani.png',                           alt: 'Shahab Ghani and Associates' },
  { src: '/partner-logos/sk-engineering.png',                         alt: 'KS & Associates' },
  { src: '/partner-logos/tilt-interior.png',                          alt: 'Tilt Interior Design' },
  { src: '/partner-logos/Ahed-Associate.png',                         alt: 'Ahed Associates' },
  { src: '/partner-logos/identity.png',                               alt: 'Identity' },
  { src: '/partner-logos/merchant-associate.png',                     alt: 'Merchant & Associates Real Estate Services' },
  { src: '/partner-logos/icon-architects%20and%20engineer.png',       alt: 'Icon' },
  { src: '/partner-logos/ANA.png',                                    alt: 'ANA' },
  { src: '/partner-logos/jba-associates.png',                         alt: 'JBA and Associates' },
  { src: '/partner-logos/taq.png',                                    alt: 'TAQ' },
  { src: '/partner-logos/studio-tariq-nasar.png',                     alt: 'Studio Iqbal Nasser' },
  { src: '/partner-logos/atcon.png',                                  alt: 'ATcons' },
  { src: '/partner-logos/ea.png',                                     alt: 'EA' },
  // — additional partners —
  { src: '/partner-logos/AA%26AAssociate.png',                        alt: 'AA&A Associate' },
  { src: '/partner-logos/AA-Tecno-Engineers.png',                     alt: 'AA Tecno Engineers' },
  { src: '/partner-logos/asif-associates.png',                        alt: 'Asif Associates' },
  { src: '/partner-logos/associated-technical-consultant.png',        alt: 'Associated Technical Consultant' },
  { src: '/partner-logos/atlas-battery.png',                          alt: 'Atlas Battery' },
  { src: '/partner-logos/ayub-associates.png',                        alt: 'Ayub Associates' },
  { src: '/partner-logos/bilgrami%26partners.png',                    alt: 'Bilgrami & Partners' },
  { src: '/partner-logos/design-architecture.png',                    alt: 'Design Architecture' },
  { src: '/partner-logos/econs.png',                                  alt: 'Econs' },
  { src: '/partner-logos/excellent-associates.png',                   alt: 'Excellent Associates' },
  { src: '/partner-logos/group1-automotive.png',                      alt: 'Group 1 Automotive' },
  { src: '/partner-logos/impact-design.png',                          alt: 'Impact Design' },
  { src: '/partner-logos/imran-motors.png',                           alt: 'Imran Motors' },
  { src: '/partner-logos/KP-associates.png',                          alt: 'KP Associates' },
  { src: '/partner-logos/lotia-sons.png',                             alt: 'Lotia Sons' },
  { src: '/partner-logos/matrix-engineering.png',                     alt: 'Matrix Engineering' },
  { src: '/partner-logos/mb-associates.png',                          alt: 'MB Associates' },
  { src: '/partner-logos/pd-associate.png',                           alt: 'PD Associate' },
  { src: '/partner-logos/progressive-consultants.png',                alt: 'Progressive Consultants' },
  { src: '/partner-logos/sem-engineers.png',                          alt: 'SEM Engineers' },
  { src: '/partner-logos/shuja-rahim-associates.png',                 alt: 'Shuja Rahim Associates' },
  { src: '/partner-logos/sm-zubair%26co.png',                         alt: 'SM Zubair & Co' },
  { src: '/partner-logos/turnkey-groups.png',                         alt: 'Turnkey Groups' },
  { src: '/partner-logos/TYA-Associates.png',                         alt: 'TYA Associates' },
  { src: '/partner-logos/universal-consultant.png',                   alt: 'Universal Consultant' },
  { src: '/partner-logos/urdu-point.png',                             alt: 'Urdu Point' },
  { src: '/partner-logos/vplanners.png',                              alt: 'V Planners' },
  { src: '/partner-logos/wazir-associates.png',                       alt: 'Wazir Associates' },
  { src: '/partner-logos/yh-associates.png',                          alt: 'YH Associates' },
]

export default function PartnersPage() {
  return (
    <>
      <Nav transparent />

      {/* Hero */}
      <section className="phero phero--has-bg" style={{ backgroundImage: 'url(/backgrounds/habbit.png)', backgroundPosition: 'center 30%' }}>
        <div className="container">
          <div className="phero__crumbs">
            <Link href="/">MIMA Group</Link>
            <span className="sep">/</span>
            <span>Partners</span>
          </div>
          <span className="label label--blue">Architects &amp; Consultants</span>
          <h1 style={{ marginTop: 14 }}>Architects &amp; Consultants</h1>
        </div>
      </section>

      {/* Partners grid */}
      <section className="cat" style={{ paddingTop: 'clamp(48px, 6vw, 72px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}>
        <div className="container">
          <header className="cat__head">
            <div>
              <span className="label label--blue">Architects &amp; Consultants</span>
              <h2 className="cat__title">Firms we collaborate with</h2>
            </div>
            <span className="cat__count">{PARTNERS.length} Partners</span>
          </header>
          <div className="logos logos--partners">
            {PARTNERS.map((p, i) => {
              const cls = [
                'logo-cell',
                p.sq ? 'logo-cell--sq' : '',
                p.lg ? 'logo-cell--lg' : '',
                p.xl ? 'logo-cell--xl' : '',
              ].filter(Boolean).join(' ')
              return (
                <div key={i} className={cls}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={200}
                    height={100}
                    loading="lazy"
                    sizes="(max-width: 480px) 50vw, (max-width: 720px) 33vw, 25vw"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <span className="logo-cell__name">{p.alt}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
