import React from 'react'
import logo from '../short-logo.png'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='p-5 bg-[#0F0D32] text-white/[.7]'>
        <div className="justify-center items-center text-center m-auto space-x-3 py-5">
            <span>Logo</span>
            <span>Logo</span>
            <span>Logo</span>
        </div>
        <div className="container m-auto py-2">
            <div className="grid lg:grid-cols-3 gap-0">
                <div className="md:col-span-1 px-4">
                   <img src={logo} alt="logo" className='w-[200px] h-[70px]' />
                    <div className="py-2">
                        <p className='text-justify uppercase text-white/[.7] font-thin px-4'>
                        Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly. This is published in every Saturday at 12.00 PM.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 items-center justify-center text-center">
                    <h2 className='text-lg font-bold'>Privacy and Terms</h2>
                    <ul className='md:py-10  space-y-3'>
                        <li><a href="/#" className='hover:text-white'>Privacy Policy</a></li>
                        <li><a href="/#" className='hover:text-white'>Term and Condition</a></li>
                        <li><a href="/#" className='hover:text-white'>FQA</a></li>
                    </ul>
                </div>
                <div className="col-span-1 items-end justify-end text-end">
                    <h2 className='text-lg font-bold'>Support</h2>
                    <ul className='md:py-10  space-y-3'>
                        <li><a href="/#" className='hover:text-white'>Affiliate Link</a></li>
                        <li><a href="/#" className='hover:text-white'>Contact Us</a></li>
                        <li><a href="/#" className='hover:text-white'>Advertise with us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer