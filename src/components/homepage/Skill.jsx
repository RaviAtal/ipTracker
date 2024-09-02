import React from 'react'
import { SkillLogos } from '../common/Helper'
import Image from 'next/image'

const Skill = () => {
  return (
    <>
      <h3 className="text-base font-medium">PRIMARY SKILLS ON</h3>
      <div className="flex items-center gap-5 mt-5 sm:p-3 flex-wrap">
        {SkillLogos.primarySkill.map((obj, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center size-[62px] sm:size-[71px]"
          >
            <Image
              className="w-full"
              width={50}
              height={50}
              src={obj}
              alt="logo"
            />
          </div>
        ))}
      </div>
      <h3 className="text-base mt-10 font-medium">SECONDARY SKILLS ON</h3>
      <div className="flex items-center gap-5 mt-5 sm:p-3 flex-wrap">
        {SkillLogos.secondarySkill.map((obj, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center size-[62px] sm:size-[71px]"
          >
            <Image
              className="w-full"
              width={50}
              height={50}
              src={obj}
              alt="logo"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Skill
