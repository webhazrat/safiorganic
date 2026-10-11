import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Heart, Plus, Star } from "lucide-react"
import Link from "next/link"

interface Product {
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
interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, bn, info, price, old, off, rating, image, category } = product
  return (
    <div className="group block overflow-hidden rounded-md border transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-primary">
      <div className="relative">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="aspect-square rounded-s-md object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-0 flex w-full items-center justify-between px-4 py-1">
            <span className="rounded bg-primary px-1 py-0.5 text-xs font-semibold text-white uppercase">
              {off}
            </span>
            <Button size="icon">
              <Heart />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-1">
            <span className="text-[10px] font-semibold text-primary uppercase">
              {category}
            </span>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="flex items-center gap-3 text-muted-foreground">
              <span className="font-mono">{bn}</span>{" "}
              <span className="block h-1 w-1 rounded-full bg-primary"></span>{" "}
              <span className="text-sm">500g</span>
            </p>
            <p className="flex items-center gap-1">
              <Star className="size-4 text-amber-500" />{" "}
              <strong>{rating}</strong>{" "}
              <span className="text-xs text-muted-foreground">(120)</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <strong>৳{price}</strong>
              <span className="text-muted-foreground line-through">৳{old}</span>
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
