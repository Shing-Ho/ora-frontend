import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header';
import Footer from '../components/Footer';

import RegButton from '../components/RegButton';

const Faq: NextPage = () => {
  function onRegisterClick() {}

  return (
    <div className='flex flex-col'>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-10DM1PRJWR"></script>
        <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-10DM1PRJWR');`
            }}
        />
        <title>Ora - FAQ</title>
        <meta name="description" content="Powered by Ora’s utility token TIME, Ora offers users the most lucrative financial rewards for their data while maintaining complete privacy" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header height={0} onRegisterClick={onRegisterClick} />
      <div className='2xl:mx-96 xl:mx-36 lg:mx-16 md:mx-6 mt-24 sm:mt-28'>
        <div className='flex justify-center items-center px-8 sm:px-0'>
          <div className='roadmap-headline'>
            FAQ
          </div>
          <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2' />
        </div>
      </div>
      <div className='flex flex-col 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 faq-description mt-16 sm:mt-10 px-8 sm:px-0'>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            1.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q - How can I earn TIME?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Anyone can earn TIME by downloading the Ora app in the app store or google play store and registering!
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            2.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – Just by registering, can I earn TIME?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Yes! Your registration details allow us to learn who you are, and in return, we pay you in TIME for it.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            3.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – How can I earn more TIME after registration?
            </div>
            <div className='opacity-65 faq-pair'>
              A – If you allow notifications, you will receive a notification anytime Ora needs more information.  These data requests will be simple, fun questions that you can answer in a couple of minutes or likely just seconds!
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            4.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – How is my privacy protected?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Your name and exact location is never associated with any data!  We don’t care about your name or exact location and we ensure it is never associated with your data to protect your privacy.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            5.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – What is staking with Ora?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Staking is Ora’s reward to TIME token holders every time Ora collects data.  In the early years, the rewards are more lucrative to incentivize early users.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            6.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – Can I earn staking rewards on my own data?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Yes!  Ora provides a time delay before staking rewards are paid out.  This allows the user the opportunity to stake their newly earned TIME rewards before the staking rewards get paid out for their data inputs.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            7.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – How can I stake my TIME?
            </div>
            <div className='opacity-65 faq-pair'>
              A – In our app, you will find a tab that shows “staking” and “unstaking,” by clicking the staking to stake your TIME, you will begin earning staking rewards until you unstake your TIME.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            8.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – How do referrals work?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Ora has extremely lucrative referral rewards.  Users can earn an additional 20% TIME with a friends’ referral link.  The friend will also earn an extra 20% TIME by providing you with their referral link.
            </div>
            <div className='opacity-65 faq-pair'>
              Only one individual can refer you at any time.  Make sure to always have a referral link used for your own bonus!
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            9.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – How many people can I refer?
            </div>
            <div className='opacity-65 faq-pair'>
              A – You can refer as many as you want, the more, the better!  If you refer 100 people, you will be earning 20% of all their rewards, for life!
            </div>
            <div className='opacity-65 faq-pair'>
              This referral situation means that every time they earn $1 in TIME, you earn .20 cents.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='flex font-14'>
          <div className='sm:mr-3'>
            10.
          </div>
          <div className='flex flex-col'>
            <div className='about-text-blue'>
              Q – Are my funds safe in the wallet?
            </div>
            <div className='opacity-65 faq-pair'>
              A – Safety is always one of Ora’s top priorities.  Our technology team and third party security audits work hard to ensure the safety for our users’ funds.
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className='flex airdrop-split sm:mb-10' />
      <div className='flex justify-center 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 faq-welcome sm:mb-10 mt-8 sm:mt-0'>
        Ora welcomes further questions and discussion
      </div>
      <div className='flex justify-center 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mb-10 text-white items-center hidden sm:block  '>
        <a href='https://t.me/joinchat/Sd0c9GeJoNdiNzZh' target='_blank' rel='noreferrer'>
          <RegButton width={224} height={36} title={'Join Our Community'} />
        </a>
      </div>
      <div className='flex justify-center 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 mb-12 sm:mb-10 text-white items-center mt-7 sm:mt-0 sm:hidden '>
        <a href='https://t.me/joinchat/Sd0c9GeJoNdiNzZh' target='_blank' rel='noreferrer'>
          <RegButton width={190} height={30} title={'Join Our Community'} />
        </a>
      </div>
      <Footer height={0} />
    </div>
  )
}

export default Faq
