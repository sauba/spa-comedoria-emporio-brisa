import Image from "next/image"

export default function About() {
  return (
    <div className={`
        w-full
        min-h-screen
        about
        flex
        flex-col
        justify-center
        items-center
        text-center
        outline-none
        border-none
        text-own-brown-dark
        font-caveat
      `} id="about">
      <Image src={`/logo.svg`} width={320} height={320} alt="" className={`cursor-none mx-auto hover:transition-transform hover:scale-125`} priority />
      <p className={`text-8xl pb-32`}>Cardápio</p>
    </div>
  )
}