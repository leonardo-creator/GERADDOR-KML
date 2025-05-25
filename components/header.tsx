import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Image src="/brk.jpg" alt="Logo BRK" width={100} height={60} className="h-12 w-auto" />
        </div>

        <h1 className="text-center text-2xl md:text-3xl font-bold text-[#110043]">Visualizador e Gerador de KML</h1>

        <div className="flex items-center">
          <Image src="/setas.jpeg" alt="Setas Indicativas" width={100} height={60} className="h-12 w-auto" />
        </div>
      </div>
    </header>
  )
}
