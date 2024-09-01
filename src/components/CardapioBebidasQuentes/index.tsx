'use client'

import Image from "next/image";
import imgCafe from "../../../public/cafe.svg";
import imgCafeCappuccino from "../../../public/cafeCappuccino.svg";
import imgCafeComLeite from "../../../public/cafecomleite.svg";

export default function CardapioBebidasQuentes() {
  return (
    <div className={`
        w-full
        bebidasquentes
        flex
        flex-col
        pb-32
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="bebidasquentes">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Hora do Café</p>
      </span>

      <div className={`w-full p-4 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgCafe} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer hover:pb-8`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Café Coado</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 3,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgCafeComLeite} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer hover:pb-8`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Café com Leite</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 4,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgCafeCappuccino} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer hover:pb-8`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Cappuccino</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 6,00</span>
          </div>
        </span>
      </div>
    </div>
  )
}