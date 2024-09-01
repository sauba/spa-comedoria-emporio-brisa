'use client'
import { Circle } from "@phosphor-icons/react"
import Image from "next/image"

export default function CardapioEmpadas() {
  return (
    <div className={`
        w-full
        empadas
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="empadas">
      <span className={`flex-col justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Empadão</p>
        <Image src={`/empadao.png`} width={200} height={200} className={`mx-auto py-8 hover:transition-transform hover:scale-150 hover:cursor-pointer`} alt="" />
      </span>

      <div className={`w-full p-4 flex flex-col justify-center items-center gap-4`}>
        <div className={`flex flex-col justify-center items-center gap-3`}>
          {/* <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Camarão</span>
          </span> */}

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
          </span>

          {/* <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Carne de Sol C/ Queijo</span>
          </span>

          <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
            <Circle size={16} weight="duotone" />
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Calabresa C/ Queijo</span>
          </span> */}
        </div>
        <span className={`w-full flex text-center justify-center xl:justify-center items-center`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 8,00</span>
        </span>
      </div>
    </div>
  )
}