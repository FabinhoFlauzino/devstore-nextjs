import { ReactNode } from "react"
import { Header } from "@/components/header"

type Props = {
  children: ReactNode
}

export default function StoreLayout({ children }: Props) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}