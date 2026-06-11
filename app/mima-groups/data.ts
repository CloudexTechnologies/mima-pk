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
    lede: 'The founding company of the group, a trusted electrical contracting firm established in the 1960s and continuously serving institutional and commercial clients across Pakistan for over four decades.',
    body: [
      "MIMA INC. started in the 1960s as MIMA & Brothers (Muhammad Irfan, Muhammad Aamir & Bros.), set up by their father Mr. Muhammad Sultan Ashrafi as a humble and low-profile Electrical Contracting Company. The firm's market has been the conventional electrical construction sector, with a customer base predominantly comprising Architectural and Electrical Consulting firms.",
      'Advancing technology and changing customer needs have gradually changed and enhanced the scope of MIMA Brothers over four decades. Traditionally, electrical contractors offered one service; however, as the construction industry progressed substantially, experienced contractors like MIMA Brothers felt the need to expand into Civil and Interiors works construction, and thus MIMA Construction came into being.',
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
    lede: 'Turnkey civil works and interiors for institutional, commercial, and hospitality projects. From structural shell to handover-ready fit-out, delivered with precision since 2003.',
    body: [
      'MIMA Construction entered the contracting field in 2003 as a partnership firm, led by Mr. Muhammad Aamir Sultan and Mr. Agha Ahmed Mirza. Starting with a small but dedicated management and technical team, the company quickly established itself by successfully delivering several significant and technologically advanced projects.',
      'Since its inception, MIMA Construction has demonstrated consistent growth and has evolved into a reputable name in the construction industry. The company adopts modern construction techniques and advanced technologies, supported by a team of highly qualified, experienced, and skilled professionals, along with a strong fleet of machinery and equipment.',
      'Over the years, MIMA Construction has successfully completed a diverse range of projects, gaining valuable experience and expertise aligned with international standards. The company is recognised for its commitment to quality, precision, and timely project delivery, earning a solid reputation for excellence in every project it undertakes.',
    ],
    heroImage: '/backgrounds/saerle.png',
    banner: '/mima-construct-banner.png',
    logo: '/mima-const.png',
    accent: false,
    inlineBanner: true,
    gallery: [
      '/old-project/mima-const-01.jpeg',
      '/old-project/mima-cons-01.png',
    ],
  },
  {
    slug: 'facility',
    num: '03',
    est: 'Est. 2009',
    sector: 'Facility Management',
    name: 'MIMA Facilities Management',
    shortName: 'Facility Mgmt.',
    lede: "Comprehensive and integrated facility management solutions, established in 2009 to serve the growing needs of MIMA's diverse client base with operational excellence and long-term value.",
    body: [
      'In 2009, driven by the growing needs of a diverse client base served by MIMA Brothers and MIMA Construction, MIMA Facilities Management (MFM) was established as a dedicated division of MIMA Inc. to provide comprehensive and integrated facility management solutions.',
      'MFM is committed to understanding and exceeding client expectations through tailored services, operational excellence, and continuous improvement. As a key division of MIMA Inc., MFM works in close collaboration with MIMA Brothers and MIMA Construction to deliver efficient, innovative, and reliable outcomes across all projects.',
      'With strong organisational support and enhanced implementation capabilities, MFM combines skilled manpower, modern systems, and industry best practices to ensure seamless facility operations and long-term value for its clients.',
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
    lede: 'A leading engineering solutions company delivering innovative, reliable, and high-quality infrastructure systems for commercial, industrial, institutional, and residential projects across Pakistan.',
    body: [
      'MIMA Engineering Pakistan (Pvt.) Ltd. was formed in 2022 to deliver integrated engineering solutions for modern infrastructure projects. Backed by decades of engineering excellence through the MIMA Group, the company specialises in HVAC solutions, vertical transportation systems, mechanical services, fire fighting systems, plumbing systems, and other specialised engineering solutions.',
      'With a strong commitment to quality, technical expertise, and customer satisfaction, MIMA Engineering partners with globally recognised manufacturers to provide complete design, supply, installation, commissioning, and maintenance services. The company has successfully contributed to universities, embassies, hospitals, commercial towers, shopping malls, and industrial facilities, earning a reputation as a trusted partner for modern building infrastructure.',
    ],
    heroImage: '/backgrounds/nastp.png',
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
    lede: 'A leading manufacturer and engineering solutions provider specialising in mechanical and electrical infrastructure products across Pakistan, driven by a commitment to quality, innovation, and reliability.',
    body: [
      'MPRO Mechanical Industries was established in 2019 to manufacture mechanical and electrical infrastructure products that meet international standards while supporting commercial, industrial, and infrastructure projects nationwide. The company manufactures a comprehensive range of products including GI & EMT conduits, EMT sockets, junction boxes, back boxes, cable trays, bend pipes, flexible pipes, and cable management solutions.',
      'Through strategic partnerships with globally recognised brands, MPRO also provides advanced grounding, lightning protection, surge protection, and electrical interconnection solutions. Renowned for product durability, technical excellence, timely delivery, and dependable after-sales support, MPRO continues to build long-term relationships with clients, consultants, contractors, and industry partners across Pakistan.',
    ],
    heroImage: '/backgrounds/south-city.png',
    banner: '/mpro-banner.png',
    logo: '/mpro-logo.png',
    accent: true,
    inlineBanner: true,
    gallery: [
      '/old-project/gi  1.jpg.jpeg',
      '/old-project/backbox.png',
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
