import Image from "next/image";

import {
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

export default function Footer() {
  return (
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
  );
}
