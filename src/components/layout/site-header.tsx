"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { navigation } from "@/lib/site"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname.startsWith("/admin")) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center">
        <div className="h-24 w-[600px] rounded-full bg-[#F9A907]/10 blur-[120px]" />
      </div>

      <div
        className="
        relative
        mx-auto
        flex
        max-w-7xl
        items-center
        rounded-[34px]
        border
        border-white/[0.06]
        bg-[#08171C]/75
        px-6
        py-4
        backdrop-blur-3xl
        shadow-[0_25px_80px_rgba(0,0,0,.45)]
      "
      >
        <Link href="/" className="flex items-center gap-4">

          <div className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-[#0D242A]
          shadow-lg
          shadow-[#F9A907]/10
          ">
            <Image
              src="/strix.svg"
              width={30}
              height={30}
              alt="Strix"
            />
          </div>

          <div className="hidden sm:block">
            <h2 className="font-semibold tracking-[0.25em] text-[#F9A907]">
              STRIX
            </h2>
            <p className="text-sm text-[#93A29A]">
              Product Engineering Studio
            </p>
          </div>
        </Link>

        <nav className="mx-auto hidden items-center rounded-full bg-[#102228] p-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-5 py-3 text-sm transition-all duration-300",
                  active ? "bg-[#F9A907] text-[#031217] font-semibold shadow-lg shadow-[#F9A907]/20" : "text-[#B2C0BC] hover:bg-[#183038] hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/systems"
            className="rounded-full border border-[#F9A907]/20 bg-[#102228] px-5 py-3 text-sm font-medium text-white transition hover:border-[#F9A907] hover:bg-[#183038]"
          >
            View systems
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#F9A907] px-6 py-3 font-semibold text-[#031217] shadow-lg shadow-[#F9A907]/20 transition hover:scale-[1.02] hover:bg-[#FFC633]"
          >
            Start discovery
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className=" ml-auto
          rounded-full
          bg-[#102228]
          p-3
          text-white
          lg:hidden"

        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="mt-4 lg:hidden">
          <div className=" rounded-[28px]
            border
            border-white/10
            bg-[#08171C]/90
            p-5
            backdrop-blur-3xl">
            <div className="flex flex-col gap-3">

              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl
                  bg-[#102228]
                  px-4
                  py-3
                  text-[#B2C0BC]
                  transition
                  hover:bg-[#183038]
                  hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className=" mt-2
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#F9A907]
                px-5
                py-3
                font-semibold
                text-[#031217]">
                Start a Conversation
                <ArrowUpRight className="size-4" />
              </Link>
              </div>
            </div>
          </div>
      ) : null}
        </header>
      )
}
