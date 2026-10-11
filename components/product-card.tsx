import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Heart, Plus } from "lucide-react"
import Link from "next/link"

export default function ProductCard() {
  return (
    <div className="group block">
      <div className="relative overflow-hidden rounded-md">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?auto=format&fit=crop&w=1200&q=85"
            alt="Honey"
            width={500}
            height={500}
            className="aspect-video rounded-md object-cover brightness-[0.5] saturate-[0.8] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-[0.4]"
          />
          <div>
            <span>14% off</span>
            <Button size="icon">
              <Heart />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 flex w-full items-end justify-between gap-4 p-4 text-white">
          <div>
            <h5 className="text-xs font-semibold uppercase">Honey</h5>
            <h2>Sundarbans Forest Honey</h2>
            <p className="font-mono">সুন্দরবনের চাকের মধু</p>
          </div>

          <Button size="icon" className="rounded-full">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  )
}
