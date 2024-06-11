'use client'

import { Moon, Square } from "@phosphor-icons/react";

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
        <p className={`text-5xl pb-4 font-bold`}>Tapiocas</p>
        <Moon size={48} weight="duotone" className={`rotate-12`} />
      </span>

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <div className={``}>
          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Square size={36} />
            <span className={`text-2xl font-pt-mono`}>Queijo</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Square size={36} />
            <span className={`text-2xl font-pt-mono`}>Calabresa</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Square size={36} />
            <span className={`text-2xl font-pt-mono`}>Carne Moída</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Square size={36} />
            <span className={`text-2xl font-pt-mono`}></span>
          </span>
        </div>
      </div>
    </div>
  )
}