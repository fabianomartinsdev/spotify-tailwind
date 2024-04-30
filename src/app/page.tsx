import {
  Home as HomeIcon,
  Search,
  LibraryBig as Book,
  ChevronLeft,
  ChevronRight,
  Bell,
  CircleUser,
  Play,
  LucideRepeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Mic2,
  MonitorSmartphone,
  Maximize2,
  Tv2,
  List,
  Volume1,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col text-zinc-400">
      <div className="flex flex-1">
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
              <HomeIcon />
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
            Boa tarde
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-4">
            <a className="group bg-white/10 rounded flex items-center gap-2 hover:bg-white/20 transition-colors">
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
              <button className="ml-auto p-2 mr-4 bg-green-500 rounded-full text-zinc-950 invisible group-hover:visible">
                <Play size={16} />
              </button>
            </a>
            <a className="group bg-white/10 rounded flex items-center gap-2 hover:bg-white/20 transition-colors">
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
              <button className="ml-auto p-2 mr-4 bg-green-500 rounded-full text-zinc-950 invisible group-hover:visible">
                <Play size={16} />
              </button>
            </a>
            <a className="group bg-white/10 rounded flex items-center gap-2 hover:bg-white/20 transition-colors">
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
              <button className="ml-auto p-2 mr-4 bg-green-500 rounded-full text-zinc-950 invisible group-hover:visible">
                <Play size={16} />
              </button>
            </a>
            <a className="group bg-white/10 rounded flex items-center gap-2 hover:bg-white/20 transition-colors">
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
              <button className="ml-auto p-2 mr-4 bg-green-500 rounded-full text-zinc-950 invisible group-hover:visible">
                <Play size={16} />
              </button>
            </a>
            <a className="group bg-white/10 rounded flex items-center gap-2 hover:bg-white/20 transition-colors">
              <Image
                src="/this.jpg"
                alt="This Is Why"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">This Is Why</p>
              <button className="p-2 mr-4 ml-auto bg-green-500 rounded-full text-zinc-950 invisible group-hover:visible">
                <Play size={16} />
              </button>
            </a>
            <a className="group bg-white/10 rounded flex items-center gap-2 hover:bg-white/20 transition-colors">
              <Image
                src="/post.jpg"
                alt="Post"
                width={80}
                height={80}
                className="rounded-l"
              />
              <p className="p-4 text-zinc-200 font-semibold">Post</p>
              <button className="p-2 ml-auto mr-4 bg-green-500 rounded-full text-zinc-950 invisible group-hover:visible">
                <Play size={16} />
              </button>
            </a>
          </div>
          <h2 className="font-bold text-2xl mt-8 ml-4 text-zinc-200 mb-4">
            Suas músicas estão com saudade
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <div className="bg-zinc-900 rounded p-3 hover:bg-zinc-800">
              <Image
                src="/guts.jpg"
                alt="Guts"
                width={500}
                height={500}
                className="w-full rounded"
              />
              <div className="flex flex-col mt-2">
                <strong className="font-semibold">GUTS</strong>
                <span className="text-sm">Olivia Rodrigo</span>
              </div>
            </div>
            <div className="bg-zinc-900 rounded p-3 hover:bg-zinc-800">
              <Image
                src="/starboy.jpg"
                alt="Starboy"
                width={500}
                height={500}
                className="w-full rounded"
              />
              <div className="flex flex-col mt-2">
                <strong className="font-semibold">Starboy</strong>
                <span className="text-sm">The Weeknd</span>
              </div>
            </div>
            <div className="bg-zinc-900 rounded p-3 hover:bg-zinc-800">
              <Image
                src="/kali.jpg"
                alt="Sin Miedo (del Amor y Otros Demonios)"
                width={500}
                height={500}
                className="w-full rounded"
              />
              <div className="flex flex-col mt-2">
                <strong className="font-semibold">
                  Sin Miedo (del Amor y Otros Demonios)
                </strong>
                <span className="text-sm">Kali Uchis</span>
              </div>
            </div>
            <div className="bg-zinc-900 rounded p-3 hover:bg-zinc-800">
              <Image
                src="/plastic.jpg"
                alt="Plastic Beach"
                width={500}
                height={500}
                className="w-full rounded"
              />
              <div className="flex flex-col mt-2">
                <strong className="font-semibold">Plastic Beach</strong>
                <span className="text-sm">Gorillaz</span>
              </div>
            </div>
            <div className="bg-zinc-900 rounded p-3 hover:bg-zinc-800">
              <Image
                src="/cura.jpg"
                alt="Cura"
                width={500}
                height={500}
                className="w-full rounded"
              />
              <div className="flex flex-col mt-2">
                <strong className="font-semibold">Cura</strong>
                <span className="text-sm">Viratempo</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-950 p-4 flex items-center justify-between text-zinc-200">
        <div className="flex">
          <Image
            src="/friends.jpg"
            alt="I love my girl, she's my boy"
            width={60}
            height={60}
            className="rounded"
          />
          <div className="flex flex-col ml-4">
            <strong className="font-semibold">
              I love my girl, she&apos;s my boy
            </strong>
            <span className="text-sm">BETWEEN FRIENDS</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6 text-zinc-400">
            <button className="hover:text-white">
              <Shuffle />
            </button>
            <button className="hover:text-white">
              <SkipBack />
            </button>
            <button className="hover:bg-white w-10 h-10 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-950">
              <Play fill="black" />
            </button>
            <button className="hover:text-white">
              <SkipForward />
            </button>
            <button className="hover:text-white">
              <LucideRepeat />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <span className="bg-zinc-600 rounded h-1 w-144">
              <div className="bg-zinc-200 w-24 h-1 rounded hover:bg-green-400"></div>
            </span>
            <span className="text-xs text-zinc-400">3:33</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-zinc-400">
          <button className="hover:text-zinc-200">
            <Mic2 size={18} />
          </button>
          <button className="hover:text-zinc-200">
            <List size={18} />
          </button>
          <button className="hover:text-zinc-200">
            <MonitorSmartphone size={18} />
          </button>
          <div className="flex items-center gap-2">
            <button className="hover:text-zinc-200">
              <Volume1 size={18} />
            </button>
            <div className="w-20 bg-zinc-500 h-1 rounded-full">
              <div className="w-16 bg-zinc-200 h-1 rounded-full"></div>
            </div>
          </div>
          <button className="hover:text-zinc-200">
            <Tv2 size={18} />
          </button>
          <button className="hover:text-zinc-200">
            <Maximize2 size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}
