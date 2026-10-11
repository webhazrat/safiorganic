import Announcement from "@/components/annoucement"
import Banner from "@/components/banner"
import CategoryCard from "@/components/category-card"
import CategoryHighlighter from "@/components/category-highlighter"
import MainMenu from "@/components/main-menu"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <>
      <Announcement />
      <MainMenu />
      <Banner />
      <CategoryHighlighter />

      <div className="layout-p">
        <div className="border-b py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h5 className="mb-2 text-xs text-primary uppercase">
                Explore The Pantry
              </h5>
              <h2 className="text-3xl font-semibold">Shop by category</h2>
            </div>
            <Button variant="link">
              View all categories <ArrowRight />
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {categories.map(([title, bn, photo]) => (
              <CategoryCard key={title} title={title} bn={bn} photo={photo} />
            ))}
          </div>
        </div>
      </div>

      <div className="layout-p pt-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h5 className="mb-2 text-xs text-primary uppercase">
              Curated for you
            </h5>
            <h2 className="text-3xl font-semibold">Everyday favourites</h2>
          </div>
          <Button variant="link">
            Shop all products <ArrowRight />
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard />
        </div>
      </div>

      <div className="text-center">
        <div>
          <h1 className="text-lg font-medium">Safi Organic Bangladesh!</h1>
          <h1 className="font-medium">Development on going!</h1>
          <p>
            Stay connect with{" "}
            <a
              href="https://www.facebook.com/safiorganicbd"
              className="text-blue-500"
            >
              Facebook
            </a>
          </p>
          <br />
          <p>Address: Godagari, Rajshahi , Rajshahi, Bangladesh, 6290</p>
          <p>
            Phone: <a href="tel:+8801760749659">+880 1760-749659</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:mdsaif01918424485@gmail.com">
              mdsaif01918424485@gmail.com
            </a>
          </p>
        </div>
        <br />
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </>
  )
}
