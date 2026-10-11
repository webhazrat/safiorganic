import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  bn: string
  photo: string
}

export default function CategoryCard({ title, bn, photo }: CategoryCardProps) {
  return (
    <Link href="#" className="group block">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={photo}
          alt="Honey"
          width={500}
          height={500}
          className="aspect-video rounded-md object-cover brightness-[0.5] saturate-[0.8] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-[0.4]"
        />

        <div className="absolute bottom-0 left-0 z-10 flex w-full items-end justify-between gap-4 p-4 text-white">
          <div>
            <h3 className="font-semibold md:text-2xl">{title}</h3>
            <p className="font-mono">{bn}</p>
          </div>

          <Button size="icon" className="rounded-full bg-white text-primary">
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Link>
  )
}
