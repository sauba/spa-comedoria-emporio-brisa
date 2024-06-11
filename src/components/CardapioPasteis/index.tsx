'use client'

import { Circle, SquareHalfBottom } from "@phosphor-icons/react";

export default function CardapioPasteis() {
  return (
    <div className={`
        w-full
        cardapiopasteis
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapiopasteis">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-5xl pb-4 font-bold`}>Pastéis</p>
        <SquareHalfBottom size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-3`}>
          <span className={`text-2xl font-pt-mono`}>Escolha 03 Opções de Recheio</span>
        </span>

        <div className={`flex justify-center items-center gap-6`}>
          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} />
            <span className={`text-2xl font-pt-mono`}>Queijo</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} />
            <span className={`text-2xl font-pt-mono`}>Calabresa</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} />
            <span className={`text-2xl font-pt-mono`}>Carne Moída</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={8} />
            <span className={`text-2xl font-pt-mono`}></span>
          </span>
        </div>
      </div>
    </div>
  )
}