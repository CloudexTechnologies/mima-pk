import Link from 'next/link'

interface Props {
  label: string
  title: string
  crumb: string
  lede?: string
  image?: string
}

export default function PageHero({ label, title, crumb, lede, image }: Props) {
  return (
    <section
      className={image ? 'phero phero--has-bg' : 'phero'}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="container">
        <div className="phero__crumbs">
          <Link href="/">MIMA Group</Link>
          <span className="sep">/</span>
          <span>{crumb}</span>
        </div>
        <span className="label label--blue">{label}</span>
        <h1 style={{ marginTop: 14 }}>{title}</h1>
        {lede && <p className="phero__lede">{lede}</p>}
      </div>
    </section>
  )
}
