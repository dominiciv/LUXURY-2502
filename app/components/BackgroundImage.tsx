
export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </div>
  );
}
