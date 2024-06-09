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

      <div className={`w-full flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-4xl`}></span>
          <span className={`p-1 bg-rose-700 rounded-lg text-zinc-50 font-bold`}>R$ 0,00</span>
        </span>
      </div>
    </div>
  )
}