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
        <p className={`text-4xl 2xl:text-8xl font-bold`}>Formas de Pagamento</p>
      </span>

      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-3xl 2xl:text-5xl font-bold py-4`}>Dinheiro</p>
      </span>

      <span className={`flex flex-col justify-center items-center gap-2`}>
        <p className={`text-3xl 2xl:text-5xl font-bold`}>PIX</p>
        <Image src={`/qrcodecomedoria.png`} width={300} height={300} className="mx-auto pb-8" alt="" />
        <p className={`text-xl font-bold font-pt-mono`}>Banco Nubank</p>
        <p className={`text-xl font-bold font-pt-mono`}>Titular: Rebeca Silvestre Freire</p>
      </span>

      <span className={`flex justify-center items-center gap-2`}>
        <p className={`text-4xl 2xl:text-6xl font-bold pt-4`}>Aceitamos Cartões</p>
      </span>

      <div className={`flex flex-wrap justify-center items-center gap-6 mb-20 py-8`}>
        <Image src={`/visa.svg`} width={64} height={64} alt="" />
        <Image src={`/hipercard.svg`} width={64} height={64} alt="" />
        <Image src={`/mastercard.svg`} width={64} height={64} alt="" />
        <Image src={`/elocard.svg`} width={64} height={64} alt="" />
        <Image src={`/sodexo.svg`} width={64} height={64} alt="" />
      </div>
    </div>
  )
}