"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import malin from "/public/malin.png";
import johanna from "/public/johanna.png";
import adam1 from "/public/adam1.png";
import adam2 from "/public/adam2.png";
import erik from "/public/erik.png";

export default function about() {
  return (
    <main className="relative flex min-h-screen flex-col h-full items-center p-0 bg-white">
      <nav className="flex flex-row w-full space-x-2 sm:space-x-8 h-16 p-2 bg-white shadow-md position-sticky top-0">
        <Link
          href="/"
          className="flex flex-row items-center justify-start space-x-8 text-black w-32 sm:w-auto"
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
          <Link
            href="/"
            className="text-ml text-center text-sm hover:text-red-500"
          >
            Hur antagningen går till
          </Link>
          <Link
            href="/about"
            className="text-ml text-center text-sm hover:text-red-500 underline underline-offset-4 decoration-2"
          >
            Om oss
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-start justify-start w-full pl-12">
        <h1 className="text-5xl sm:text-6xl font-bold text-black mt-3 sm:mt-8 text-center sm:text-left">
          Gruppnamn
        </h1>
      </section>

      <section className="flex flex-row flex-wrap items-top w-full h-full px-3 sm:p-12 justify-center sm:justify-between">
        <div className="flex flex-col items-start space-y-4 py-4 w-60">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src={malin}
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
              placeholder="blur"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2 h-72">
            <h2 className="text-black text-center pb-1 font-bold">
              Malin Sahlberg
            </h2>
            <p className="text-black text-center">
              En driven UX-student med ett öga för användarvänlig design.
              Intresset för att förbättra användarupplevelser går hand i hand
              med hennes kreativa ådra – när hon inte designar, ägnar hon sig åt
              stickning och skapar vackra plagg med garn och nålar.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 py-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src={johanna}
              width={500}
              height={650}
              alt="Image 1"
              className="w-full h-64 object-contain max-w-60 max-h-64"
              placeholder="blur"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2 h-72">
            <h2 className="text-black text-center pb-1 font-bold">
              Johanna Elisson
            </h2>
            <p className="text-black text-center h-full">
              Johanna är mitt uppe i sin resa som UX-student, fokuserad på att
              skapa smidiga och intuitiva användarupplevelser. Utöver sin
              passion för design brinner hon också för att uppleva livekonserter
              och att vinterbada när tillfälle ges.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 py-4 w-60">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src={adam1}
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
              placeholder="blur"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2 h-72">
            <h2 className="text-black text-center pb-1 font-bold">
              Adam Garali
            </h2>
            <p className="text-black text-center">
              En hängiven WU student med skick för användarvänlig design.
              Teknikintresset för att höja användarupplevelsen går hand i hand
              med hans kreativa sida – vid kodningens frånvaro, ägnar han sig åt
              stickning och skapar stilfulla plagg med garn och nålar.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 py-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src={adam2}
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
              placeholder="blur"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2 h-72">
            <h2 className="text-black text-center pb-1 font-bold">
              Adam Hjelm
            </h2>
            <p className="text-black text-center">
              En passionerad speldesignstudent med blick för användarvänlig kod.
              Intresset för att förbättra spelupplevelsen går hand i hand med
              hans kreativa ådra – när han ej kodar, ägnar han tid åt måleri och
              skapar vackra konstverk med pensel och duk.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4 py-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src={erik}
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
              placeholder="blur"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2 h-72">
            <h2 className="text-black text-center pb-1 font-bold">
              Erik Lilja
            </h2>
            <p className="text-black text-center">
              En driven spelprogrammerare med blick för teknisk lösning.
              Intresset för att skapa underhållande spel går hand i hand med
              hans kreativa ådra – när koder vilar, ägnar han tid åt musik och
              skapar harmoniska toner med gitarr och strängar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
