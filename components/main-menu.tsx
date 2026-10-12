import { Heart, Menu, Search, ShoppingBag, User2 } from "lucide-react"
import Logo from "./logo"
import { Button } from "./ui/button"
import Nav from "./nav"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function MainMenu() {
  return (
    <div className="layout-p sticky top-0 z-30 bg-neutral-50/80 py-3 shadow-2xs backdrop-blur-2xl dark:bg-neutral-950/30">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-18">
          <div className="flex w-full items-center justify-between">
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="p-10">
                  <Nav />
                </div>
              </SheetContent>
            </Sheet>
            <Logo />
          </div>
          <div className="hidden shrink-0 md:block">
            <Nav />
          </div>
        </div>

        <div className="hidden items-center justify-center gap-2 md:flex">
          <Button variant="ghost" size="icon">
            <Search />
          </Button>
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
