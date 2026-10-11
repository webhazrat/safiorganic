import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href={"/"} className="shrink-0">
      <Image src="/logo2.png" width={140} height={30} alt="safiorganic" />
    </Link>
  )
}
