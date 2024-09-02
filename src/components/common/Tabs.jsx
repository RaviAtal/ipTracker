'use client'
import React, { useEffect } from 'react'
import { tabList } from './Helper'
import { useRouter, useSearchParams } from 'next/navigation'

const Tabs = ({ setActiveTab, activeTab }) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const setTabActiveHandler = (value) => {
    router.push(`/?t=${value}`, undefined, { shallow: true })
  }

  useEffect(() => {
    const tab = searchParams.get('t')
    if (tab) {
      setActiveTab(tab)
    }
  }, [searchParams, setActiveTab])

  return (
    <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-5 fixed lg:h-full lg:static flex flex-row lg:flex-col max-w-[500px] lg:max-w-full left-1/2 -translate-x-1/2 lg:translate-x-0 w-full lg:w-auto bottom-0 justify-between lg:justify-start">
      {tabList.map((obj, index) => (
        <div
          key={index}
          onClick={() => setTabActiveHandler(obj.title)}
          className={`rounded-md duration-300 tab_parent hover:shadow-box-shadow p-4 flex items-center flex-col cursor-pointer w-[80px] sm:w-[93px] ${
            index !== 0 && 'lg:mt-4'
          } ${
            activeTab === obj.title
              ? 'bg-primary'
              : 'bg-transparent hover:bg-card-gradient'
          }`}
        >
          <span
            className={`duration-300 ${
              activeTab === obj.title ? 'active_icon' : ''
            }`}
          >
            {obj.icon}
          </span>
          <p
            className={`text-sm sm:text-base font-medium pt-1 duration-300 capitalize ${
              activeTab === obj.title ? 'text-white' : 'text-secondary'
            }`}
          >
            {obj.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Tabs
