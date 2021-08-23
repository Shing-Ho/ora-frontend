import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

import AirdropImage from '../assets/svg/04.svg';

const AirDrop: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Ora - Airdrop</title>
        <meta name="description" content="Ora is on a mission to re-invent and modernize the data industry" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header height={0} />
      <div className='2xl:mx-96 xl:mx-36 lg:mx-16 md:mx-6 sm:mt-28'>
        <div className='flex justify-center items-center'>
          <div className='roadmap-headline'>
            Air<span className='about-text-blue'>drop</span>
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex flex-col 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mt-10 items-center sm:mb-10'>
        <div>
          <Image src={AirdropImage} alt='Airdrop Image' />
        </div>
        <div className='airdrop-headline sm:mt-20'>
          <span className='opacity-65'>Ora has allocated up to</span><span className='time-token-notes about-text-blue'>&nbsp;5% of the total TIME supply&nbsp;</span><span className='opacity-65'>for a FREE airdrop to early registrants and users.</span>
        </div>
      </div>
      <div className='flex 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mb-10 airdrop-free items-center'>
        How to get this<span className='about-text-blue-light time-token-free'>&nbsp;FREE&nbsp;</span>airdrop?
        <div className='italic about-text-blue time-token-simple sm:mt-1'>
          &nbsp;-&nbsp;Simple!
        </div>
      </div>
      <div className='flex flex-col 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 airdrop-free-description'>
        <div className='flex flex-col about-text-blue sm:mb-20'>
          <div className='sm:mb-8 opacity-65'>
            Be one of the first 10,000 app registrations or register within the first month of app launch.
          </div>
          <div>
            <span className='opacity-65'>
              Step 1: </span><Link href='/'><span className='about-text-blue-light cursor-pointer'>Preregister</span></Link><span className='opacity-65'> for the app release via email in our </span><Link href='/'><span className='about-text-blue-light cursor-pointer'>Registration</span></Link><span className='opacity-65'> tab.
            </span>
          </div>
          <div className='opacity-65'>
            Step 2: Wait for our email to let you know the app is live.
          </div>
          <div className='opacity-65'>
            Step 3: Register for FREE when the app goes live.
          </div>
          <div className='opacity-65'>
            Step 4: Do nothing, sit back and relax and see the tokens appear in your in-app wallet.
          </div>
          <div className='opacity-65'>
            Step 5: Welcome to the Time Tribe&trade;, refer friends to start earning even more!
          </div>
        </div>
      </div>
      <Footer height={0} />
    </div>
  )
}

export default AirDrop
