import Announcement from "@/components/annoucement"
import Banner from "@/components/banner"
import CategoryCard from "@/components/category-card"
import Footer from "@/components/footer"
import MainMenu from "@/components/main-menu"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { categories, products } from "@/lib/data"
import { ArrowRight, Check, Shield, ShoppingBag, Star, Van } from "lucide-react"

export default function Page() {
  return (
    <>
      <Announcement />
      <MainMenu />
      <Banner />
      <div className="layout-p">
        <div className="border-b py-20">
          <div className="flex-inline mb-8 flex-col md:flex md:flex-row md:items-end md:justify-between">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map(([title, bn, photo]) => (
              <CategoryCard key={title} title={title} bn={bn} photo={photo} />
            ))}
          </div>
        </div>
      </div>

      <div className="layout-p py-20">
        <div className="flex-inline mb-8 flex-col md:flex md:flex-row md:items-end md:justify-between">
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>

      <div className="layout-p bg-gray-50 py-20 dark:bg-neutral-900">
        <div className="mb-8">
          <h5 className="mb-2 text-xs text-primary uppercase">
            The Safi Organic promise
          </h5>
          <h2 className="text-3xl font-semibold">Good food. Done right.</h2>
        </div>

        <div className="grid divide-x divide-y border md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2 p-5">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <Shield className="size-5" />
            </span>
            <h3 className="text-xl">100% Authentic </h3>
            <p className="font-mono text-primary">বিশুদ্ধতার নিশ্চয়তা</p>
            <p className="text-xs text-muted-foreground">
              Every product is traceable to a trusted source.
            </p>
          </div>
          <div className="space-y-2 p-5">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <Check className="size-5" />
            </span>
            <h3 className="text-xl">Quality Tested </h3>
            <p className="font-mono text-primary">মান পরীক্ষিত</p>
            <p className="text-xs text-muted-foreground">
              Rigorous checks before it reaches your family.
            </p>
          </div>
          <div className="space-y-2 p-5">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <Van className="size-5" />
            </span>
            <h3 className="text-xl">Fast Delivery</h3>
            <p className="font-mono text-primary">দ্রুত ডেলিভারি</p>
            <p className="text-xs text-muted-foreground">
              Freshly packed and delivered across Bangladesh.
            </p>
          </div>
          <div className="space-y-2 p-5">
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
              <ShoppingBag className="size-5" />
            </span>
            <h3 className="text-xl">Cash on Delivery </h3>
            <p className="font-mono text-primary">ক্যাশ অন ডেলিভারি</p>
            <p className="text-xs text-muted-foreground">
              Pay comfortably when your order arrives.
            </p>
          </div>
        </div>
      </div>

      <div className="layout-p py-20">
        <div className="mb-8">
          <h5 className="mb-2 text-xs text-primary uppercase">
            Real Words, Real Homes
          </h5>
          <h2 className="text-3xl font-semibold">
            Loved by thousands of families
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-4 rounded-xl border p-5">
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-500">
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
              </div>
              <p>
                “The honey tastes completely different from supermarket
                brands—rich, fragrant and genuinely natural. My children love it
                with breakfast.”
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm text-primary">
                NR
              </span>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Nusrat Rahman</h5>
                <span className="text-xs text-muted-foreground">Dhaka</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-xl border p-5">
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-500">
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
              </div>
              <p>
                “Excellent packaging and the Ajwa dates were incredibly fresh.
                Delivery was quick too. Shuddho is now our monthly pantry stop.”
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm text-primary">
                TF
              </span>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Tanvir Faisal</h5>
                <span className="text-xs text-muted-foreground">
                  Chattogram
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-xl border p-5">
            <div className="space-y-4">
              <div className="flex gap-1 text-amber-500">
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
              </div>
              <p>
                “Finally a place where I can order with confidence. The seed mix
                is fresh, clean and perfect for our morning smoothies.”
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm text-primary">
                SA
              </span>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold">Sharmin Akter</h5>
                <span className="text-xs text-muted-foreground">Sylhet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
