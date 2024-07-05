'use client'

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

      <div className={`w-full p-4 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgTapiocaQueijo} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Queijo</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgTapiocaFrango} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgTapiocaCharque} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Charque</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgTapiocaCoco} width={180} height={180} alt="" className={`mx-auto hover:transition-transform hover:scale-150 hover:cursor-pointer`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Coco</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,00</span>
          </div>
        </span>
      </div>
    </div>
  )
}