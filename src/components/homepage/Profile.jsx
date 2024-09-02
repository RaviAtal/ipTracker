import React from 'react'
import {
  Download,
  Email,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Location,
  Phone,
  Twitter,
} from '../common/Icons'
import Image from 'next/image'

const Profile = () => {
  // CV ODF DOWNLOADER
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv/RAVI_Resume.pdf'
    link.download = 'RAVI_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <>
      <div className="pt-16">
        <div className="text-[white] rounded-[10px] bg-card-gradient shadow-box-shadow p-5 text-center relative">
          <Image
            className="rounded-full -top-[10%] left-1/2 -translate-x-1/2 absolute pointer-events-none"
            width={150}
            height={150}
            src="/assets/images/ravi_profile.png"
            alt="profile"
          />
          <h2 className="text-[#ff014f] text-center text-2xl font-bold pt-16">
            Ravi
          </h2>
          <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-5 text-center mt-6 max-w-[330px] mx-auto">
            <p className="text-lg font-bold">Frontend Dev</p>
          </div>
          <div className=" flex gap-[10px] mt-5 justify-center">
            <a
              href="https://www.linkedin.com/in/ravi-atal-030338204/"
              target="_blank"
              className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center cursor-pointer size-[62px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
            >
              <Linkedin />
            </a>
            {/* github */}
            <a
              href="https://github.com/RaviAtal"
              target="_blank"
              className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center cursor-pointer size-[62px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
            >
              <Github />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008731365060"
              target="_blank"
              className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center cursor-pointer size-[62px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/raviatal102002/"
              target="_blank"
              className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center cursor-pointer size-[62px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
            >
              <Instagram />
            </a>
            <a
              href="https://x.com/ravi_atal44"
              target="_blank"
              className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] flex items-center justify-center cursor-pointer size-[62px] hover:translate-y-[-3px] duration-300 hover:bg-card-gradient-translate"
            >
              <Twitter />
            </a>
          </div>
          <div className="mt-[32px] rounded-[10px] bg-card-gradient shadow-box-shadow p-4 sm:p-5">
            <a
              href="tel:+91 99912 41197"
              className=" flex text-center items-center gap-5 group"
            >
              <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] size-[62px] cursor-pointer flex items-center justify-center">
                <Phone />
              </div>
              <div>
                <p className="text-[13px] text-start ">Phones</p>
                <p className="group-hover:text-primary duration-300">
                  +91 99912 41197
                </p>
              </div>
            </a>
            <a
              href="mailto:raviatal44@gmail.com"
              className=" flex text-center items-center gap-5 mt-[30px] group "
            >
              <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] size-[62px] flex items-center justify-center">
                <Email />
              </div>
              <div>
                <p className="text-[13px] text-start ">Email</p>
                <p className="group-hover:text-primary duration-300 max-w-[195px] sm:max-w-[210px] truncate">
                  raviatal44@gmail.com
                </p>
              </div>
            </a>
            <div className=" flex text-center items-center gap-5 mt-[30px] group">
              <div className="rounded-[10px] bg-card-gradient shadow-box-shadow p-[20px] size-[62px] cursor-pointer flex items-center justify-center">
                <Location />
              </div>
              <div>
                <p className="text-[13px] text-start">Location</p>
                <p className="group-hover:text-primary duration-300">
                  Hisar, Haryana
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center mt-3 sm:mt-[30px]">
            <button
              onClick={handleDownload}
              className="text-white mt-3 mb-3 download_button rounded-[10px] bg-card-gradient group flex items-center gap-3 justify-center shadow-box-shadow p-5 text-center"
            >
              <Download />
              <span className="text-secondary font-medium group-hover:text-primary duration-300">
                Download Cv
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
