'use client'

import { useEffect } from 'react'

const PREFETCH_IMAGES = [
  // Home hero (CSS background — critical)
  '/backgrounds/indus.png',
  // About page
  '/backgrounds/standard-chartered.webp',
  // Portfolio page (default hero)
  '/portfolio/MNCs/1 sgs.webp',
  // Clients page
  '/backgrounds/obs-pharma2.webp',
  // Partners page
  '/backgrounds/habbit.webp',
  // MIMA Groups — company pages
  '/backgrounds/05555.jpg',
  '/backgrounds/saerle.webp',
  '/backgrounds/NICVD.jpg',
  '/backgrounds/nastp.webp',
  '/backgrounds/south-city.webp',
  // Banners shown on company pages
  '/mima-brothers-banner.png',
  '/mima-construct-banner.png',
  '/mima-facility-banner.png',
  '/mima-engineering-banner.png',
  // Home sector cards
  '/portfolio/MNCs/1 sgs.png',
  '/old-project/standard-chartered.png',
  '/old-project/liaqat-national.jpeg',
  '/portfolio/Education/ivs.jpg',
  '/portfolio/Hospital/JPMC.jpeg',
  // Company logos used in home cards
  '/mima-mbros.png',
  '/mima-const.png',
  '/mima-facility.png',
  '/mima-eng.png',
]

export default function ImagePrefetcher() {
  useEffect(() => {
    const load = () => {
      PREFETCH_IMAGES.forEach(src => {
        const img = new window.Image()
        img.src = src
      })
    }

    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(load, { timeout: 3000 })
    } else {
      setTimeout(load, 2000)
    }
  }, [])

  return null
}
