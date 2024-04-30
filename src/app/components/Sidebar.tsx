import { Home, Search, Book } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-900 rounded my-2 mx-2 p-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-4 mt-6">
        <a
          href="#"
          className="flex items-center gap-4 font-semibold hover:text-zinc-200"
        >
          <Home />
          Início
        </a>
        <a
          href="#"
          className="flex items-center gap-4 font-semibold hover:text-zinc-200"
        >
          <Search />
          Buscar
        </a>
        <a
          href="#"
          className="flex items-center gap-4 font-semibold hover:text-zinc-200"
        >
          <Book />
          Sua Biblioteca
        </a>
      </nav>
      <nav className="mt-6 pt-4 border-t border-zinc-800 flex flex-col gap-2">
        <a href="">good shit</a>
        <a href="">popzinho2023</a>
        <a href="">Batidão Tropical Vol. 2</a>
        <a href="">SOS</a>
        <a href="">Nightmare</a>
        <a href="">This Is Why</a>
        <a href="">Random Access Memories</a>
        <a href="">My Beautiful Dark Twisted Fantasy</a>
        <a href="">Desire, I Want To Turn Into You</a>
        <a href="">SUPER</a>
      </nav>
    </aside>
  );
}
