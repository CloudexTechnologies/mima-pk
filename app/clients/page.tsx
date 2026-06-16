'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

type Category = 'all' | 'multinational' | 'banks' | 'hospitals' | 'education' | 'commercials' | 'npos'

const TABS: { key: Category; label: string }[] = [
  { key: 'all',          label: 'All Clients'   },
  { key: 'multinational',label: 'Multinational' },
  { key: 'banks',        label: 'Banks'         },
  { key: 'hospitals',    label: 'Hospitals'     },
  { key: 'commercials',  label: 'Commercials'   },
  { key: 'education',    label: 'Education'     },
  { key: 'npos',         label: 'NPOs'          },
]

type LogoCell = { src: string; alt: string; sq?: boolean; lg?: boolean; xl?: boolean }

// International companies with global presence
const MULTINATIONAL: LogoCell[] = [
  { src:'/clients/SGS_Logo.svg.png',                              alt:'SGS',                   sq:true, lg:true },
  { src:'/clients/IBM_logo.svg.webp',                             alt:'IBM' },
  { src:'/clients/Oracle_logo.webp',                              alt:'Oracle' },
  { src:'/clients/SKF-Logo.svg.webp',                             alt:'SKF',                   sq:true },
  { src:'/clients/shell-logo-png.png',                            alt:'Shell',                 sq:true },
  { src:'/clients/microsoft.webp',                                alt:'Microsoft' },
  { src:'/clients/maersk.png',                                    alt:'Maersk' },
  { src:'/clients/BP_Helios_logo.svg.png',                        alt:'BP',                    sq:true },
  { src:'/clients/eni.png',                                       alt:'ENI' },
  { src:'/clients/clipsal-logo.png',                              alt:'Clipsal' },
  { src:'/clients/mercedes_logos_PNG27.png',                      alt:'Mercedes-Benz',         sq:true, lg:true },
  { src:'/clients/logo-toyota-transparent-19.png',                alt:'Toyota',                lg:true },
  { src:'/clients/hutchison-ports.png',                           alt:'Hutchison Ports',       lg:true, xl:true },
  { src:'/clients/BBC_World_Service_2022_(Boxed).svg.png',        alt:'BBC World Service' },
  { src:'/clients/UEP%20Logo%20-%20Feb%2026%204.png',             alt:'United Energy Pakistan',lg:true },
  { src:'/clients/Procter_&_Gamble_logo.svg.png',                 alt:'Procter & Gamble' },
  { src:'/clients/Mondelez_international_2012_logo.svg.png',      alt:'Mondelez' },
  { src:'/clients/Coca-Cola_logo.svg.png',                        alt:'Coca-Cola' },
  { src:'/clients/Unilever-Logo.wine.png',                        alt:'Unilever',              lg:true, xl:true },
  { src:'/clients/kfc_PNG53.webp',                                alt:'KFC',                   sq:true, lg:true },
  { src:'/clients/Dunkin-donuts-1-logo-png-transparent.png',      alt:"Dunkin' Donuts",        sq:true },
  { src:'/clients/Nandos-Logo.webp',                              alt:"Nando's",               sq:true, lg:true },
]

// Banks & financial institutions
const BANKS: LogoCell[] = [
  { src:'/clients/Standard_Chartered_(2021).svg.png',   alt:'Standard Chartered' },
  { src:'/clients/deutsche-bank.png',                   alt:'Deutsche Bank',            sq:true, lg:true, xl:true },
  { src:'/clients/Barclays-logo.png',                   alt:'Barclays' },
  { src:'/clients/Dubai-Islamic-Bank-logo.png',         alt:'Dubai Islamic Bank',       lg:true, xl:true },
  { src:'/clients/emirates-global.png',                 alt:'Emirates Global Islamic',  lg:true, xl:true },
  { src:'/clients/Citibank-Logo.wine.png',              alt:'Citibank' },
  { src:'/clients/meezan-bank-logo.webp',               alt:'Meezan Bank',              sq:true },
  { src:'/clients/United_Bank_Limited_logo.svg.png',    alt:'United Bank Limited' },
  { src:'/clients/js-bank-logo.png',                    alt:'JS Bank',                  lg:true },
  { src:'/clients/allied-bank-limited-logo.webp',       alt:'Allied Bank' },
  { src:'/clients/Logo_of_Habib_Bank.svg.webp',         alt:'Habib Bank Limited' },
  { src:'/clients/bank-alfalah-logo.png',               alt:'Bank Alfalah',             lg:true },
  { src:'/clients/mcb-logo.png',                        alt:'MCB Bank' },
  { src:'/clients/bank-al-habib-logo.png',              alt:'Bank Al Habib',            lg:true },
  { src:'/clients/1LINK_logo.svg.png',                  alt:'1LINK' },
  { src:'/clients/summit-bank.svg',                     alt:'Summit Bank',              lg:true },
]

