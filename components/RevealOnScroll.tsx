'use client'

import React, { useEffect, useRef, ReactNode, HTMLAttributes, ElementType } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  delay?: 0 | 1 | 2 | 3
  tag?: ElementType
  href?: string
}

const delayClass = { 0: '', 1: 'reveal--d1', 2: 'reveal--d2', 3: 'reveal--d3' } as const

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'div',
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = ['reveal', delayClass[delay], className].filter(Boolean).join(' ')

  const AnyTag = Tag as React.ElementType
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <AnyTag ref={ref as any} className={cls} {...rest}>
      {children}
    </AnyTag>
  )
}
