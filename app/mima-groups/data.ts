export interface Company {
  slug: string
  num: string
  est: string
  sector: string
  founding?: boolean
  name: string
  shortName: string
  lede: string
  body: string[]
  heroImage: string
  banner: string
  logo: string
  accent: boolean
  inlineBanner?: boolean
  gallery?: string[]
  galleryPositions?: string[]
  partners?: { name: string; logo: string }[]
}

export const companies: Company[] = [
  {
    slug: 'electrical',
    num: '01',
    est: 'Est. 1960s',
    sector: 'Electrical Contracting',
    founding: true,
    name: 'MIMA Brothers',
    shortName: 'MIMA Brothers',
    lede: 'The founding company of the group, MIMA Brothers is a trusted electrical company established in the 1960s. For more than six decades, the company has continuously served clients across Pakistan.',
    body: [
      'MIMA Brothers, named after Muhammad Irfan and Muhammad Aamir, was founded by their father, Mr. Muhammad Sultan Ashrafi. Starting as a modest electrical company, the firm mainly operated in the electrical sector.',
      'Over the years, developments in technology and changing client requirements gradually expanded the scope of MIMA & Brothers. As the construction industry continued to grow, the company recognized the need to offer more comprehensive services. Building on its experience and market reputation, MIMA Brothers expanded into civil construction and interior works, leading to the establishment of MIMA Construction.',
    ],
    heroImage: '/backgrounds/05555.jpg',
    banner: '/mima-brothers-banner.png',
    logo: '/mima-mbros.png',
    accent: true,
    inlineBanner: true,
    gallery: [
      '/old-project/goolotlo.png',
      '/old-project/allied-bank.png',
    ],
  },
  {
    slug: 'construction',
    num: '02',
    est: 'Est. 2003',
    sector: 'Civil & Interior Works',
    name: 'MIMA Construction',
    shortName: 'Construction',
    lede: 'MIMA Construction provides complete civil works and interior solutions for MNCs, banks, commercial, hospitality, homes and all other projects. From structural construction to fully finished and handover ready spaces, every project is delivered with quality, precision, and professionalism.',
    body: [
      'MIMA Construction entered the contracting industry in 2003 as a firm led by Mr. Muhammad Aamir Sultan. Beginning with a small but committed management and technical team, the company quickly built its reputation by successfully completing several major and technically advanced projects.',
      'Since its establishment, MIMA Construction has achieved steady growth and developed into a respected name within the construction industry. The company uses modern construction methods and advanced technologies, supported by a team of highly qualified, experienced, and skilled professionals, as well as a strong fleet of machinery and equipment.',
    ],
    heroImage: '/backgrounds/saerle.webp',
    banner: '/mima-construct-banner.png',
    logo: '/mima-const.png',
    accent: false,
    inlineBanner: true,
    gallery: [
      '/mima-const1.png',
      '/mima-const2.png',
    ],
  },
  {
    slug: 'facility',
    num: '03',
    est: 'Est. 2009',
    sector: 'Facility Management',
    name: 'MIMA Facilities Management',
    shortName: 'Facility Mgmt.',
    lede: "MIMA Facilities Management provides comprehensive and integrated facility management solutions designed to support efficient operations and deliver long term value. Established in 2009, the company serves the growing and diverse needs of MIMA's clients across multiple sectors.",
    body: [
      'MIMA Facilities Management was established as a dedicated division of MIMA Inc. in response to the increasing requirements of clients served by MIMA Brothers and MIMA Construction. The division was created to provide reliable, coordinated, and professionally managed facility services under one platform.',
      'MFM focuses on understanding each client\'s specific requirements and delivering customized solutions through operational excellence, quality service, and continuous improvement. Working closely with MIMA Brothers and MIMA Construction, the company ensures efficient coordination and dependable outcomes across all projects.',
      'Supported by the strong organizational structure of MIMA Inc., MFM combines skilled manpower, modern management systems, and industry best practices. This enables the company to maintain smooth facility operations, improve performance, and provide reliable, sustainable, and long term value to its clients.',
    ],
    heroImage: '/backgrounds/NICVD.jpg',
    banner: '/mima-facility-banner.png',
    logo: '/mima-facility.png',
    accent: false,
    inlineBanner: true,
    gallery: [
      '/old-project/mfm-1.png',
      '/old-project/mima-fac-02.png',
    ],
  },
  {
    slug: 'engineering',
    num: '04',
    est: 'Est. 2022',
    sector: 'Engineering Solutions',
    name: 'MIMA Engineering Pakistan',
    shortName: 'Engineering',
    lede: 'MIMA Engineering delivers integrated engineering solutions for commercial, industrial, institutional, and residential projects. Its services include Elevators, HVAC & other services. From planning and installation to testing, commissioning, maintenance, and after sales support, the company focuses on safety, technical precision, quality, compliance, and reliable long-term performance.',
    body: [
      'Supported by experienced technical teams, MIMA Engineering works closely with clients, consultants, contractors, and facility managers to ensure coordinated execution, timely completion, and dependable systems tailored to each project\'s requirements.',
    ],
    heroImage: '/backgrounds/nastp.webp',
    banner: '/mima-engineering-banner.png',
    logo: '/mima-eng.png',
    accent: false,
    inlineBanner: true,
    gallery: [
      '/old-project/mima-eng-01.jpeg',
      '/old-project/fire-ext.jpeg',
    ],
    galleryPositions: ['top', 'center'],
    partners: [
      { name: 'SRH Safe Reach', logo: '/partners/SRH-Mima-Eng.png' },
      { name: 'Lennox', logo: '/partners/lennox-logo.png' },
      { name: 'Beechcraft KingAir', logo: '/partners/kingair-Mima-Eng.png' },
    ],
  },
  {
    slug: 'mpro',
    num: '05',
    est: 'Est. 2019',
    sector: 'Mechanical & Electrical Manufacturing',
    name: 'MPRO Mechanical Industries',
    shortName: 'MPRO',
    lede: 'MPRO Mechanical Industries is among the top notch companies manufacturing mechanical and electrical products in Pakistan. We also represent globally recognized brands such as WAGO Germany and ERICO USA as their distributors and agents in Pakistan.',
    body: [
      'Since inception our sole motto has been to constantly improve our technology and processes in manufacturing quality products of the highest international standards and to introduce in Pakistan latest technologies from abroad, especially from USA and leading countries of Europe.',
      'Our products, due to our non-compromise on quality, are already renowned for utmost reliability and durability throughout Pakistan. We strive for long-term cooperation with our clients and partners, offering an individual approach and a flexible system of after sales services.',
    ],
    heroImage: '/backgrounds/south-city.webp',
    banner: '/mpro-banner.png',
    logo: '/mpro-logo.png',
    accent: true,
    inlineBanner: true,
    gallery: [
      '/mpro1.png',
      '/mpro2.png',
    ],
    partners: [
      { name: 'WAGO Germany', logo: '/partners/Wago-logo-mpro.png' },
      { name: 'nVent ERICO USA', logo: '/partners/nVent_Erico_Logo_RGB_F2_dhg5zp.png' },
    ],
  },
]

export function getCompany(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug)
}