// Hospitals & healthcare institutions
const HOSPITALS: LogoCell[] = [
  { src:'/clients/aga%20k.webp',                        alt:'Aga Khan Health Services', sq:true, lg:true },
  { src:'/clients/1586593020.webp',                     alt:'Indus Hospital',           lg:true, xl:true },
  { src:'/clients/liaquat-national.png',                alt:'Liaquat National',         lg:true },
  { src:'/clients/nicvd-logo.webp',                     alt:'NICVD' },
  { src:'/clients/Kidney-Center-og-img.png',            alt:'Kidney Centre',            sq:true },
  { src:'/clients/south-city-h.webp',                   alt:'South City Hospital' },
  { src:'/clients/patel-hospital.png',                  alt:'Patel Hospital',           lg:true },
  { src:'/clients/MEDICARE.png',                        alt:'Medicare',                 lg:true },
  { src:'/clients/jpmc.png',                            alt:'JPMC',                     sq:true },
]

// Educational institutions
const EDUCATION: LogoCell[] = [
  { src:'/clients/Institute_of_Business_Administration,_Karachi_(logo).png', alt:'IBA Karachi',                         sq:true },
  { src:'/clients/IoBM-Logo-2020-Complete-B-03.png',                          alt:'IoBM',                                sq:true },
  { src:'/clients/Indus_Valley_School_of_Art_and_Architecture_Logo.png',      alt:'Indus Valley School' },
  { src:'/clients/tcs-school.png',                                             alt:'The City School' },
  { src:'/clients/beacon-house.png',                                           alt:'Beaconhouse College Campus Defence',  lg:true },
]

// Commercial, industrial, retail & F&B clients
const COMMERCIALS: LogoCell[] = [
  // Industrial & corporate
  { src:'/clients/image_1779126266922.png',                              alt:'PARCO',              lg:true },
  { src:'/clients/FFBL_-_FPCL_Logo.png',                                alt:'FFBL / FPCL' },
  { src:'/clients/Dialog_Axiata_logo.svg.png',                           alt:'Dialog Axiata' },
  { src:'/clients/ibl.png',                                              alt:'IBL' },
  { src:'/clients/KEL.PK_BIG-6d944ee2.png',                             alt:'K-Electric' },
  { src:'/clients/feroze%201888.jpg',                                    alt:'Feroze 1888',        lg:true },
  { src:'/clients/amreli-logo-footer.png',                               alt:'Amreli Steels' },
  { src:'/clients/crescent-steel.png',                                   alt:'Crescent Steel',     lg:true },
  { src:'/clients/cybernet.png',                                          alt:'Cybernet' },
  { src:'/clients/TCS_Pakistan_logo_(2024).png',                         alt:'TCS Pakistan' },
  { src:'/clients/qureshi-groups.png',                                   alt:'Qureshi Groups' },
  { src:'/clients/Soorty-Enterprises-Pvt-Ltd-Unit-2-and-3.png',         alt:'Soorty Enterprises' },
  { src:'/clients/wwg_worldwidegroup_logo.jpeg',                         alt:'WWG Worldwide Group' },
  { src:'/clients/Koel-Logo-2d4dc52-koel.png',                          alt:'Koel' },
  { src:'/clients/nastp.png',                                            alt:'NASTP' },
  // Consumer goods & pharma
  { src:'/clients/muller-and-phipps-tracking.png',                       alt:'Muller & Phipps' },
  { src:'/clients/Continental-biscuits-ltd.png',                         alt:'Continental Biscuits', lg:true },
  { src:'/clients/Martin_Dow_logo.png',                                  alt:'Martin Dow' },
  { src:'/clients/hilal-foods-logo.png',                                 alt:'Hilal Foods',        lg:true },
  { src:'/clients/obs-pharma.png',                                       alt:'OBS Pharma' },
  { src:'/clients/Shan-Logo-PNG.png',                                    alt:'Shan Foods' },
  { src:'/clients/dalda-logo.png',                                       alt:'Dalda',              lg:true },
  { src:'/clients/national-foods-logo.png',                              alt:'National Foods',     lg:true },
  { src:'/clients/Searle_Company_logo.svg',                              alt:'Searle Company' },
  { src:'/clients/Meezan-Logo-1.webp',                                   alt:'Mezan',              sq:true },
  { src:'/clients/brookes.jpg',                                          alt:'Brookes',            lg:true },
  // Retail, hospitality & F&B
  { src:'/clients/ghalib.png',                                           alt:'Ghalib Institute',   lg:true },
  { src:'/clients/dhanak.svg',                                           alt:'Dhanak Healthcare',  lg:true },
  { src:'/clients/habitt-logo.webp',                                     alt:'Habitt' },
  { src:'/clients/The_Oasis_Golf_And_Aqua_Resort.jpg',                   alt:'The Oasis Golf & Aqua Resort' },
  { src:'/clients/bays-logo-dark.png',                                   alt:'The Bays' },
  { src:'/clients/Dolmen_Mall_-_Logo_AI_ddd6c.png',                      alt:'Dolmen Mall' },
  { src:'/clients/lucky-one.png',                                        alt:'Lucky One Mall' },
  { src:'/clients/outfitters.png',                                       alt:'Outfitters' },
  { src:'/clients/Khaadi_logo_(2022).png',                               alt:'Khaadi' },
  { src:'/clients/Sana_Safinaz_logo.png',                                alt:'Sana Safinaz' },
  { src:'/clients/golootlo.png',                                         alt:'Golootlo' },
  { src:'/clients/Peng-logo-png-1-scaled.webp',                          alt:'Peng',               lg:true },
  { src:'/clients/kanteen.png',                                          alt:'Kanteen',            lg:true },
  { src:'/clients/KBC.png',                                              alt:'Karachi Boating Club' },
  { src:'/clients/tarzz.jpeg',                                           alt:'Tarzz',              lg:true, xl:true },
  { src:'/clients/malak.webp',                                           alt:'Malak' },
  { src:"/clients/dbrew'd.jpg",                                          alt:"dBrew'd" },
  { src:'/clients/naurattan.png',                                        alt:'Naurattan Jewellers', lg:true },
]

