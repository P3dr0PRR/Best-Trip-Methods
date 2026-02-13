import { Plane } from "lucide-react";
import { Target } from "lucide-react";
import { Clock4 } from "lucide-react";
import { Earth } from "lucide-react";

export function Startpage({ Starquiz }) {
  return (
    <main className="min-h-[100dvh] bg-zinc-800 flex items-center justify-center cursor-default px-4 py-8">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-4">
        <header className="flex flex-col items-center justify-center text-white w-full shrink-0">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3">
            <Plane
              aria-label="Plane icon"
              className="text-white h-10 w-10  p-1 shrink-0"
            />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              Find the best trip methods for you
            </h1>
          </div>
          <p className="text-center text-sm sm:text-base mt-3">
            Answer a few quick questions to see how transportation fits your
            needs
          </p>
        </header>

        <section className="flex flex-col items-center justify-center gap-2 w-full shrink-0">
          <article className="flex flex-col items-center justify-start gap-3 bg-zinc-700 p-3 sm:p-4 rounded-md text-left transition-transform duration-300 hover:scale-105 w-full md:w-80">
            <div className="flex items-center gap-2 shrink-0 md:items-center">
              <Target
                aria-label="Target icon"
                className="text-white rounded-full h-6 w-6 md:h-7 md:w-7 p-1 shrink-0"
              />
              <h2 className="text-md sm:text-base font-bold text-white whitespace-nowrap">
                personalized result
              </h2>
            </div>
            <p className="text-stone-200 text-sm text-center">
              Each answer helps you to decide the best trip method.
            </p>
          </article>

          <article className="flex flex-col items-center justify-start gap-3 bg-zinc-700 p-3 sm:p-4 rounded-md text-left transition-transform duration-300 hover:scale-105 w-full md:w-80">
            <div className="flex items-center gap-2 shrink-0 md:items-center">
              <Clock4
                aria-label="Clock icon"
                className="text-white rounded-full h-6 w-6 md:h-7 md:w-7 p-1 shrink-0"
              />
              <h2 className="text-sm sm:text-base font-bold text-white whitespace-nowrap">
                just a few minutes
              </h2>
            </div>
            <p className="text-stone-200 text-sm text-center">
              Just answer a few quick questions to get your result.
            </p>
          </article>
          <article className="flex flex-col items-center justify-start gap-3 bg-zinc-700 p-3 sm:p-4 rounded-md text-left transition-transform duration-300 hover:scale-105 w-full md:w-80">
            <div className="flex items-center gap-2 shrink-0 md:items-center">
              <Earth
                aria-label="Earth icon"
                className="text-white rounded-full h-6 w-6 md:h-7 md:w-7 p-1 shrink-0"
              />
              <h2 className="text-sm sm:text-base font-bold text-white whitespace-nowrap">
                Various travel methods
              </h2>
            </div>
            <p className="text-stone-200 text-sm text-center">
              Cars, bikes, planes, boats and more
            </p>
          </article>
        </section>

        <section className="text-white flex flex-col items-center justify-center gap-2 w-full px-4 shrink-0">
          <h2 className="text-xs sm:text-sm font-semibold text-center">
            Ready to discover your ideal travel method?
          </h2>
          <p className="text-xs text-center text-stone-300">
            You can take the test as many times as you want
          </p>
          <button
            onClick={Starquiz}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 sm:px-8 py-2 rounded-md transition-transform duration-300 hover:scale-105 font-medium w-full sm:w-auto text-xs sm:text-sm shadow-lg"
          >
            Start the questions
          </button>
        </section>
      </div>
    </main>
  );
}
