import { Heart, Leaf, Search, ShoppingBag, User2 } from "lucide-react"
import Logo from "./logo"
import Link from "next/link"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"
import { Button } from "./ui/button"

export default function MainMenu() {
  return (
    <div className="layout-p bg-gray-100 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-18">
          <Logo />
          <nav className="text-black">
            <ul className="flex items-center gap-8 text-sm text-[15px] font-medium">
              <li>
                <Link href="#">Shop</Link>
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
        </div>

        <div className="flex items-center gap-2">
          <InputGroup className="max-w-xs">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          <Button variant="ghost" size="icon">
            <User2 />
          </Button>
          <Button variant="ghost" size="icon">
            <Heart />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  )
}
