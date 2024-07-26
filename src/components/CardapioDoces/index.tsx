'use client'

import Image from "next/image"
import imgBoloChocolate from "../../../public/bolochocolate.png"
import imgTortelete from "../../../public/tortelete.png"
export default function CardapioDoces() {
  return (
    <div className={`
        w-full
        doces
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        font-caveat
        text-own-brown-dark
      `} id="doces">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Doces</p>
      </span>

      <div className={`w-full p-4 grid grid-cols-2 justify-center items-center gap-3`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgBoloChocolate} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer hover:py-8`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Fatia de Bolo de Chocolate</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 6,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgTortelete} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer hover:py-8`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Tortelete</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 6,00</span>
          </div>
        </span>
      </div>
    </div>
  )
}