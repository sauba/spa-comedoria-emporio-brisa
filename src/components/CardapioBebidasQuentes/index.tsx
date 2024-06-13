'use client'

import { Coffee } from "@phosphor-icons/react";
import Image from "next/image";
import imgCafeCappuccino from "../../../public/cafeCappuccino.svg";
import imgCafe from "../../../public/cafeCoado.svg";
import imgCafeComLeite from "../../../public/cafeComLeite.svg";

export default function CardapioBebidasQuentes() {
  return (
    <div className={`
        w-full
        cardapiobebidasquentes
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
      `} id="cardapiobebidasquentes">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-8xl pb-4 font-bold`}>Hora do Café</p>
        <Coffee size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full p-4 grid grid-cols-2 lg:grid-cols-3 justify-center items-center`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3`}>
          <Image src={imgCafe} width={180} height={180} alt="" className={`mx-auto`} priority />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Café Coado</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 3,00</span>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3`}>
          <Image src={imgCafeComLeite} width={180} height={180} alt="" className={`mx-auto`} priority />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Café com Leite</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 4,00</span>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3`}>
          <Image src={imgCafeCappuccino} width={180} height={180} alt="" className={`mx-auto`} priority />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Cappuccino</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 6,00</span>
        </span>
      </div>
    </div>
  )
}