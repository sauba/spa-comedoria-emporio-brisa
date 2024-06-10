'use client'

import { BeerBottle } from "@phosphor-icons/react";

export default function CardapioBebidasGeladas() {
  return (
    <div className={`
        w-full
        cardapiobebidasquentes
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapiobebidasquentes">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-5xl pb-4 font-bold`}>Bebidas Geladas</p>
        <BeerBottle size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-between items-center`}>
          <span className={`text-2xl font-pt-mono`}>Refrigerante Lata</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 6,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Refrigerante 1L</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 10,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Suco Polpa <span className={`text-xl`}>(Consultar Sabores)</span></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 6,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Água Mineral</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 3,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Água Mineral C/ Gás</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 4,00</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Água Mineral 1,5 litros</span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ #,00</span>
        </span>
      </div>
    </div>
  )
}