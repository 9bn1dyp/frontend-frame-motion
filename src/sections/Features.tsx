import Image from 'next/image'
import cubeHelix from '@/assets/cube-helix.png'
import cube from '@/assets/cube.png'

export const Features = () => {
  return (
    <section className="bg-[#FFFFFF] py-24">

        <div className="container">

            <div className='max-w-[540px] mx-auto'>
                <div className='flex justify-center'>
                    <div className='tag'>Everything you need</div>
                </div>
                <h2 className='mt-5 text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Streamlined for easy management</h2>
                <p className='mt-5 text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]'>
                Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.
                </p>
            </div>

            <div className='lg:flex lg:flex-row'>

                <div className='mt-14 flex flex-col justify-center items-center'>
                    <Image height={275} width={275} src={cubeHelix} alt='Cube helix'/>
                    <h2 className='text-center text-2xl font-bold tracking-tighter'>Integration ecosytem</h2>
                    <p className='mt-5 text-center tracking-tighter md:w-1/2'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                </div>

                <div className='mt-14 flex flex-col justify-center items-center'>
                    <Image height={275} width={275} src={cube} alt='Cube'/>
                    <h2 className='text-center text-2xl font-bold tracking-tighter'>Goal setting and tracking</h2>
                    <p className='mt-5 text-center tracking-tighter md:w-1/2'>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
                </div>

            </div>

        </div>

    </section>
  )
}