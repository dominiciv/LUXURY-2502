import RedirectButton from "./components/RedirectButton"
import BackgroundImage from "./components/BackgroundImage"
import MarqueeComments from "./components/MarqueeComments"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4">
      <BackgroundImage />
      <div className="z-10 text-center space-y-8">
        <RedirectButton />
        <div className="space-y-6">
          <p className="text-white text-xl font-bold text-stroke">🍀🍀🍀BUENA SUERTE🍀🍀🍀</p>
          <MarqueeComments />
        </div>
      </div>
    </main>
  )
}

