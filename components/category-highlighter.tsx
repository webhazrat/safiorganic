import Link from "next/link"

export default function CategoryHighlighter() {
  return (
    <div className="bg-primary py-4">
      <div className="layout-p flex items-center justify-center gap-15 text-white italic">
        <Link href="#">Raw Honey</Link>
        <span className="block h-1 w-1 rounded-full bg-white"></span>
        <Link href="#">Premium Dates</Link>
        <span className="block h-1 w-1 rounded-full bg-white"></span>
        <Link href="#">Wholesome Nuts</Link>
        <span className="block h-1 w-1 rounded-full bg-white"></span>
        <Link href="#">Natural Jaggery</Link>
        <span className="block h-1 w-1 rounded-full bg-white"></span>
        <Link href="#">Premium Mango</Link>
      </div>
    </div>
  )
}
