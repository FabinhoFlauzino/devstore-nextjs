"use client"

import { useCart } from "@/context/cart-context";
import { ShoppingBag } from "lucide-react";

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2 relative">
      <ShoppingBag className="h-6 w-6 text-violet-200" />
      <span className="text-xs font-semibold absolute flex items-center justify-center w-5 h-5 rounded-full bg-violet-500 -top-2 -right-2">{items.length}</span>
    </div>
  )
}