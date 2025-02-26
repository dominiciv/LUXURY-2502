"use client"

const comments = [
  {
    name: "Carlos",
    message: "Cargué y gané 550.000 pesos",
    time: "Hace 12 min",
  },
  {
    name: "Maria",
    message: "La mejor plataforma para apostar!",
    time: "Hace 25 min",
  },
  {
    name: "José",
    message: "Muy buena atención de las cajeras, las amo!",
    time: "Hace 38 min",
  },
  {
    name: "Federico",
    message: "Gané y cobré enseguida, increible!",
    time: "Hace 45 min",
  },
  {
    name: "Sofia",
    message: "Pagan rapido, muy buena red",
    time: "Hace 4 hs",
  },
  {
    name: "Baltazar",
    message: "Tiene muy buenos juegos",
    time: "Hace 5 hs",
  },
  {
    name: "Camila",
    message: "Saqué maxwin y retiré",
    time: "Hace 6 hs",
  },
  {
    name: "Alberto",
    message: "Juego siempre y nunca fallan",
    time: "Hace 6 hs",
  },
  {
    name: "Cecilia",
    message: "La cajera trae suerte jaja",
    time: "Hace 7 hs",
  },
  {
    name: "Dylan",
    message: "Sin vueltas para comprar, la mejor",
    time: "Hace 8 hs",
  },
  {
    name: "Benedicto",
    message: "Gracias al bono saqué maxwin",
    time: "Hace 8 hs",
  },
  {
    name: "Marcelo",
    message: "Comenté y me dieron bono juaa",
    time: "Hace 9 hs",
  },
]

function Comment({ name, message, time }: (typeof comments)[0]) {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2.5 w-[280px] h-[80px] shrink-0 mx-4">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-golden to-amber-300 flex items-center justify-center text-base shrink-0">
        👤
      </div>
      <div className="w-full text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-semibold text-white text-sm">{name}</span>
          <span className="text-[10px] text-gray-400">{time}</span>
        </div>
        <p className="text-xs text-gray-200 mt-0.5 line-clamp-2">{message}</p>
      </div>
    </div>
  )
}

export default function MarqueeComments() {
  return (
    <div className="w-[320px] overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee-slow flex items-center py-2 translate-x-[-50%]">
          {comments.map((comment, i) => (
            <Comment key={`a-${i}`} {...comment} />
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2-slow flex items-center py-2 translate-x-[-50%]">
          {comments.map((comment, i) => (
            <Comment key={`b-${i}`} {...comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

