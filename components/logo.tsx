import Link from "next/link"

export default function Logo() {
  return (
    <Link href={"/"}>
      <img src="/logo2.png" className="w-40" />
    </Link>
  )
}