// Non-profit organisations & foundations
const NPOS: LogoCell[] = [
  { src:'/clients/The-Hunar-Foundation-02.png',         alt:'The Hunar Foundation',      lg:true },
  { src:'/clients/Shaheen_Foundation_logo.png',         alt:'Shaheen Foundation' },
  { src:'/clients/LOGO_PAF.png',                        alt:"Patients' Aid Foundation",  sq:true },
  { src:'/clients/ALKHIDMAT-Logo.png',                  alt:'Al Khidmat Foundation' },
  { src:'/clients/TCF-Filled-Logo-small.png',           alt:'The Citizens Foundation' },
]

const SECTIONS: { id: Category; num: string; title: string; count: string; logos: LogoCell[] }[] = [
  { id:'multinational', num:'01', title:'Multinational Companies',        count:'22 Clients', logos:MULTINATIONAL },
  { id:'banks',         num:'02', title:'Banks & Financial Institutions', count:'16 Clients', logos:BANKS         },
  { id:'hospitals',     num:'03', title:'Hospitals & Healthcare',         count:'9 Clients',  logos:HOSPITALS     },
  { id:'commercials',   num:'04', title:'Commercials',                    count:'45 Clients', logos:COMMERCIALS   },
  { id:'education',     num:'05', title:'Education & Institutions',       count:'5 Clients',  logos:EDUCATION     },
  { id:'npos',          num:'06', title:'NPOs & Foundations',             count:'6 Clients',  logos:NPOS          },
]

function LogoGrid({ logos }: { logos: LogoCell[] }) {
  return (
    <div className="logos">
      {logos.map((logo, i) => {
        const cls = [
          'logo-cell',
          logo.sq ? 'logo-cell--sq' : '',
          logo.lg ? 'logo-cell--lg' : '',
          logo.xl ? 'logo-cell--xl' : '',
        ].filter(Boolean).join(' ')
        return (
          <div key={i} className={cls}>
            <Image src={logo.src} alt={logo.alt} width={200} height={100} loading="lazy" sizes="(max-width: 480px) 50vw, (max-width: 720px) 33vw, (max-width: 1100px) 25vw, 17vw" style={{ width: 'auto', height: 'auto' }} />
            <span className="logo-cell__name">{logo.alt}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function ClientsPage() {
  const [active, setActive] = useState<Category>('all')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Category
    const valid = TABS.map(t => t.key)
    if (valid.includes(hash)) setActive(hash)
  }, [])

  const apply = (cat: Category) => {
    setActive(cat)
    window.history.replaceState(null, '', '#' + cat)
  }

  const isAll = active === 'all'

  return (
    <>
      <link rel="preload" as="image" href="/backgrounds/obs-pharma2.webp" />
      <Nav transparent />

      {/* Hero */}
      <section className="phero phero--has-bg" style={{ backgroundImage: 'url(/backgrounds/obs-pharma2.webp)' }}>
        <div className="container">
          <div className="phero__crumbs">
            <Link href="/">MIMA Group</Link>
            <span className="sep">/</span>
            <span>Clients</span>
          </div>
          <span className="label label--blue">Our Clients</span>
          <h1 style={{ marginTop: 14 }}>Trusted by Pakistan&apos;s leading institutions.</h1>
        </div>
      </section>

      {/* Category index */}
      <nav className="cat-index" aria-label="Client categories">
        <div className="cat-index__inner">
          {TABS.map(t => (
            <a
              key={t.key}
              href={`#${t.key}`}
              className={active === t.key ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); apply(t.key) }}
            >
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Clients wrap */}
      <div id="clients-wrap" className={isAll ? 'is-all' : ''}>
        {SECTIONS.map(sec => (
          <section
            key={sec.id}
            id={sec.id}
            className="cat"
            data-cat-section={sec.id}
            hidden={!isAll && active !== sec.id}
          >
            <div className="container">
              <header className="cat__head">
                <div>
                  <span className="label label--blue">{sec.num} / {sec.title}</span>
                  <h2 className="cat__title">{sec.title}</h2>
                </div>
                <span className="cat__count">{sec.count}</span>
              </header>
              <LogoGrid logos={sec.logos} />
            </div>
          </section>
        ))}
      </div>

      <div className="page-note">
        <p>Proudly serving a growing portfolio of valued clients across different industries.</p>
      </div>

      <Footer />
    </>
  )
}
