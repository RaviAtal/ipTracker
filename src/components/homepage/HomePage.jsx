'use client'
import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import ContentBody from '../common/ContentBody'
import Tabs from '../common/Tabs'
import { useSearchParams } from 'next/navigation'
import AboutMe from './AboutMe'
import Skill from './Skill'
import Team from './Team'
import Contact from './Contact'

const HomePage = () => {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('about')
  const [activeBody, setActiveBody] = useState('about')

  useEffect(() => {
    const tab = searchParams.get('t')
    if (tab) {
      setActiveBody(tab)
    }
  }, [searchParams, setActiveBody])

  let content
  switch (activeBody) {
    case 'about':
      content = <AboutMe />
      break
    case 'skill':
      content = <Skill />
      break
    case 'team':
      content = <Team />
      break
    case 'contact':
      content = <Contact />
      break
    default:
      content = <AboutMe />
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="flex container gap-5 xl:gap-10 2xl:max-w-[1440px] px-3 mx-auto justify-between flex-col lg:flex-row">
        <Profile />
        <ContentBody title={activeTab} content={content} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}

export default HomePage
