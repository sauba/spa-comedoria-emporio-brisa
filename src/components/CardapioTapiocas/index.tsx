'use client'

import { Circle } from "@phosphor-icons/react";
import Image from "next/image";
import imgTapiocaCharque from "../../../public/tapiocaCharque.svg";
import imgTapiocaFrango from "../../../public/tapiocaFrango.svg";
import imgTapiocaQueijo from "../../../public/tapiocaQueijo.svg";
import imgTapiocaCoco from "../../../public/tapiocaqueijocomcoco.svg";

export default function CardapioTapiocas() {
  return (
    <div className={`
        w-full
        tapiocas
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="tapiocas">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Tapiocas</p>
      </span>

      <span className="w-full grid grid-cols-4">
        <Image src={imgTapiocaQueijo} width={124} height={124} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        <Image src={imgTapiocaFrango} width={124} height={124} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        <Image src={imgTapiocaCharque} width={124} height={124} alt="" className={`mx-auto hover:cursor-pointer`} priority />
        <Image src={imgTapiocaCoco} width={124} height={124} alt="" className={`mx-auto hover:cursor-pointer`} priority />
      </span>

      <div className={`grid grid-cols-2 justify-center items-center gap-3`}>
        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-1`}>
          <Circle size={16} weight="duotone" />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>02 Sabores</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 12,00</span>
        </span>

        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-1`}>
          <Circle size={16} weight="duotone" />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Queijo</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 10,00</span>
        </span>

        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-1`}>
          <Circle size={16} weight="duotone" />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 12,00</span>
        </span>

        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-1`}>
          <Circle size={16} weight="duotone" />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Charque</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 12,00</span>
        </span>

        <span className={`w-full flex text-center justify-center xl:justify-center items-center gap-1`}>
          <Circle size={16} weight="duotone" />
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Coco</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 10,00</span>
        </span>
      </div>
    </div>
  )
}