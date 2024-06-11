'use client'

import { Palette } from "@phosphor-icons/react";

export default function CardapioEmpadas() {
  return (
    <div className={`
        w-full
        cardapioempadas
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapioempadas">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-5xl pb-4 font-bold`}>Empadas</p>
        <Palette size={48} weight="duotone" className={`rotate-12`} />
      </span>

      <div className={`w-full flex flex-col justify-center items-center p-4 gap-4`}>
        <span className={`w-full flex text-center justify-between lg:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Frango</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-between lg:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Carne de Sol com Queijo</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-between lg:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Calabresa com Queijo</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-between lg:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Camarão</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>
      </div>
    </div>
  )
}