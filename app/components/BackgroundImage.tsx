export default function BackgroundImage() {
  return (
    <div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BACKGROUND-HZSTZiv9OWISZQmZQtfPfB2Rmxq7YT.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black", // Fallback color
      }}
    >
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better contrast */}
    </div>
  )
}

