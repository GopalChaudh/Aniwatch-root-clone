'use client'

import Image from "next/image";
import { useState } from "react"


export default function NavBar() {
  const [navState, setNavState] = useState("hidden");
  return (
    <header>

      <nav className={'lg:flex  justify-around items-center font-bold text-xl text-white ' + navState}>
        <h1><a href="/home">Home</a></h1>
        <h1><a href="/movies">Movies</a></h1>
        <h1><a href="/tvSeries">TV Series</a></h1>
        <h1><a href="/mostPopular">Most Popular</a></h1>
        <h1><a href="/topAiring">Top Airing</a></h1>
      </nav>
      <button className="lg:hidden text-white bg-transparent border-none p-0">
        <Image src='/Bars.svg' width={40} height={40} alt="Menu" />
      </button>

    </header>


  )
}
