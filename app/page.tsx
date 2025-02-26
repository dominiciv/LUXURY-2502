import RedirectButton from "./components/RedirectButton"
import BackgroundImage from "./components/BackgroundImage"
import MarqueeComments from "./components/MarqueeComments"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4">
      <BackgroundImage />
      <div className="z-10 text-center space-y-8">
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-EeDok1LOzbbHdfitQJxEHla0nm4FSU.png"
            alt="Luxury Bets Logo"
            width={400}
            height={400}
            className="drop-shadow-2xl"
          />
        </div>
        <div className="mt-48">
          <RedirectButton />
          <div className="mt-8">
            <MarqueeComments />
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-[#fce8b5] text-xl font-bold tracking-wider animate-glow">RED VERIFICADA</p>
            <p className="text-white text-xl font-bold tracking-wide text-shadow-lg">ATENCIÓN 24/7</p>
            <p className="text-white text-xl font-bold tracking-wide text-shadow-lg">RETIROS ILIMITADOS</p>
          </div>
        </div>
      </div>
    </main>
  )
}

