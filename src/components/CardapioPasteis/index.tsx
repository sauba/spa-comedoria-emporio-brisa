'use client'

import { Circle } from "@phosphor-icons/react";
import Image from "next/image";
import imgPastel from "../../../public/pastel.svg";

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
        <p className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-8xl pt-14 font-bold`}>Pastéis</p>
      </span>

      <Image src={imgPastel} width={300} height={300} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-none`} priority />

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-3`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl`}>Escolha 03 Opções de Recheio</span>
        </span>

        <div className={`grid grid-cols-2 justify-center items-center gap-3`}>
          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Queijo</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Calabresa</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Charque</span>
          </span>
        </div>
        <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,##</span>
        </span>
      </div>
    </div>
  )
}