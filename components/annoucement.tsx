import { Shield, ShoppingBag, Truck } from "lucide-react"

export default function Announcement() {
  return (
    <div className="layout-p flex h-8 items-center justify-between gap-4 bg-primary py-0 text-[12px] text-white">
      <span className="flex items-center gap-1 font-mono text-sm">
        <Truck size={15} /> ঢাকায় ৳১,৫০০+ অর্ডারে ফ্রি ডেলিভারি
      </span>
      <span className="flex items-center gap-1">
        <Shield size={15} /> 100% Authentic Products
      </span>
      <span className="flex items-center gap-1">
        <ShoppingBag size={15} /> Cash on Delivery
      </span>
    </div>
  )
}
