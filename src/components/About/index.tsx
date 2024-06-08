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
      <Image src={`/logo.svg`} width={600} height={600} alt="Leveza Para Viver logo" className={`cursor-none mx-auto`} priority />
    </div>
  )
}