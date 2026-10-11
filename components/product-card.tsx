import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Heart, Plus, Star } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  name: string
  bn: string
  info: string
  price: number
  old: number
  off: string
  rating: number
  image: string
  category: string
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group block overflow-hidden rounded-md border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-primary">
      <div className="relative">
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="aspect-square rounded-s-md object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-0 flex w-full items-center justify-between px-4 py-1">
            <span className="rounded bg-primary px-1 py-0.5 text-xs font-semibold text-white uppercase">
              {product.off}
            </span>
            <Button size="icon">
              <Heart />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-primary uppercase">
              {product.category}
            </span>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="flex items-center gap-3 text-muted-foreground">
              <span className="font-mono">{product.bn}</span>{" "}
              <span className="block h-1 w-1 rounded-full bg-primary"></span>{" "}
              <span className="text-sm">500g</span>
            </p>
            <p className="flex items-center gap-1">
              <Star className="size-4 text-amber-500" />{" "}
              <strong>{product.ra}</strong>{" "}
              <span className="text-xs text-muted-foreground">(120)</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <strong>৳{product.price}</strong>
              <span className="text-muted-foreground line-through">
                ৳{product.old}
              </span>
            </div>
            <Button size="icon">
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
