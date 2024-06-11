'use client'

import { CookingPot } from "@phosphor-icons/react";

export default function CardapioCuscuz() {
  return (
    <div className={`
        w-full
        cardapiocuscuz
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapiocuscuz">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-5xl pb-4 font-bold`}>Cuscuz</p>
        <CookingPot size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full flex flex-col justify-center items-center p-4 gap-4`}>
        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Cuscuz Recheado com Frango</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Cuscuz Recheado com Charque</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-between items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Cuscuz Recheado com Calabresa</span>
          <span className={`text-2xl p-1 font-pt-mono font-bold rounded-lg bg-rose-700 text-zinc-50`}>R$ #,##</span>
        </span>
      </div>
    </div>
  )
}