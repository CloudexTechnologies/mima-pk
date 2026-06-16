'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

type Filter = 'all' | 'multinational' | 'banks' | 'hospitals' | 'education' | 'commercials' | 'npos'

const SECTOR_META: Record<Filter, { title: string; lede: string; crumb: string; bg?: string }> = {
  all:           { title: 'Building across sectors. Delivering lasting impact.',      lede: "Trusted by Pakistan's leading institutions since 1959, from heritage restoration to high-spec multinational headquarters.", crumb: 'Portfolio' },
  multinational: { title: 'Multinational headquarters & facilities.',                lede: 'Purpose-built offices and laboratories for global firms operating in Pakistan, delivered to international fit and finish standards.',  crumb: 'Multinational Companies' },
  banks:         { title: 'Banks & financial institutions.',                         lede: 'Branch rollouts, regional offices, and heritage restorations, discreet, secure, and on-brand.',              crumb: 'Banks', bg: '/portfolio/Banks/1%20standard%20chartered.webp' },
  hospitals:     { title: 'Hospitals & healthcare.',                                 lede: 'Specialised MEP, medical-gas, and clean-room work for tertiary care, ICUs, and surgical floors.',           crumb: 'Hospitals', bg: '/portfolio/Hospital/LNH.jpg' },
  education:     { title: 'Education & research campuses.',                          lede: 'Academic blocks, research labs, and technology parks, built for long teaching lifetimes.',                   crumb: 'Education', bg: '/portfolio/Education/ivs.jpg' },
  commercials:   { title: 'Commercials, retail, F&B, offices.',                      lede: 'Flagship showrooms, restaurants, and commercial towers, handed over on schedule, on-brand.',                crumb: 'Commercials', bg: '/portfolio/Commericals/muller-phipps.jpg' },
  npos:          { title: 'Non-profit institutions.',                                lede: 'Outreach centres, community facilities, and heritage restoration for charitable foundations.',               crumb: 'NPOs' },
}

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all',          label: 'All Projects'  },
  { key: 'multinational',label: 'Multinational' },
  { key: 'banks',        label: 'Banks'         },
  { key: 'hospitals',    label: 'Hospitals'     },
  { key: 'commercials',  label: 'Commercials'   },
  { key: 'education',    label: 'Education'     },
  { key: 'npos',         label: 'NPOs'          },
]

const PH = '/portfolio/MNCs/1%20sgs.png'
const MNC_IMAGE_VERSION = '20260611'
const BANK_IMAGE_VERSION = '20260611'
const HOSPITAL_IMAGE_VERSION = '20260611'
const EDUCATION_IMAGE_VERSION = '20260611'
const COMMERCIAL_IMAGE_VERSION = '20260611'

