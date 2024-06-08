import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"#"}>
        <Image
          src={logo}
          width={120}
          height={80}
          alt="Uma Chicara cheia com uma praia ao fundo com coqueiros e a lua refletindo no mar."
          priority
          className="mx-auto py-4"
        />
      </Link>
    </span>
  )
}
