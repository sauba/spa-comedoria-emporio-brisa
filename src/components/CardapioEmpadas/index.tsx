'use client'
import Image from "next/image"

export default function CardapioEmpadas() {
  return (
    <div className={`
        w-full
        cardapioempadas
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapioempadas">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Empadas</p>
        <Image src={`/empada01.png`} width={200} height={200} alt="" />
      </span>

      <div className={`w-full flex flex-col justify-center items-center p-4 gap-4`}>
        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Frango</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-1`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Carne de Sol C/ Queijo</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Calabresa C/ Queijo</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,##</span>
        </span>

        <span className={`w-full flex text-center justify-center items-center gap-3`}>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Camarão</span>
          <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,##</span>
        </span>
      </div>
    </div>
  )
}