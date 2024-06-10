'use client'

import { Hamburger } from "@phosphor-icons/react";

export default function CardapioLanches() {
  return (
    <div className={`
        w-full
        cardapiosalgados
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapiosalgados">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-5xl pb-4 font-bold`}>Lanches</p>
        <Hamburger size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Coxinha de Frango</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 6,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Misto</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 6,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Pão com Ovo</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 5,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Sopa</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 6,00</span>
        </span>
      </div>
    </div>
  )
}