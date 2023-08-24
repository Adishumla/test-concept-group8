"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 bg-white">
      {/* nav at the top follow  */}
      <nav className="flex flex-row w-full space-x-8 h-16 p-2 bg-white shadow-md position-sticky top-0">
        <Image
          src="/yrgo.svg"
          alt="Yrgo logo"
          width={251}
          height={72}
          className=""
        />
        <div className="flex flex-row items-center justify-center space-x-8 text-black">
          <a href="#" className="text-ml text-center text-sm">
            hur antagningen går till
          </a>
          <a href="#" className="text-ml text-center text-sm">
            Om oss
          </a>
        </div>
      </nav>

      {/* main content */}
      <section className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full mt-8">
          <h1 className="text-2xl text-center text-black font-thin">
            Antagningen innehåller tre delar, tryck för att läsa mer
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full mt-10">
          <div className="flex flex-row items-center justify-center w-full h-full space-x-8">
            <a href="#kunskapstest">
              <motion.div
                className="flex flex-col items-center justify-center w-60 h-60 rounded-full bg-red-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Image
                  src="/workshop.svg"
                  alt="Workshop logo"
                  width={90}
                  height={129}
                  className="pb-2"
                />
                <h2 className="text-2xl text-center text-white font-bold">
                  Workshop
                </h2>
              </motion.div>
            </a>
          </div>{" "}
          <div className="flex flex-row items-center justify-center w-full h-full space-x-8">
            <a href="#workshop">
              <motion.div
                className="flex flex-col items-center justify-center w-60 h-60 rounded-full bg-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Image
                  src="/kunskap.svg"
                  alt="Kunskap logo"
                  width={110}
                  height={72}
                />
                <h2 className="text-2xl text-center text-black font-bold">
                  Kunskapstest
                </h2>
              </motion.div>
            </a>
            <a href="#intervju">
              <motion.div
                className="flex flex-col items-center justify-center w-60 h-60 rounded-full bg-slate-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                <Image
                  src="/intervju.svg"
                  alt="Intervju logo"
                  width={90}
                  height={72}
                />
                <h2 className="text-2xl text-center text-white font-bold">
                  Intervju
                </h2>
              </motion.div>
            </a>
          </div>
        </div>
      </section>

      {/* Kunskapstest */}
      <section
        id="kunskapstest"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="flex flex-row items-center justify-between w-full h-full mt-24 px-20">
          <h1 className="text-5xl text-center text-black font-bold">
            Kunskapstest
          </h1>
          <Image
            src="/kunskap-logo.svg"
            alt="Kunskap logo"
            width={60}
            height={72}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 px-20 w-full h-full">
          <div className="grid grid-cols-1 gap-y-1 items-center justify-center w-full h-full ">
            <div className="flex flex-col w-full h-40 mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                vad det innebär
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                En digital kunskapsbedömning som genomförs på plats, där både
                &ldquo;lärare och elever&quot; från kursen närvarar under
                provet.&rdquo; Det skriftliga provet består av flera
                flervalsfrågor samt en öppen, scenariobaserad fråga.
              </p>
            </div>

            <div className="flex flex-col w-full h-40 mt-2">
              <h3 className="text-ml text-left text-black font-bold">
                Varför det är viktigt
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Problemlösning utgör en väsentlig kompetens för en
                webbutvecklare. Provet bedömer således kandidatens förmåga att
                lösa problem
              </p>
            </div>
            <div className="flex flex-col w-full h-40 mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Annat bra att veta
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Kandidaten har rätt att använda ett antal digitala hjälpmedel.
                Kandidaten har möjlighet att låna en dator från skolan.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full ">
            <Image
              src="/kunskapstest-img.png"
              alt="Kunskap logo"
              width={400}
              height={72}
            />
          </div>
        </div>
      </section>

      {/* workshop */}
      <section
        id="workshop"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="flex flex-row items-center justify-between w-full h-full mt-24 px-20">
          <h1 className="text-5xl text-center text-black font-bold">
            Workshop
          </h1>
          <Image
            src="/workshop-logo.svg"
            alt="Kunskap logo"
            width={60}
            height={72}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 px-20 w-full h-full">
          <div className="grid grid-cols-1 gap-y-1 items-center justify-center w-full h-full ">
            <div className="flex flex-col w-full h-40 mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                vad det innebär
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                En digital kunskapsbedömning som genomförs på plats, där både
                &ldquo;lärare och elever&quot; från kursen närvarar under
                provet.&rdquo; Det skriftliga provet består av flera
                flervalsfrågor samt en öppen, scenariobaserad fråga.
              </p>
            </div>

            <div className="flex flex-col w-full h-40 mt-2">
              <h3 className="text-ml text-left text-black font-bold">
                Varför det är viktigt
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Problemlösning utgör en väsentlig kompetens för en
                webbutvecklare. Provet bedömer således kandidatens förmåga att
                lösa problem
              </p>
            </div>
            <div className="flex flex-col w-full h-40 mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Annat bra att veta
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Kandidaten har rätt att använda ett antal digitala hjälpmedel.
                Kandidaten har möjlighet att låna en dator från skolan.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full ">
            <Image
              src="/kunskapstest-img.png"
              alt="Kunskap logo"
              width={400}
              height={72}
            />
          </div>
        </div>
      </section>
      {/* Intervju */}

      <section
        id="intervju"
        className="flex flex-col items-center justify-center w-full h-full"
      >
        <div className="flex flex-row items-center justify-between w-full h-full mt-24 px-20">
          <h1 className="text-5xl text-center text-black font-bold">
            Intervju
          </h1>
          <Image
            src="/intervju-logo.svg"
            alt="Kunskap logo"
            width={60}
            height={72}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 px-20 w-full h-full">
          <div className="grid grid-cols-1 gap-y-1 items-center justify-center w-full h-full ">
            <div className="flex flex-col w-full h-40 mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                vad det innebär
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                En digital kunskapsbedömning som genomförs på plats, där både
                &ldquo;lärare och elever&quot; från kursen närvarar under
                provet.&rdquo; Det skriftliga provet består av flera
                flervalsfrågor samt en öppen, scenariobaserad fråga.
              </p>
            </div>

            <div className="flex flex-col w-full h-40 mt-2">
              <h3 className="text-ml text-left text-black font-bold">
                Varför det är viktigt
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Problemlösning utgör en väsentlig kompetens för en
                webbutvecklare. Provet bedömer således kandidatens förmåga att
                lösa problem
              </p>
            </div>
            <div className="flex flex-col w-full h-40 mt-2 ">
              <h3 className="text-ml text-left text-black font-bold">
                Annat bra att veta
              </h3>
              <p className="text-ml text-left text-black font-thin mt-3">
                Kandidaten har rätt att använda ett antal digitala hjälpmedel.
                Kandidaten har möjlighet att låna en dator från skolan.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full ">
            <Image
              src="/kunskapstest-img.png"
              alt="Kunskap logo"
              width={400}
              height={72}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
