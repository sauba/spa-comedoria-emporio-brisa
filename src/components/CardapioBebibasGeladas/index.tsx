'use client'

import { BeerBottle } from "@phosphor-icons/react";
import Image from "next/image";
import imgAguaMineral from "../../../public/aguaMineral.svg";
import imgAguaMineralComGas from "../../../public/aguaMineralComGas.svg";
import imgRefrigeranteDiversosLitro from "../../../public/refrigeranteDiversosLitro.svg";
import imgRefrigeranteLata from "../../../public/refrigerantelata.svg";
import imgSucoPolpas from "../../../public/sucoPolpas.svg";
// import img from "../../../public/"

export default function CardapioBebidasGeladas() {
  return (
    <div className={`
        w-full
        cardapiobebidasquentes
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="cardapiobebidasquentes">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pb-4 font-bold`}>Bebidas Geladas</p>
        <BeerBottle size={48} weight="duotone" className={`-rotate-6`} />
      </span>

      <div className={`w-full p-4 grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3`}>
        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgRefrigeranteLata} width={180} height={180} alt="" className={`mx-auto`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Refrigerante Lata</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 6,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgRefrigeranteDiversosLitro} width={180} height={180} alt="" className={`mx-auto`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Refrigerante 1 litro</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$10,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgSucoPolpas} width={180} height={180} alt="" className={`mx-auto`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Suco Polpa <span className={`text-lg`}>(Consultar Sabores)</span></span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 6,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={ } width={180} height={180} alt="" className={`mx-auto`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Água Mineral</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 3,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgAguaMineral} width={180} height={180} alt="" className={`mx-auto`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Água Mineral C/ Gás</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ 4,00</span>
          </div>
        </span>

        <span className={`w-full flex-col text-center justify-between xl:justify-center items-center gap-3 rounded-lg border-none outline-none p-4`}>
          <Image src={imgAguaMineralComGas} width={180} height={180} alt="" className={`mx-auto`} priority />
          <div className={`flex flex-col justify-center items-center`}>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-pt-mono`}>Água Mineral 1,5 litros</span>
            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-1 font-pt-mono font-bold rounded-lg bg-own-brown text-zinc-50`}>R$ #,00</span>
          </div>
        </span>
      </div>
    </div>
  )
}