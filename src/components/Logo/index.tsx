import Image from "next/image"
import Link from "next/link"
import logoSauba from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://levezaparaviver.com"}>
        <Image
          src={logoSauba}
          width={120}
          height={80}
          alt="Leveza Para Viver Espaço de Evolução"
          priority
          className="mx-auto py-4 animate-wiggle"
        />
      </Link>
    </span>
  )
}
