export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/qcJFkx5NDWM?autoplay=1&mute=1&loop=1&playlist=YOUTUBE_VIDEO_ID&controls=0&showinfo=0&modestbranding=1"
        title="Video de fondo"
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
