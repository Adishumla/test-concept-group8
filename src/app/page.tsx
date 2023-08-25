"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  const ball1Ref = useRef<HTMLDivElement | null>(null);
  const ball4Ref = useRef<HTMLDivElement | null>(null);

  const [ballPositions, setBallPositions] = useState<{
    ball1?: DOMRect;
    ball4?: DOMRect;
  }>({});

  const calculateBallPositions = () => {
    if (ball1Ref.current && ball4Ref.current) {
      const ball1Rect = ball1Ref.current.getBoundingClientRect();
      const ball4Rect = ball4Ref.current.getBoundingClientRect();

      // Adjust positions based on scroll position
      const adjustedTop1 = ball1Rect.top + window.scrollY;
      const adjustedTop4 = ball4Rect.top + window.scrollY;

      setBallPositions({
        ball1: { ...ball1Rect, top: adjustedTop1 },
        ball4: { ...ball4Rect, top: adjustedTop4 },
      });
    }
  };

  useEffect(() => {
    // Calculate ball positions with a slight delay after initial load...
    const initialTimeout = setTimeout(() => {
      calculateBallPositions();
    }, 100);

    window.addEventListener("resize", calculateBallPositions);

    return () => {
      window.removeEventListener("resize", calculateBallPositions);
      clearTimeout(initialTimeout);
    };
  }, []);

  const isBallPositionsReady = ballPositions.ball1 && ballPositions.ball4;

  return (
    <main className="relative flex min-h-screen flex-col items-center p-0 bg-white">
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
            className="text-ml text-center text-sm hover:text-red-500 underline underline-offset-4 decoration-2"
          >
            Hur antagningen går till
          </Link>
          <Link
            href="/about"
            className="text-ml text-center text-sm hover:text-red-500"
          >
            Om oss
          </Link>
        </div>
      </nav>

      {isBallPositionsReady && (
        <div
          className="absolute left-6 w-1 bg-red-500"
          style={{
            top: ballPositions.ball1!.top,
            height: ballPositions.ball4!.top - ballPositions.ball1!.top,
          }}
        />
      )}

      <section className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full mt-8 flex-wrap">
          <h1 className="md:text-2xl px-20 text-sm sm:text-xl text-center text-black font-light transform -translate-y-[-2rem] sm:-translate-y-[-0rem]">
            Antagningen innehåller tre delar, tryck för att läsa mer
          </h1>
          <div
            id="ball1"
            ref={ball1Ref}
            className="absolute flex items-center left-[26px] transform -translate-x-1/2 w-10 h-10 bg-red-500 rounded-full"
          >
            <p className="text-ml text-center text-black font-thin transform translate-x-12">
              Start
            </p>
          </div>{" "}
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full mt-10">
          <div className="flex flex-row items-center justify-center w-full h-full space-x-8">
            <a href="#workshop">
              <motion.div
                className="flex flex-col items-center justify-center w-36 h-36 sm:w-60 sm:h-60 rounded-full bg-red-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Image
                  src="/workshop.svg"
                  alt="Workshop logo"
                  width={90}
                  height={129}
                  className="pb-2 w-2/5"
                />
                <h2 className="text-ml sm:text-2xl text-center text-white font-bold">
                  Workshop
                </h2>
              </motion.div>
            </a>
          </div>{" "}
          <div className="flex flex-row items-center justify-center w-full h-full space-x-8">
            <a href="#kunskapstest">
              <motion.div
                className="flex flex-col items-center justify-center w-36 h-36 sm:w-60 sm:h-60 rounded-full bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Image
                  src="/kunskap.svg"
                  alt="Kunskap logo"
                  width={110}
                  height={72}
                  className="w-1/2"
                />
                <h2 className="text-ml sm:text-2xl text-center text-black font-bold">
                  Kunskapstest
                </h2>
              </motion.div>
            </a>
            <a href="#intervju">
              <motion.div
                className="flex flex-col items-center justify-center w-36 h-36 sm:w-60 sm:h-60 rounded-full bg-slate-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Image
                  src="/intervju.svg"
                  alt="Intervju logo"
                  width={90}
                  height={72}
                  className="w-1/2"
                />
                <h2 className="text-ml sm:text-2xl text-center text-white font-bold">
                  Intervju
                </h2>
              </motion.div>
            </a>
          </div>
        </div>
      </section>

      <section
        id="kunskapstest"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="flex flex-row items-center justify-between w-full h-full mt-24 px-12 sm:px-20">
          <h1 className="text-3xl sm:text-5xl text-center text-black font-bold">
            Kunskapstest
          </h1>
          <div
            id="ball2"
            /* ref={ball2Ref} */
            className="absolute flex items-center left-[26px] transform -translate-x-1/2 -translate-y-10 w-10 h-10 bg-red-500 rounded-full"
          >
            <p className="text-ml text-center text-black font-thin transform translate-x-12">
              Kunskapstest
            </p>
          </div>
          {/* Ball for the section */}
          <Image
            src="/kunskap-logo.svg"
            alt="Kunskap logo"
            width={60}
            height={72}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 px-12 sm:px-20 w-full h-full">
          {/* On mobile, switch order of the grid items */}
          <div className="flex flex-col items-center justify-center w-full h-full sm:order-2 max-w-4xl">
            <Image
              src="/kunskapstest-img.png"
              alt="Kunskap logo"
              width={400}
              height={72}
              className="w-3/4"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-1 items-center justify-center w-full h-full sm:order-1">
            <div className="flex flex-col w-full h-50 sm:h-auto mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Vad det innebär
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                En digital kunskapsbedömning som genomförs på plats, där både
                &ldquo;lärare och elever&quot; från kursen närvarar under
                provet.&rdquo; Det skriftliga provet består av flera
                flervalsfrågor samt en öppen, scenariobaserad fråga.
              </p>
            </div>

            <div className="flex flex-col w-full h-auto mt-2">
              <h3 className="text-ml text-left text-black font-bold">
                Varför det är viktigt
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Problemlösning utgör en väsentlig kompetens för en
                webbutvecklare. Provet bedömer således kandidatens förmåga att
                lösa problem
              </p>
            </div>
            <div className="flex flex-col w-full h-auto mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Annat bra att veta
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Kandidaten har rätt att använda ett antal digitala hjälpmedel.
                Kandidaten har möjlighet att låna en dator från skolan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="workshop"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="flex flex-row items-center justify-between w-full h-full mt-24 px-12 sm:px-20">
          <h1 className="text-3xl sm:text-5xl text-center text-black font-bold">
            Workshop
          </h1>
          <div
            id="ball3"
            /* ref={ball3Ref} */
            className="absolute flex items-center left-[26px] transform -translate-x-1/2 -translate-y-10 w-10 h-10 bg-red-500 rounded-full"
          >
            <p className="text-ml text-center text-black font-thin transform translate-x-12">
              Workshop
            </p>
          </div>
          {/* Ball for the section */}
          <Image
            src="/workshop-logo.svg"
            alt="Workshop logo"
            width={60}
            height={72}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 px-12 sm:px-20 w-full h-full">
          {/* On mobile, switch order of the grid items */}
          <div className="flex flex-col items-center justify-center w-full h-full sm:order-2 max-w-4xl">
            <Image
              src="/workshop-img.png"
              alt="Workshop logo"
              width={400}
              height={72}
              className="w-4/4"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-1 items-center justify-center w-full h-full sm:order-1">
            <div className="flex flex-col w-full h-50 sm:h-auto mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Vad det innebär
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Vi har en workshop med grupper om tre personer som samarbetar
                med förskolebarn för att skapa en speciell tårta. Alla bidrar
                med kreativa idéer för att göra tårtan unik.
              </p>
            </div>

            <div className="flex flex-col w-full h-auto mt-2">
              <h3 className="text-ml text-left text-black font-bold">
                Varför det är viktigt
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Här betonas samarbete och kreativitet när vi skapar en tårta med
                förskolebarn. Deltagarna utvecklar samarbetsförmåga, stärker
                inlärningsmotivationen och bygger positiva grupprelationer
              </p>
            </div>
            <div className="flex flex-col w-full h-auto mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Annat bra att veta
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Allt material som behövs för att skapa tårtan kommer att finnas
                på plats, så ni kan fokusera på den kreativa processen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="intervju"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="flex flex-row items-center justify-between w-full h-full mt-24 px-12 sm:px-20">
          <h1 className="text-3xl sm:text-5xl text-center text-black font-bold">
            Intervju
          </h1>
          <div
            id="ball4"
            ref={ball4Ref}
            className="absolute flex items-center left-[26px] transform -translate-x-1/2 -translate-y-10 w-10 h-10 bg-red-500 rounded-full"
          >
            <p className="text-ml text-center text-black font-thin transform translate-x-12">
              Intervju
            </p>
          </div>
          {/* Ball for the section */}
          <Image
            src="/intervju-logo.svg"
            alt="Intervju logo"
            width={60}
            height={72}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 px-12 sm:px-20 w-full h-full">
          {/* On mobile, switch order of the grid items */}
          <div className="flex flex-col items-center justify-center w-full h-full sm:order-2 max-w-4xl">
            <Image
              src="/intervju-img.png"
              alt="Intervju logo"
              width={400}
              height={72}
              className="w-3/4"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-1 items-center justify-center w-full h-full sm:order-1">
            <div className="flex flex-col w-full h-50 sm:h-auto mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Vad det innebär
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Genom den distansintervjun får vi möjlighet att kasta ljus över
                deras unika perspektiv och erfarenheter, samtidigt som vi
                fördjupar oss i diskussionen om de tidigare inlärda momenten.
                Denna dynamiska interaktion ger en djupare insikt i ämnet och
                låter oss koppla samman teori med praktik genom deltagarnas
                berättelser och åsikter.
              </p>
            </div>

            <div className="flex flex-col w-full h-auto mt-2">
              <h3 className="text-ml text-left text-black font-bold">
                Varför det är viktigt
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Att diskutera tidigare inlärda moment ger oss chansen att se hur
                teoretiska koncept faktiskt tillämpas i verkliga situationer,
                vilket stärker kopplingen mellan det akademiska och praktiska.
              </p>
            </div>
            <div className="flex flex-col w-full h-auto mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Annat bra att veta
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Att ha möjligheten till uppföljning kan vara användbart för att
                fortsätta diskussionen och utforska mer djuptgående ämnen eller
                frågor som kan ha uppstått.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full my-12 sm:my-24">
        <Link
          href="/about "
          className="flex items-center justify-center w-full"
        >
          <Image
            src="/good-luck.svg"
            alt="Lycka till!"
            width={190}
            height={48}
            className="w-3/4 sm:w-1/2 max-w-4xl"
          />
        </Link>
      </section>
    </main>
  );
}
