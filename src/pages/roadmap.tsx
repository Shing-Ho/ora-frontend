import type {NextPage} from 'next'
import Head from 'next/head'

import Header from '../components/Header';

import Footer from '../components/Footer';

const Roadmap: NextPage = () => {
    function onRegisterClick() {
    }

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
                <title>Ora - Roadmap</title>
                <meta name="description" content="Powered by Ora’s utility token TIME, Ora offers users the most lucrative financial rewards for their data while maintaining complete privacy"/>
                <link rel="icon" href="/logo.png"/>
            </Head>

            <Header height={0} onRegisterClick={onRegisterClick}/>
            <div className='2xl:mx-96 xl:mx-36 lg:mx-16 md:mx-6 mt-24 sm:mt-28 px-8 sm:px-0'>
                <div className='flex justify-center items-center'>
                    <div className='roadmap-headline'>
                        Road<span className='about-text-blue'>map</span>
                    </div>
                    <div className='sm:ml-5 roadmap-headline-line flex-1 sm:mt-2'/>
                </div>
                <div className='roadmap-headline-description opacity-40'>
                    Ora's timeline and deliverables.
                </div>
            </div>
            <div className='mt-24 sm:mt-10 2xl:mx-auto xl:mx-36 lg:mx-16 md:mx-6 sm:mb-20'>
                <div className='flex justify-center sm:justify-start'>
                    <div className='sm:flex-1 roadmap-title flex justify-end'>
                        <div className='  roadmap-title-border-bottom   sm:pr-16 flex justify-end'>
                            2021 Q3 – 2021 Q4
                        </div>
                    </div>
                    <div className='sm:flex-1'/>
                </div>
                <div className='flex justify-center sm:justify-start'>
                    <div className='flex flex-col sm:flex-1 roadmap-content relative'>
                        <div
                            className='flex justify-center sm:justify-end roadmap-content-border-right sm:pr-16 sm:pt-5 text-right'>
                        <span className='opacity-50'>
                          MVP complete
                        </span>
                        </div>
                        <div
                            className='flex justify-center sm:justify-end roadmap-content-border-right mt-5 sm:mt-0 sm:pr-16 sm:pt-5 text-right'>
                        <span className='opacity-50'>
                          TIME utility token legal opinion completed
                        </span>
                        </div>
                        <div
                            className='flex justify-center sm:justify-end roadmap-content-border-right mt-5 sm:mt-0 sm:pr-16 sm:pt-5 text-right'>
                        <span className='opacity-50'>
                          Pre-registrations for Ora mobile app
                        </span>
                        </div>
                        <div
                            className='flex justify-center sm:justify-end roadmap-content-border-right mt-5 sm:mt-0 sm:pr-16 sm:pt-5 text-right'>
                        <span className='opacity-50'>
                          Marketing for Initial Token Offering ITO begins
                        </span>
                        </div>
                        <div
                            className='flex justify-center sm:justify-end roadmap-content-border-right mt-5 sm:mt-0 sm:pr-16 sm:pt-5 sm:pb-10 text-right'>
                        <span className='opacity-50'>
                          TIME launches via ITO and begins trading
                        </span>
                        </div>
                        <div className="roadmap-headline-line sm:hidden mt-8 sm:mt-0"
                             style={{borderColor: "#4AA3E0"}}></div>
                        <div className='absolute roadmap-content-circle roadmap-content-circle-back'/>
                    </div>
                    <div className='sm:flex-1'/>
                </div>
                <div className='flex justify-center sm:justify-start'>
                    <div className='flex flex-col sm:flex-1 hidden sm:block roadmap-content text-white'>
                        <div className='flex roadmap-content-border-right sm:pr-16'>
                            2022 Q1 – 2022 Q2
                        </div>
                        <div className='relative'>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                TIME integrated with Ora app running in production
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                Airdrop provided to early registrations
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                Users can begin mining TIME with their data
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                Staking launches
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5 sm:pb-10'>
                                Expand accessibility to TIME via exchanges
                            </div>
                            <div className='absolute roadmap-content-circle roadmap-content-circle-back-light'/>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-1 roadmap-content'>
                        <div className='flex-1 roadmap-title flex justify-center sm:justify-start'>
                            <div className='roadmap-title-border-bottom-light  sm:pl-16'>
                                2022 Q1 – 2022 Q2
                            </div>
                        </div>
                        {/*<div className='flex sm:pl-16 sm:pt-5'>*/}
                        {/*<span className='opacity-50'>*/}
                        {/*  The mobile app is launches*/}
                        {/*</span>*/}
                        {/*</div>*/}
                        <div className='flex mt-5 sm:mt-0 sm:pl-16 sm:pt-5'>
                        <span className='opacity-50'>
                          TIME integrated with Ora app running in production
                        </span>
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 mt-5 sm:mt-0'>
                        <span className='opacity-50'>
                          Airdrop provided to early registrations
                        </span>
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 mt-5 sm:mt-0'>
                        <span className='opacity-50'>
                          Users can begin mining TIME with their data
                        </span>
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 mt-5 sm:mt-0'>
                        <span className='opacity-50'>
                          Staking launches
                        </span>
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 sm:pb-10 mt-5 sm:mt-0'>
                        <span className='opacity-50'>
                          Expand accessibility to TIME via exchanges
                        </span>
                        </div>
                        <div className="roadmap-headline-line sm:hidden mt-8 sm:mt-0"
                             style={{borderColor: "#4AA3E0"}}>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center sm:justify-start'>
                    <div className='flex flex-col sm:flex-1 roadmap-content'>
                        <div
                            className='flex-1  roadmap-title roadmap-content-border-right-light flex justify-center  sm:justify-end'>
                            <div className='roadmap-title-border-bottom-light sm:pr-16 flex justify-end '>
                                2022 Q3 – 2022 Q4
                            </div>
                        </div>
                        <div className='relative px-8 sm:px-0'>
                            <div
                                className='flex justify-center sm:justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Data requests ramp-up
                          </span>
                            </div>
                            <div
                                className='flex justify-center sm:justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Customer facing portal completed and generating revenue
                          </span>
                            </div>
                            <div
                                className='flex justify-center sm:justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Referral marketing contests go live
                          </span>
                            </div>
                            <div
                                className='flex justify-center sm:justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Marketing ramps up targeting user growth and data customers
                          </span>
                            </div>
                            <div
                                className='flex justify-center sm:justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Data collection and staking rewards accelerate
                          </span>
                            </div>
                            <div
                                className='flex justify-center sm:justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 sm:pb-10 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Series A equity financing targeted to accelerate  growth
                          </span>
                            </div>
                            <div className="roadmap-headline-line sm:hidden mt-8 sm:mt-0"
                                 style={{borderColor: "#4AA3E0"}}>
                            </div>
                            <div className='absolute roadmap-content-circle roadmap-content-circle-back-light'/>
                        </div>
                    </div>
                    <div className='sm:flex-1'/>
                </div>


                <div className='flex justify-center sm:justify-start'>
                    <div className='flex flex-col hidden sm:block flex-1 roadmap-content text-white sm:h-7'>
                        <div className='flex roadmap-content-border-right-light sm:pr-16 '>
                            2023
                        </div>
                        <div className='relative'>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                Revenue generation accelerates
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                TIME deflation begins, % of revenue will be used to buy and burn TIME
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5'>
                                Full circle tokenomics takes flight
                            </div>
                            <div className='flex roadmap-content-border-right-light sm:pr-16 sm:pt-5 sm:pb-10'>
                                Series B equity financing targeted to grow ecosystem, new in app verticals and adoption
                            </div>
                            <div className='absolute roadmap-content-circle roadmap-content-circle-back-light'/>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-1 roadmap-content px-8 sm:px-0'>
                        <div className='flex-1 roadmap-title flex justify-center sm:justify-start'>
                            <div className='roadmap-title-border-bottom-light roadmap-title-min-width sm:pl-16'>
                                2023
                            </div>
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 opacity-50 justify-center sm:justify-start text-center sm:text-left mt-5 sm:mt-0'>
                            Revenue generation accelerates
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 opacity-50 justify-center sm:justify-start text-center sm:text-left mt-5 sm:mt-0'>
                            TIME deflation begins, % of revenue will be used to buy and burn TIME
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 opacity-50 justify-center sm:justify-start text-center sm:text-left mt-5 sm:mt-0'>
                            Full circle tokenomics takes flight
                        </div>
                        <div className='flex sm:pl-16 sm:pt-5 sm:pb-10 opacity-50 justify-center sm:justify-start text-center sm:text-left mt-5 sm:mt-0'>
                            Series B equity financing targeted to grow ecosystem, new in app verticals and adoption
                        </div>
                        <div className="roadmap-headline-line sm:hidden mt-8 sm:mt-0"
                             style={{borderColor: "#4AA3E0"}}>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-start pb-16 sm:pb-0'>
                    <div className='flex flex-col sm:flex-1 roadmap-content px-8 sm:px-0'>
                        <div className='flex-1 roadmap-title roadmap-content-border-right-light flex justify-center sm:justify-end'>
                            <div
                                className='roadmap-title-border-bottom-light sm:pr-16 roadmap-title-min-width flex justify-center sm:justify-end '>
                                2024
                            </div>
                        </div>
                        <div className='relative'>
                            <div
                                className='flex justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            New methods for users to earn TIME in the Ora ecosystem
                          </span>
                            </div>
                            <div
                                className='flex justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            TIME begins to be mined via attention and not only data
                          </span>
                            </div>
                            <div
                                className='flex justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            New in app experiences evolve to enhance user engagement creating more value for users, consumers and Ora
                          </span>
                            </div>
                            <div
                                className='flex justify-end roadmap-content-border-right-light sm:pr-16 sm:pt-5 sm:pb-5 text-center sm:text-right mt-5 sm:mt-0'>
                          <span className='opacity-50'>
                            Series C equity financing targeting to accelerate growth and adoption
                          </span>
                            </div>
                            <div className='absolute roadmap-content-circle roadmap-content-circle-back-light'/>
                        </div>
                    </div>
                    <div className='sm:flex-1'/>
                </div>
            </div>
            <Footer height={0}/>
        </div>
    )
}

export default Roadmap
