import Announcement from "@/components/annoucement"
import Footer from "@/components/footer"
import MainMenu from "@/components/main-menu"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/data"

export default function ShopPage() {
  return (
    <div>
      <Announcement />
      <MainMenu />

      <div>
        <div className="layout-p space-y-3 bg-accent py-15 text-center">
          <h5 className="text-xs text-primary uppercase">The natural pantry</h5>
          <h2 className="text-4xl font-semibold">Shop all products</h2>
          <p className="text-sm text-muted-foreground">
            Everyday nourishment, thoughtfully sourced.
          </p>
        </div>

        <div className="layout-p py-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
