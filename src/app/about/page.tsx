"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <Link href="/" className="text-ml text-center text-sm">
            hur antagningen går till
          </Link>
          <Link href="/about" className="text-ml text-center text-sm">
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
        <div className="flex flex-col items-start space-y-4 py-4">
          <div className="w-60 border-2 border-red-500 overflow-hidden">
            <Image
              src="/malin.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2">
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
              src="/johanna.png"
              width={500}
              height={650}
              alt="Image 1"
              className="w-full h-64 object-contain max-w-60 max-h-64"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2">
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
              src="/adam1.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2">
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
              src="/adam2.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2">
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
              src="/erik.png"
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full object-contain max-w-60 max-h-64"
            />
          </div>
          <div className="w-60 bg-slate-100 p-2">
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
      </section>
    </main>
  );
}
