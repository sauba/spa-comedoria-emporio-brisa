'use client'

import Image from "next/image"


export default function AcceptablePaymentMethods() {
  return (
    <div className={`
        w-full
        acceptablepaymentmethods
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="acceptablepaymentmethods">
      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-6xl 2xl:text-8xl pt-14 font-bold`}>Formas de Pagamento</p>
      </span>

      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-4xl 2xl:text-6xl font-bold`}>PIX</p>
      </span>

      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-4xl 2xl:text-6xl font-bold`}>Cartões</p>
      </span>

      <div className={`flex flex-wrap justify-center items-center gap-6 py-8`}>
        <Image src={`/visa.svg`} width={200} height={200} alt="" />
        <Image src={`/hipercard.svg`} width={200} height={200} alt="" />
        <Image src={`/mastercard.svg`} width={200} height={200} alt="" />
        <Image src={`/elocard.svg`} width={200} height={200} alt="" />
        <Image src={`/sodexo.svg`} width={200} height={200} alt="" />
      </div>
    </div>
  )
}