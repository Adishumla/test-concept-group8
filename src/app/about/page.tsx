"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function about() {
  return (
    <main className="relative flex min-h-screen flex-col h-full items-center p-0 bg-white">
      <nav className="flex flex-row w-full space-x-8 h-16 p-2 bg-white shadow-md position-sticky top-0">
        <Link
          href="/"
          className="flex flex-row items-center justify-center space-x-8 text-black"
        >
          <Image
            src="/yrgo.svg"
            alt="Yrgo logo"
            width={190}
            height={48}
            className=""
          />
        </Link>
        <div className="flex flex-row items-center justify-center space-x-8 text-black">
          <Link href="/" className="text-ml text-center text-sm">
            hur antagningen går till
          </Link>
          <Link href="/about" className="text-ml text-center text-sm">
            Om oss
          </Link>
        </div>
      </nav>
      <section className="flex flex-col items-start justify-start w-full pl-12">
        <h1 className="text-6xl font-bold text-black mt-8 text-left">
          Gruppnamn
        </h1>
      </section>
      <section className="flex flex-row flex-wrap items-top w-full h-full p-8 justify-between">
        <div className="flex flex-col items-start space-y-4  p-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src="/malin.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 sm:w-2/3 mt-2 sm:mt-0">
            <p className="text-black">Text for Image 1</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4  p-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src="/malin.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 sm:w-2/3 mt-2 sm:mt-0">
            <p className="text-black">Text for Image 1</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4  p-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src="/malin.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 sm:w-2/3 mt-2 sm:mt-0">
            <p className="text-black">Text for Image 1</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4  p-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src="/malin.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 sm:w-2/3 mt-2 sm:mt-0">
            <p className="text-black">Text for Image 1</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4  p-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src="/malin.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 sm:w-2/3 mt-2 sm:mt-0">
            <p className="text-black">Text for Image 1</p>
          </div>
        </div>
      </section>
    </main>
  );
}
