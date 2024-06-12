'use client'

import { Circle, Moon } from "@phosphor-icons/react";

export default function CardapioTapiocas() {
  return (
    <div className={`
        w-full
        cardapiotapiocas
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapiotapiocas">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-8xl pb-4 font-bold`}>Tapiocas</p>
        <Moon size={48} weight="duotone" className={`rotate-12`} />
      </span>

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <div className={`flex flex-col justify-center items-center gap-3`}>
          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Queijo</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Charque</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Coco</span>
          </span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,##</span>
        </div>
      </div>
    </div>
  )
}