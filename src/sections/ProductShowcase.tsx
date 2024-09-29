import productImage from '@/assets/product-image.png'
import Image from 'next/image'
import pyramidImage from '@/assets/pyramid.png' 
import tubeImage from '@/assets/tube.png'
import ArrowIcon from "@/assets/arrow-right.svg";

export const ProductShowcase = () => {
    return (
        <section className='bg-gradient-to-b from-[#FFFFFF] to-[#c1cfff] py-24 overflow-x-clip'>
            <div className="container">
                <div className='section-heading'>
                    <div className='flex justify-center'>
                        <div className='tag'>Boost your productivity</div>
                    </div>
                    <h2 className='mt-5 section-title'>A more effective way to track progress</h2>
                    <p className='mt-5 section-description'>
                        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
                    </p>
                </div>
                <div className='relative'>
                    <Image src={productImage} alt='Product image' className='mt-10'/>
                    <Image src={pyramidImage} alt='Pyramid image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'/>
                    <Image src={tubeImage} alt='Tube image' height={248} className='hidden md:block absolute bottom-24 -left-36'/>
                </div>

                <div className='flex flex-col gap-16 mt-16 items-center justify-between w-4/6 mx-auto md:grid md:grid-cols-2 lg:flex lg:flex-row lg:w-11/12 lg:gap-5'>
    
                    <div className="flex flex-col gap-2">

                        <svg width="12%" height="12%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z" fill="currentColor"/>
                        </svg>

                        <h3 className='font-bold'>Integration ecosystem</h3>
                        <p className='text-sm'>Track your progress and motivate your efforts everyday.</p>
                        <button className='text-sm flex items-center gap-1'>
                            <p>Learn more</p>
                            <ArrowIcon className="h-4 w-4 inline-flex justify-center items-center" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">

                        <svg width="12%" height="12%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z" fill="currentColor"/>
                        </svg>


                        <h3 className='font-bold'>Goal setting and tracking</h3>
                        <p className='text-sm'>Set and track goals with manageable task breakdowns.</p>
                        <button className='text-sm flex items-center gap-1'>
                            <p>Learn more</p>
                            <ArrowIcon className="h-4 w-4 inline-flex justify-center items-center" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">

                        <svg width="12%" height="12%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z" fill="currentColor"/>
                        </svg>


                        <h3 className='font-bold'>Secure data encryption</h3>
                        <p className='text-sm'>Ensure your data's safety with top-tier encryption.</p>
                        <button className='text-sm flex items-center gap-1'>
                            <p>Learn more</p>
                            <ArrowIcon className="h-4 w-4 inline-flex justify-center items-center" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">

                        <svg width="12%" height="12%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z" fill="currentColor"/>
                        </svg>


                        <h3 className='font-bold'>Customizable notifications</h3>
                        <p className='text-sm'>Get alerts on tasks and deadlines that matter most.</p>
                        <button className='text-sm flex items-center gap-1'>
                            <p>Learn more</p>
                            <ArrowIcon className="h-4 w-4 inline-flex justify-center items-center" />
                        </button>
                    </div>

                </div>



            </div>

            
        </section>
    )
  }