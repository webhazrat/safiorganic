import Link from "next/link"

export default function Nav() {
  return (
    <nav className="text-black">
      <ul className="flex flex-col items-center gap-8 text-sm text-[15px] font-medium md:flex-row">
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="#">Categories</Link>
        </li>
        <li>
          <Link href="#">Offers</Link>
        </li>
        <li>
          <Link href="#">Our Story</Link>
        </li>
      </ul>
    </nav>
  )
}
