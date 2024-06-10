'use client'

import { Coffee } from "@phosphor-icons/react";

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
        <p className={`text-5xl pb-4 font-bold`}>Hora do Café</p>
        <Coffee size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Café Coado</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 3,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Café com Leite</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 4,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Cappuccino</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 6,00</span>
        </span>
      </div>
    </div>
  )
}