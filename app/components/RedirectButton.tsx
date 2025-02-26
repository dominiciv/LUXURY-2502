"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RedirectButton() {
  const targetUrl =
    "https://api.whatsapp.com/send/?phone=+5491155062897&text=Hola!+Mi+nombre+es+______+Vi+este+anuncio%2C+quiero+un+usuario+por+favor!+gracias.&type=phone_number&app_absent=0"

  return (
    <Button
      onClick={() => (window.location.href = targetUrl)}
      className="relative bg-black/40 backdrop-blur-sm font-bold transition-all duration-500 ease-in-out transform hover:scale-105 border-2 border-[#fce8b5] group h-[60px] w-[320px] animate-pulse-fade"
    >
      <span className="relative z-10 text-xl text-white transition-colors duration-300 flex items-center justify-center gap-3 w-full">
        JUGAR AHORA
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp.511x512-UFgewbT2m2KaQJ0vbFGSFM3iDMss1D.png"
          alt="WhatsApp"
          width={28}
          height={28}
          className="inline-block"
        />
      </span>
      <span className="absolute inset-0 rounded-lg transition-opacity duration-300"></span>
      <span className="absolute -inset-[1px] bg-[#fce8b5] rounded-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></span>
    </Button>
  )
}

