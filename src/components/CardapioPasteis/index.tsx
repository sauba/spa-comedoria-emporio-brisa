'use client'

import { Circle } from "@phosphor-icons/react";
import Image from "next/image";

export default function CardapioPasteis() {
  return (
    <div className={`
        w-full
        pasteis
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="pasteis">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Pastéis</p>
      </span>

      <Image src={`/pastel.svg`} width={480} height={480} alt="" className={`mx-auto hover:cursor-none`} priority />

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-3`}>
          <span className={`text-3xl 2xl:text-6xl`}>Escolha Até 03 Opções de Recheio</span>
        </span>

        <div className={`grid grid-cols-2 justify-center items-center gap-3`}>
          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Calabresa</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Charque</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Queijo Coalho</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Queijo Mussarela</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Presunto</span>
          </span>
        </div>

        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-3`}>
          <span className={`text-3xl 2xl:text-6xl`}>Acompanhamentos</span>
        </span>

        <div className={`grid grid-cols-2 justify-center items-center gap-3`}>
          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Azeitona</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Cebola</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Tomate</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Repolho</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Ervilha</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Milho</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Ovo de Codorna</span>
          </span>
        </div>

        <span className={`w-full flex flex-col text-center justify-center xl:justify-center items-center gap-3`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 10,00</span>
        </span>
      </div>
    </div>
  )
}