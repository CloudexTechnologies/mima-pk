import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealOnScroll from '@/components/RevealOnScroll'
import { companies, getCompany } from '../data'

const total = String(companies.length).padStart(2, '0')

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const co = getCompany(slug)
  if (!co) return {}
  return { title: `${co.name} — MIMA Group` }
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params
  const co = getCompany(slug)
  if (!co) notFound()

  return (
    <>
      <link rel="preload" as="image" href={co.heroImage} />
      <Nav transparent />

      {/* Page hero */}
      <section
        className="phero phero--has-bg"
        style={{ backgroundImage: `url(${co.heroImage})` }}
      >
        <div className="container">
          <div className="phero__crumbs">
            <Link href="/">MIMA Group</Link>
            <span className="sep">/</span>
            <Link href="/#companies">Our Companies</Link>
            <span className="sep">/</span>
            <span>{co.name}</span>
          </div>
          <span className="label label--blue">{co.sector}</span>
          <h1 style={{ marginTop: 14 }}>{co.name}</h1>
        </div>
      </section>

      {/* Full-width banner — hidden when banner is shown inline */}
      {!co.inlineBanner && (
        <section className="co-detail__banner-wrap">
          <Image
            src={co.banner}
            alt={`${co.name} banner`}
            width={1920}
            height={614}
            className="co-detail__banner-img"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </section>
      )}

      {/* Company body */}
      <section className="co-detail">
        <div className="container">
          <div className="co-detail__inner">
            <RevealOnScroll className="co-detail__meta">
              <div className="co__meta" style={{ marginBottom: 24 }}>
                <span>{co.est}</span>
                <span className="dot" />
                <span>{co.sector}</span>
                {co.founding && (
                  <>
                    <span className="dot" />
                    <span style={{ color: 'var(--accent)' }}>Founding Company</span>
                  </>
                )}
              </div>
              <div className="co-detail__num">{co.num} / {total}</div>
            </RevealOnScroll>

            <RevealOnScroll delay={1} className="co-detail__copy">
              {co.inlineBanner && (
                <div className="co-detail__copy-banner">
                  <Image
                    src={co.banner}
                    alt={`${co.name} banner`}
                    width={960}
                    height={307}
                    priority
                    sizes="(max-width: 768px) 100vw, 660px"
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
              )}
              <p className="co__lede">{co.lede}</p>
              {co.body.map((para, i) => (
                <p key={i} className="co-detail__para">{para}</p>
              ))}
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="co-gallery-section">
        <div className="container">
          <div className="co-gallery">
            {co.gallery ? co.gallery.map((src, i) => (
              <div key={src} className="co-gallery__item co-gallery__item--photo">
                <Image
                  src={src}
                  alt={`${co.name} project ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1320px) 50vw, 660px"
                  priority={i === 0}
                  style={{ objectFit: 'cover', objectPosition: co.galleryPositions?.[i] ?? 'top' }}
                />
              </div>
            )) : (
              <>
                <div className="co-gallery__item">
                  <span className="co-gallery__label">Photo 01</span>
                </div>
                <div className="co-gallery__item">
                  <span className="co-gallery__label">Photo 02</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Strategic Partners — credibility close after gallery */}
      {co.partners && (
        <section className="co-partners-section">
          <div className="container">
            <RevealOnScroll>
              <h2 className="co-partners__heading">Strategic Partners &amp; Suppliers</h2>
              <div className="co-partners__logos">
                {co.partners.map((p) => (
                  <div key={p.name} className="co-partners__logo-wrap">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="200px"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
