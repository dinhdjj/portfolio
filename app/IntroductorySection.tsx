'use client'

import { useState } from 'react'
import CircleArrow from '~/icons/CircleArrow'
import LongArrow from '~/icons/LongArrow'
import SolidEnvelope from '~/icons/SolidEnvelope'
import SquareGithub from '~/icons/SquareGithub'
import SquareTwitter from '~/icons/SquareTwitter'
import { links } from '~/links'

export default function IntroductorySection({
  className,
}: {
  className?: string
}) {
  return (
    <main className={`grid grid-cols-12 justify-between pt-16 ${className}`}>
      <LeftColumn />
      <RightColumn />
    </main>
  )
}

function LeftColumn() {
  const [twitterClassName, setTwitterClassName] = useState('')
  const [githubClassName, setGithubClassName] = useState('')
  const [envelopeClassName, setEnvelopeClassName] = useState('')

  const onCollaborateClick = () => {
    const activeClass = '!scale-125 !text-slate-200'
    setTwitterClassName(activeClass)
    setTimeout(() => {
      setGithubClassName(activeClass)
      setTwitterClassName('')
    }, 200)

    setTimeout(() => {
      setEnvelopeClassName(activeClass)
      setGithubClassName('')
    }, 400)

    setTimeout(() => {
      setEnvelopeClassName('')
    }, 600)
  }

  return (
    <div className='col-span-8 space-y-3'>
      <h1 className='text-7xl font-bold text-slate-200'>
        Hi, I&apos;m <span className='text-sky-400'>Dinh</span>
      </h1>
      <div className='flex gap-4 px-5 pt-3'>
        <div>
          <CircleArrow className='h-11 w-16 text-slate-200' />
        </div>
        <div className='space-y-5 pt-7'>
          <p className='text-sm'>
            As a web developer from Vietnam, I have a passion for working with
            the TALL (Tailwind, Alpine, Laravel, Livewire) stack and a deep
            interest in TypeScript and Next.js. With my skills and experience, I
            am capable of developing high-quality, scalable web applications
            that provide an exceptional user experience.
          </p>
          <button
            className='flex items-center gap-3 text-sky-400 transition active:translate-x-2'
            onClick={onCollaborateClick}
          >
            <span className='min-w-max text-xs'>Let&apos;s Collaborate</span>
            <LongArrow className='mt-0.5 h-auto w-11' />
          </button>
          <div className='flex items-start gap-32 pt-10'>
            <a href={links.TWITTER} target='_blank' className='mt-3.5'>
              <SquareTwitter
                className={`h-7 w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200 ${twitterClassName}`}
              />
            </a>
            <a href={links.GITHUB} target='_blank' className='mt-7'>
              <SquareGithub
                className={` h-7 w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200 ${githubClassName}`}
              />
            </a>
            <a href={links.EMAIL} target='_blank' className='-mt-[0.2rem]'>
              <SolidEnvelope
                className={`h-[2.25rem] w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200 ${envelopeClassName}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function RightColumn() {
  return (
    <div className='col-span-4 flex flex-col items-end'>
      <div className='-mr-2 flex flex-col items-center gap-5'>
        <div className='h-36 w-[1px] rounded-full bg-slate-500' />
        <a href={links.TWITTER} target='_blank'>
          <SquareTwitter className='h-4 w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200' />
        </a>
        <a href={links.GITHUB} target='_blank'>
          <SquareGithub className='h-4 w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200' />
        </a>
        <a href={links.EMAIL} target='_blank'>
          <SolidEnvelope className='h-[1.2rem] w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200' />
        </a>
        <div className='h-28 w-[1px] rounded-full bg-slate-500' />
      </div>
    </div>
  )
}
