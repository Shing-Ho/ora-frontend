import React from 'react';
import Image from 'next/image';

import Logo2 from '../assets/svg/logo2.svg';
import Reddit from '../assets/png/reddit.png';
import Twitter from '../assets/png/twitter.png';
import Telegram from '../assets/png/telegram.png';
// import WhitePaperSvg from './WhitePaperSvg';

interface FooterProps {
  height: number
};

export default function Footer({ height } : FooterProps) {
  function getStyle() {
    let styles = {};
    if (height) styles = Object.assign(styles, { height: height });
    return styles;
  }
  return (
    <div className='z-50 header-back header-kanit'>
      <div
        className='flex items-center text-white 2xl:px-60 xl:px-36 lg:px-16 md:px-8 sm:justify-between'
        style={getStyle()}
      >
        <Image src={Logo2} alt='Logo2' />
        <div className='flex flex-col text-white items-end about-contact-us'>
          <div>
            Contact Us
          </div>
          <div className='about-email-info sm:mb-3'>
            Email : info@ora.app
          </div>
          <div className='flex flex-col'>
            <div className='sm:mb-2'>
              Our Social Media
            </div>
            <div className='flex justify-end'>
              <div className='mr-2'>
                <a href='https://www.reddit.com/user/Ora_Time' target='_blank' rel='noreferrer'>
                  <Image src={Reddit} alt='Reddit' />
                </a>
              </div>
              <div className='mr-2'>
                <a href='https://twitter.com/Ora_Time' target='_blank' rel='noreferrer'>
                  <Image src={Twitter} alt='Twitter' />
                </a>
              </div>
              <div>
                <a href='https://t.me/joinchat/Sd0c9GeJoNdiNzZh' target='_blank' rel='noreferrer'>
                  <Image src={Telegram} alt='Telegram' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-white about-terms justify-center items-center sm:mb-10'>
        <div className='flex'>
          <a href="/terms" target='_blank' rel='noreferrer'>
            <div className='flex items-center cursor-pointer'>
              <div className='mr-1'>
                Terms of Services
              </div>
              {/* <WhitePaperSvg width={16} height={16} fill={"#ffffff"} /> */}
            </div>
          </a>
          <div className='border-r border-white sm:mx-3' />
          <div className='flex items-center'>
            <div className='mr-1'>
              Privacy Policy
            </div>
            {/* <WhitePaperSvg width={16} height={16} fill={"#ffffff"} /> */}
          </div>
        </div>
        <div className='about-allrights-reserved'>
          © Ora.app 2021 - All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