const PROJECTS: { cat: Filter; img: string; name: string; bullets: string[]; bg?: string }[] = [

  // ── Multinational ──
  { cat:'multinational', img:'/portfolio/MNCs/1%20sgs.png',                       name:'SGS Pakistan',               bullets:['MEP works','Electrical systems','IT & ELV'] },
  { cat:'multinational', img:'/portfolio/MNCs/p%26g.jpg',                         name:'Procter & Gamble',           bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:'/portfolio/MNCs/ibm.jpg',                           name:'IBM BCRS Phase I & II',      bullets:['Civil & interior finishing','Plumbing & electrical','IT & HVAC systems'] },
  { cat:'multinational', img:'/portfolio/MNCs/oracle.jpg',                        name:'Oracle Regional Office',     bullets:['MEP works','Office fit-out','ELV & data integration'] },
  { cat:'multinational', img:`/portfolio/MNCs/skf.jpg?v=${MNC_IMAGE_VERSION}`,                           name:'SKF Pakistan',               bullets:['MEP works','Electrical systems','IT & ELV'] },
  { cat:'multinational', img:'/portfolio/MNCs/shell.jpg',                         name:'Shell Pakistan',             bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:`/portfolio/MNCs/microsoft.jpg?v=${MNC_IMAGE_VERSION}`,                     name:'Microsoft Regional Office',  bullets:['MEP works','Office fit-out','ELV & data integration'] },
  { cat:'multinational', img:`/portfolio/MNCs/maersk.jpg?v=${MNC_IMAGE_VERSION}`,                        name:'Maersk Pakistan',            bullets:['MEP works','Electrical systems','IT & ELV'] },
  { cat:'multinational', img:'/portfolio/MNCs/bp.jpeg',                           name:'BP Pakistan',                bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:'/portfolio/MNCs/eni.jpg',                           name:'ENI Pakistan',               bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'multinational', img:`/portfolio/MNCs/clipsal.jpg?v=${MNC_IMAGE_VERSION}`,                       name:'Clipsal',                    bullets:['MEP works','Electrical systems','IT & ELV'] },
  { cat:'multinational', img:`/portfolio/MNCs/mercedes.png?v=${MNC_IMAGE_VERSION}`,                      name:'Mercedes-Benz Pakistan',     bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:`/portfolio/MNCs/toyota.jpg?v=${MNC_IMAGE_VERSION}`,                        name:'Toyota Pakistan',            bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:'/portfolio/MNCs/kfc.jpg',                           name:'KFC Pakistan',               bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'multinational', img:'/portfolio/MNCs/dunkin%20donuts.png',               name:"Dunkin' Donuts",             bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'multinational', img:'/portfolio/MNCs/nandos.png',                        name:"Nando's Pakistan",           bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'multinational', img:'/portfolio/MNCs/mondelez%20int.webp',               name:'Mondelez International',     bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:'/portfolio/MNCs/uniliver.jpg',                      name:'Unilever Pakistan',          bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'multinational', img:'/portfolio/MNCs/coca%20cola.jpg',                   name:'Coca-Cola Pakistan',         bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'multinational', img:'/portfolio/MNCs/hutchison%20port%20kict.jpg',       name:'Hutchison Ports KICT',       bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'multinational', img:'/portfolio/MNCs/bbc.webp',                          name:'BBC World Service',          bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'multinational', img:'/portfolio/MNCs/uep.jpg',                           name:'United Energy Pakistan (UEP)', bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },

  // ── Banks ──
  { cat:'banks', img:'/portfolio/Banks/1%20standard%20chartered.png',             name:'Standard Chartered: Schon Centre',  bullets:['MEP works','Electrical systems','IT & ELV works'] },
  { cat:'banks', img:`/portfolio/Banks/deutsche%20bank%20.jpg?v=${BANK_IMAGE_VERSION}`,                   name:'Deutsche Bank, Avari Tower',        bullets:['Civil & interior finishing','Firefighting systems','Electrical, IT & HVAC'] },
  { cat:'banks', img:`/portfolio/Banks/barclays.jpeg?v=${BANK_IMAGE_VERSION}`,                            name:'Barclays Bank',                     bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'banks', img:`/portfolio/Banks/4%20dubai%20islamic%20bank.jpg?v=${BANK_IMAGE_VERSION}`,           name:'Dubai Islamic Bank',                bullets:['MEP works','Electrical systems','IT & ELV works'] },
  { cat:'banks', img:'/portfolio/Banks/emirates%20islamic%20bank%20.png',         name:'Emirates Global Islamic Bank',      bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'banks', img:'/portfolio/Banks/citi%20bank%20.png',                       name:'Citibank Pakistan',                 bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'banks', img:'/portfolio/Banks/meezan%20bank%20.png',                     name:'Meezan Bank Office, Karachi',       bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'banks', img:`/portfolio/Banks/8%20ubl.png?v=${BANK_IMAGE_VERSION}`,                              name:'United Bank Limited',               bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/10%20allied.png',                          name:'Allied Bank,DHA Commercial',        bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/hbl%20whitehouse.png',                     name:'Habib Bank Limited,Hassan Square',  bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/hbl2.webp',                                name:'HBL,SMCHS & Khayabane Hafiz',       bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/alfalah.png',                              name:'Bank Alfalah',                      bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'banks', img:'/portfolio/Banks/13%20mcb.png',                             name:'MCB Bank',                          bullets:['MEP works','Electrical systems','IT & ELV works'] },
  { cat:'banks', img:'/portfolio/Banks/al%20habib.png',                           name:'Bank Al Habib,SHBZ Branch',         bullets:['Civil & interior finishing','Electrical & HVAC works','IT & ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/js%20bank.png',                            name:'JS Bank,Chairman Office',           bullets:['Electrical works','Interior fit-out','ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/1link.png',                                name:'1LINK Pak Tower',                   bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'banks', img:'/portfolio/Banks/summit.jpg',                               name:'Summit Bank',                       bullets:['MEP works','Electrical systems','IT & ELV works'] },

  // ── Hospitals ──
  { cat:'hospitals', img:'/portfolio/Hospital/aku.jpg',                           name:'Aga Khan University Hospital',      bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'hospitals', img:'/portfolio/Hospital/indus%20enhanced.png',              name:'Indus Hospital,Blood Center',       bullets:['Electrical & ELV works','HT & LT cabling','Panel installation'] },
  { cat:'hospitals', img:'/portfolio/Hospital/LNH.jpg',                           name:'Liaquat National Hospital',         bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'hospitals', img:'/portfolio/Hospital/nicvd%20enh.png',                   name:'NICVD, Karachi',                    bullets:['HVAC & mechanical works','Specialized MEP','Critical systems'] },
  { cat:'hospitals', img:'/portfolio/Hospital/the%20kidney%20center.jpg',         name:'The Kidney Center',                 bullets:['MEP works','Electrical systems','Mechanical & plumbing'] },
  { cat:'hospitals', img:'/portfolio/Hospital/sch.jpg',                           name:'South City Hospital',               bullets:['MEP works','Electrical systems','Mechanical & plumbing'] },
  { cat:'hospitals', img:'/portfolio/Hospital/patel%20hospital%20enh.png',        name:'Patel Hospital,3rd & 4th Floor',    bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'hospitals', img:`/portfolio/Hospital/medicare%20enhanced.png?v=${HOSPITAL_IMAGE_VERSION}`,           name:'Medicare Heart Hospital',           bullets:['MEP works','Electrical systems','HVAC & plumbing'] },

  // ── Education ──
  { cat:'education', img:'/portfolio/Education/iba%20gh%20enhanced.png',          name:'IBA Karachi',                       bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'education', img:'/portfolio/Education/iobm%20enhanced.png',              name:'IoBM',                              bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'education', img:'/portfolio/Education/ivs.jpg',                          name:'Indus Valley School',               bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'education', img:'/portfolio/Education/tcs.jpg.jpeg',                     name:'The City School',                   bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'education', img:`/portfolio/Education/bccd%20enhancex.png?v=${EDUCATION_IMAGE_VERSION}`,              name:'Beaconhouse College Campus, Defence', bullets:['Civil & interior finishing','Plumbing works','Electrical & IT systems'] },

  // ── Commercials ──
  { cat:'commercials', img:'/portfolio/Commericals/muller-phipps.jpg',            name:'Muller & Phipps',                   bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/parco%20emerald%20tower.jpg',  name:'PARCO Offices, Emerald Tower',      bullets:['Electrical works','HVAC systems','Firefighting works'] },
  { cat:'commercials', img:'/portfolio/Commericals/fpcl%20.jpg',                  name:'FPCL',                              bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/dialog-axiata.jpg',            name:'Dialog Axiata',                     bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/one%20ibl%20tower.jpeg',       name:'One IBL Center',                    bullets:['Civil & interior finishing','Electrical works','IT systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/habitt%20market.jpeg',         name:'Habitt Showroom',                   bullets:['Interior finishing','Plumbing & firefighting','Electrical & HVAC'] },
  { cat:'commercials', img:'/portfolio/Commericals/continental%20biscuit%20.jpg', name:'Continental Biscuits',              bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/k%20electric%20.jpg',          name:'K-Electric KTGTP Grid Station',     bullets:['Civil works','Electrical & IT works','HVAC systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/oasis%20aqua%20resort.jpg',    name:'Oasis Golf & Aqua Resort',           bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/bays%20international.jpeg',      name:'Bays International',         bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:`/portfolio/Commericals/feroze%201888.jpeg?v=${COMMERCIAL_IMAGE_VERSION}`,           name:'Feroze 1888',                       bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/Amreli-Steel.webp',            name:'Amreli Steels',                     bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/martin%20dow%20.jpg',          name:'Martin Dow,Head Office',            bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/cybernet.png',                 name:'Cybernet',                          bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/NASTEP.jpeg',                  name:'NASTP',                             bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/crescent%20steel%20and%20allied%20power.jpg', name:'Crescent Steel & Allied Power', bullets:['Civil & MS structure','Electrical works','Allied MEP works'] },
  { cat:'commercials', img:'/portfolio/Commericals/hilal%20foods%20.jpeg',        name:'Hilal Foods,New Line 5',            bullets:['Electrical works','Power systems','Control systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/dolmen-mall.jpg',              name:'Dolmen Mall',                       bullets:['Civil & interior finishing','Electrical works','AC & HVAC systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/lucky%20one%20.jpg',           name:'LuckyOne Mall',                     bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/outfitters%20.png',            name:'Outfitters,Multi-City Rollout',     bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/dhanak.webp',                  name:'Dhanak',                            bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/sana%20safinaz.jpeg',          name:'Sana Safinaz,Head Office',          bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/goolotlo.png',                 name:'Golootlo,4 Floors, Karachi',        bullets:['Electrical & ELV works','Multi-floor fit-out','IT systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/searle.jpeg',                  name:'OBS Pharma',                        bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/tcs-office.jpg',               name:'TCS Pakistan',                      bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/peng.png',                     name:"Peng's Salon",                      bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/ghalib.jpeg',                  name:'Khaadi Kanteen',                    bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'commercials', img:'/portfolio/Commericals/tarzz.png',                    name:'Tarzz',                             bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/ghalib.jpg',                   name:'Ghalib',                            bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/brookes%20pharma%20.jpg',      name:'Brookes Pharma',                    bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/qureshi-groups.jpg',           name:'Qureshi Group',                     bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/shan.jpg',                     name:'Shan Foods',                        bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/dalda.webp',                   name:'Dalda',                             bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/national%20foods.jpeg',        name:'National Foods',                    bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/soorty%20denim%20.jpg',        name:'Soorty Denim',                      bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/KBC.jpeg',                     name:'Karachi Boating Club',              bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/malak.jpeg',                   name:'Malak',                             bullets:['MEP works','Electrical systems','HVAC & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/world%20wide%20group.jpg',     name:'World Wide Group',                  bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/meezan.jpeg',                  name:'Mezan',                             bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:`/portfolio/Commericals/dbrwed.jpg?v=${COMMERCIAL_IMAGE_VERSION}`,                   name:"dBrew'd",                           bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/OBS.jpeg',                     name:'Searle Company',                    bullets:['Civil & MS structure','Electrical works','Allied MEP works'] },
  { cat:'commercials', img:'/portfolio/Commericals/koel.webp',                    name:'Koel',                              bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },
  { cat:'commercials', img:'/portfolio/Commericals/naurattan.png',                name:'Naurattan Jewellers',               bullets:['MEP works','Mechanical systems','Electrical & plumbing'] },

  // ── NPOs ──
  { cat:'npos', img:'/portfolio/NPOS/hunar-foundation.png',                       name:'Hunar Foundation',        bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'npos', img:'/portfolio/NPOS/shaheen%20foundation.jpg',                   name:'Shaheen Foundation',      bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'npos', img:'/portfolio/Hospital/JPMC.jpeg',                              name:'JPMC Surgical & Oncology Complex, Patient Aid Foundation', bullets:['Civil & interior finishing','Electrical works','IT & ELV systems'] },
  { cat:'npos', img:'/portfolio/NPOS/al%20khidmat%20foundation.jpeg',             name:'Al Khidmat Foundation',   bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
  { cat:'npos', img:'/portfolio/NPOS/tcs-foundation.png',                         name:'The Citizens Foundation', bullets:['MEP works','Electrical systems','Plumbing & HVAC'] },
]

function PortfolioContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat') as Filter | null
  const [filter, setFilter] = useState<Filter>(() => {
    const cat = catParam as Filter
    return SECTOR_META[cat] ? cat : 'all'
  })

  useEffect(() => {
    const cat = catParam as Filter
    setFilter(SECTOR_META[cat] ? cat : 'all')
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [catParam])

  const apply = (f: Filter) => {
    setFilter(f)
    router.replace(`/portfolio?cat=${f}`, { scroll: false })
  }

  const meta = SECTOR_META[filter]
  const visible = PROJECTS.filter(p => filter === 'all' || p.cat === filter)

  const heroImg = filter === 'all'
    ? '/portfolio/MNCs/1%20sgs.webp'
    : (meta.bg ?? PROJECTS.find(p => p.cat === filter)?.img ?? '/portfolio/MNCs/1%20sgs.webp')

  return (
    <>
      <link rel="preload" as="image" href={heroImg} />
      <Nav transparent />

      {/* Page hero */}
      <section className="phero phero--has-bg" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
          <div className="phero__crumbs">
            <Link href="/">MIMA Group</Link>
            <span className="sep">/</span>
            <span>{meta.crumb}</span>
          </div>
          <span className="label label--blue">Portfolio</span>
          <h1 style={{ marginTop: 14 }}>{meta.title}</h1>
          {filter !== 'all' && <p className="phero__lede">{meta.lede}</p>}
        </div>
      </section>

      {/* Filter bar */}
      <div className="filters">
        <div className="filters__inner">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filters__btn${filter === f.key ? ' is-active' : ''}`}
              onClick={() => apply(f.key)}
            >
              {f.label}
            </button>
          ))}
          <span className="filters__count">{visible.length} {visible.length === 1 ? 'Project' : 'Projects'}</span>
        </div>
      </div>

      {/* Projects grid */}
      <section className="projects">
        <div className="container">
          <div className="projects__grid">
            {visible.map((p, i) => (
              <div key={i} className="card">
                <div className="card__art" style={p.bg ? { background: p.bg } : undefined}>
                  <Image src={p.img} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: p.bg ? 'contain' : 'cover', padding: p.bg ? '20px' : undefined }} />
                </div>
                <h3 className="card__name">{p.name}</h3>
                <ul className="card__bullets">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
          {visible.length === 0 && (
            <div className="empty">No projects in this sector yet.</div>
          )}
        </div>
      </section>

      <div className="page-note">
        <p>Showcasing a selection of our completed and ongoing projects, with many more across various sectors.</p>
      </div>

      <Footer />
    </>
  )
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <PortfolioContent />
    </Suspense>
  )
}
