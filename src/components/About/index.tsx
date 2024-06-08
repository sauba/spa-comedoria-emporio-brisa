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
        text-zinc-100
        font-caveat
      `} id="about">
      <Image src={`/logo.svg`} width={380} height={380} alt="" className={`cursor-none mx-auto hover:transition-transform hover:scale-150`} priority />
    </div>
  )
}