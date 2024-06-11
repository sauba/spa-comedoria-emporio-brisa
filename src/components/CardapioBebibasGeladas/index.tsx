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
        <span className={`w-full flex text-center justify-between xl:justify-center items-center`}>
          <span className={`text-2xl font-pt-mono`}>Refrigerante Lata</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ 6,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Refrigerante 1 litro</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$10,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Suco Polpa <span className={`text-lg`}>(Consultar Sabores)</span></span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ 6,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Água Mineral</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ 3,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Água Mineral C/ Gás</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ 4,00</span>
        </span>

        <span className={`w-full flex text-center justify-between xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Água Mineral 1,5 litros</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,00</span>
        </span>
      </div>
    </div>
  )
}