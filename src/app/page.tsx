import {
  Home as HomeIcon,
  Search,
  LibraryBig as Book,
  ChevronLeft,
  ChevronRight,
  Bell,
  CircleUser,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-zinc-400">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-900 rounded my-2 mx-2 p-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-4 mt-6">
            <a href="#" className="flex items-center gap-4 font-semibold">
              <HomeIcon />
              Início
            </a>
            <a href="#" className="flex items-center gap-4 font-semibold">
              <Search />
              Buscar
            </a>
            <a href="#" className="flex items-center gap-4 font-semibold">
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
        <main className="flex-1 w-auto bg-gradient-to-b from-slate-900 to-zinc-900 my-2 mr-2 rounded p-2">
          <div className="flex gap-3 ml-4 items-center">
            <button>
              <ChevronLeft
                size={36}
                className="bg-zinc-950/90 rounded-full font-light p-2"
              />
            </button>
            <button>
              <ChevronRight
                size={36}
                className="bg-zinc-950/90 rounded-full font-light p-2"
              />
            </button>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="O que você quer ouvir?"
              className="bg-zinc-800 rounded-full outline-none w-96 p-3 px-8 font-semibold focus:outline-zinc-300"
            />
            <div className="flex gap-3 ml-auto">
              <Bell
                size={36}
                className="bg-zinc-950/90 rounded-full font-light p-2"
              />
              <CircleUser
                size={36}
                className="bg-zinc-950/90 rounded-full font-light p-2"
              />
            </div>
          </div>
          <h1 className="font-bold text-3xl mt-8 ml-4 text-zinc-200 mb-4">
            Boa tarde!
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4">
            <div className="bg-white/10 rounded flex">
              <Image
                src="/mbdtf.jpg"
                alt="My Beautiful Dark Twisted Fantasy"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">
                My Beautiful Dark Twisted Fantasy
              </p>
            </div>
            <div className="bg-white/10 rounded flex">
              <Image
                src="/batidao-tropical.jpg"
                alt="Batidão Tropical Vol. 2"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">
                Batidão Tropical Vol. 2
              </p>
            </div>
            <div className="bg-white/10 rounded flex">
              <Image
                src="/ram.jpg"
                alt="Random Access Memories"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">
                Random Access Memories
              </p>
            </div>
            <div className="bg-white/10 rounded flex">
              <Image
                src="/desire.jpg"
                alt="Desire I Want To Turn Into You"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">
                Desire I Want to Turn Into You
              </p>
            </div>
            <div className="bg-white/10 rounded flex">
              <Image
                src="/this.jpg"
                alt="This Is Why"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">This Is Why</p>
            </div>
            <div className="bg-white/10 rounded flex">
              <Image
                src="/post.jpg"
                alt="Post"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">Post</p>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-950 h-16 p-6">footer</footer>
    </div>
  );
}
