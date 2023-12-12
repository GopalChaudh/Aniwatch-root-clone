import Image from 'next/image'
import NavBar from './components/NavBar'
export default function Home() {
  return (
    <main className='bg-[#262626]  min-h-screen'>

      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1a1d] to-[#3a3a3e] ">
        <section className='w-full flex flex-col lg:flex-row pt-20 px-20 '>

          <div className='w-full lg:w-1/2  flex flex-col justify-between '>
            <NavBar />
            <div className='w-full  h-4/5 flex flex-col justify-evenly'>

              <div className='w-1/3'>
              <Image src='/logo.png' width={250} height={250} />
              </div>
              <div class="flex items-center justify-around">
                <div class="w-5/6 bg-white p-4 rounded-full flex items-center">
                  <input class="outline-none placeholder-gray-500 flex-grow" type="text" placeholder="Search" />
                </div>
                <button class="p-5 bg-[#ffdd95] rounded-full">
                  <img src="search-ico.png" alt="Search Icon" class="w-6 h-6" />
                </button>

              </div>

              <div className="h-1/3 overflow-hidden p-4">
                <span className=" p-1 text-2xl text-white font-bold mb-2">Top Search:</span>
                <span className="text-lg text-gray-300 font-semibold ">
                  One Piece , Jujutsu Kaisen 2nd Season , Overflow (Uncensored) , Attack on Titan , Naruto: Shippuden , Jujutsu Kaisen (TV) , The Eminence in Shadow Season 2 , Tokyo Revengers , The 100 Girlfriends Who Really, Really, Really, Really, Really Love You , Boruto: Naruto Next Generat
                </span>
              </div>

            </div>
          </div>
          <div className='w-full md:w-4/5 lg:w-1/2 p-10 '>
          
            <img src='anw-min.webp' className='' />
          </div>
        </section>
      </div>


      <div className='w-4/5 h-20 ml-[10%] rounded-b-full p-5 bg-[#ffdd95] text-center '>
        <div className='font-semibold text-3xl flex item-center justify-center'>
          <span className=''> View Full Site</span><img className='p-2' src='arrowRight.svg' />
        </div>
      </div>
    </main>
  )
}
