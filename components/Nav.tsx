'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface NavProps {
  transparent?: boolean
}

export default function Nav({ transparent = false }: NavProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [ddOpen, setDdOpen] = useState(false)
  const [ddMimaOpen, setDdMimaOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    setDdOpen(false)
    setDdMimaOpen(false)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const navClass = transparent
    ? `nav--home${scrolled ? ' nav--scrolled' : ''}`
    : 'nav'

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header className={navClass} id="nav">
        <div className="nav__inner">
          <Link className="nav__brand" href="/" aria-label="MIMA Group Home">
            {transparent ? (
              <>
                <Image className="mark--light" src="/mima-groups-darkuse.png" alt="MIMA" width={160} height={42} priority />
                <Image className="mark--dark"  src="/mima-groups-lightuse.png"  alt="MIMA" width={160} height={42} priority />
              </>
            ) : (
              <Image src="/mima-groups-lightuse.png" alt="MIMA" width={160} height={42} priority />
            )}
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {/* Mobile panel header */}
            <div className="nav__mob-head">
              <Image className="nav__mob-logo" src="/mima-groups-lightuse.png" alt="MIMA" width={120} height={30} />
              <button
                className="nav__close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 2l14 14M16 2L2 16" />
                </svg>
              </button>
            </div>

            <Link href="/" className={isActive('/') ? 'is-active' : ''} onClick={closeMenu}>Home</Link>
            <Link href="/about" className={isActive('/about') ? 'is-active' : ''} onClick={closeMenu}>About</Link>

            {/* MIMA Group dropdown */}
            <div className={`nav__dd${ddMimaOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                aria-haspopup="true"
                onClick={(e) => { e.stopPropagation(); setDdMimaOpen(v => !v) }}
              >
                MIMA Group <ChevronDown size={13} className="chev-icon" />
              </button>
              <div className="nav__menu" role="menu">
                <Link href="/mima-groups/electrical" onClick={closeMenu}>MIMA Brothers <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/mima-groups/construction" onClick={closeMenu}>MIMA Construction <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/mima-groups/facility" onClick={closeMenu}>MIMA Facilities Management <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/mima-groups/engineering" onClick={closeMenu}>MIMA Engineering <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/mima-groups/mpro" onClick={closeMenu}>MPRO <ArrowRight size={12} className="menu-arrow" /></Link>
              </div>
            </div>

            {/* Portfolio dropdown */}
            <div className={`nav__dd${ddOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                aria-haspopup="true"
                onClick={(e) => { e.stopPropagation(); setDdOpen(v => !v) }}
              >
                Portfolio <ChevronDown size={13} className="chev-icon" />
              </button>
              <div className="nav__menu" role="menu">
                <Link href="/portfolio?cat=all"           onClick={closeMenu}>All Projects           <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/portfolio?cat=multinational" onClick={closeMenu}>Multinational Companies <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/portfolio?cat=banks"         onClick={closeMenu}>Banks                   <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/portfolio?cat=hospitals"     onClick={closeMenu}>Hospitals               <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/portfolio?cat=commercials"   onClick={closeMenu}>Commercials             <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/portfolio?cat=education"     onClick={closeMenu}>Education               <ArrowRight size={12} className="menu-arrow" /></Link>
                <Link href="/portfolio?cat=npos"          onClick={closeMenu}>NPOs                    <ArrowRight size={12} className="menu-arrow" /></Link>
              </div>
            </div>

            <Link href="/partners" className={isActive('/partners') ? 'is-active' : ''} onClick={closeMenu}>Our Partners</Link>
            <Link href="/clients" className={isActive('/clients') ? 'is-active' : ''} onClick={closeMenu}>Clients</Link>

            <div className="nav__cta">
              {transparent
                ? <Link className="btn btn--ghost-light" href="/#contact">Contact</Link>
                : <Link className="btn btn--outline-blue" href="/#contact">Contact</Link>
              }
            </div>
          </nav>

          <button
            className="nav__burger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="nav__overlay"
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}
