import { Shield, ShoppingBag, Truck } from "lucide-react"

export default function Announcement() {
  return (
    <div className="layout-p flex items-center justify-between gap-4 bg-primary py-2 text-[10px] text-white md:text-[12px]">
      <span className="flex flex-col items-center gap-1 text-center font-mono text-[12px] md:flex-row md:text-sm">
        <Truck size={15} /> ঢাকায় ৳১,৫০০+ অর্ডারে ফ্রি ডেলিভারি
      </span>
      <span className="flex flex-col items-center gap-1 text-center md:flex-row">
        <Shield size={15} /> 100% Authentic Products
      </span>
      <span className="flex flex-col items-center gap-1 text-center md:flex-row">
        <ShoppingBag size={15} /> Cash on Delivery
      </span>
    </div>
  )
}
