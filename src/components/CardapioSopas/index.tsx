'use client'
import Image from "next/image"

export default function CardapioSopas() {
  return (
    <div className={`
        w-full
        sopas
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="sopas">
      <span className={`flex-col justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Sopas</p>
        <Image src={`/sopas.svg`} width={200} height={200} className={`mx-auto py-8 hover:transition-transform hover:scale-125 hover:cursor-pointer`} alt="" />
      </span>

      <span className={`w-full flex flex-col text-center justify-center xl:justify-center items-center gap-3`}>
        <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Sopa de Carne</span>
        <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 8,00</span>
      </span>
    </div>
  )
}