'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const entries = [
  {
    year: '1960',
    title: 'The Beginning',
    body: 'Mr. Muhammad Sultan Ashraf established a small electrical hardware shop in Ranchore Lane, Karachi — the foundation of what would later become the MIMA Group.',
    label: 'Ranchore Lane · Karachi, 1960',
    image: '/old-project/1960.png',
    contain: false,
  },
  {
    year: '1980',
    title: 'MIMA & Brothers Formed',
    body: 'MIMA & Brothers was established to expand into electrical contracting and engineering services, quickly building a reputation for quality and reliability across Pakistan.',
    label: 'Early contracting team · site work',
    image: '/backgrounds/meezan-bank-001.webp',
    contain: true,
  },
  {
    year: '2003',
    title: 'MIMA Construction Established',
    body: 'MIMA Construction was launched to provide civil works and integrated construction solutions, delivering turnkey projects across institutional, commercial, and hospitality sectors.',
    label: 'Schön Centre · Karachi',
    image: '/office-enhanced.png',
    contain: false,
  },
  {
    year: '2009',
    title: 'MIMA Facilities Management Launched',
    body: "MIMA Facilities Management (MFM) was established to provide complete facility management services, strengthening the group's end-to-end infrastructure capabilities.",
    label: 'Standard Chartered facilities',
    image: '/old-project/MFM 2009 .png',
    contain: false,
  },
  {
    year: '2019',
    title: 'MPRO Mechanical Industries Established',
    body: 'MPRO Mechanical Industries was launched to manufacture mechanical and electrical infrastructure products, serving commercial, industrial, and infrastructure projects with high-quality engineering solutions.',
    label: 'Manufacturing floor · MPRO',
    image: '/old-project/mpro 2019 .png',
    contain: false,
  },
  {
    year: '2022',
    title: 'MIMA Engineering Pakistan Established',
    body: 'MIMA Engineering Pakistan was formed to deliver integrated engineering solutions for modern infrastructure — specialising in HVAC, vertical transportation, fire protection, plumbing, and mechanical systems.',
    label: 'HVAC & MEP systems installation',
    image: '/old-project/2022 mima eng.webp',
    contain: false,
  },
]

export default function JourneyTimeline() {
  const railFillRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const entryEls = document.querySelectorAll<HTMLElement>('.journey__entry')
    const railFill = railFillRef.current
    const rail = railRef.current
    if (!railFill || !rail) return

    const revealObs = new IntersectionObserver(
      (items) => {
        items.forEach((it) => {
          if (it.isIntersecting) {
            it.target.classList.add('in-view')
            revealObs.unobserve(it.target)
          }
        })
      },
      { rootMargin: '0px 0px -18% 0px', threshold: 0.2 }
    )

    const activeObs = new IntersectionObserver(
      (items) => {
        items.forEach((it) => {
          it.target.classList.toggle('is-active', it.isIntersecting)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    entryEls.forEach((e) => {
      revealObs.observe(e)
      activeObs.observe(e)
    })

    let ticking = false
    const updateRail = () => {
      const r = rail.getBoundingClientRect()
      const center = window.innerHeight * 0.5
      const h = Math.max(0, Math.min(r.height, center - r.top))
      railFill.style.height = h + 'px'
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateRail)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateRail)
    updateRail()

    return () => {
      revealObs.disconnect()
      activeObs.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateRail)
    }
  }, [])

  return (
    <section className="journey">
      <div className="container">
        <header className="journey__head">
          <span className="label label--blue">Our Journey</span>
          <h2 className="display h2">A steady, generational story.</h2>
        </header>

        <div className="journey__timeline">
          <div className="journey__rail" ref={railRef}>
            <div className="journey__rail-fill" ref={railFillRef} />
          </div>

          {entries.map((item, i) => (
            <article key={item.year} className="journey__entry">
              <span className="journey__dot" aria-hidden="true" />
              <div className="journey__text">
                <div className="journey__year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <div
                className="journey__media"
                data-index={String(i + 1).padStart(2, '0')}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 820px) 100vw, 45vw"
                    style={{ objectFit: item.contain ? 'contain' : 'cover', background: item.contain ? '#f5f5f5' : undefined }}
                  />
                ) : (
                  <div className="journey__ph">
                    <span>{item.label}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
