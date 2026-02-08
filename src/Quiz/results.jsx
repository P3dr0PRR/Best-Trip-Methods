import { getTravelResult } from "../utils/getTravelResults";

const TRAVEL_DATA = {
  car: {
    description:
      "Traveling by car gives you full control and flexibility, allowing you to stop anywhere, customize your route, and enjoy a comfortable, private journey at your own pace.",
    image: "carro.webp",
  },
  airplane: {
    description:
      "Flying is the fastest way to reach distant destinations, making it ideal for long trips where saving time and maximizing convenience are top priorities.",
    image: "aviao-ao-por-sol.jpg",
  },
  boat: {
    description:
      "Traveling by boat provides a peaceful and unique perspective, letting you enjoy open-water views, fresh air, and a calm, enjoyable ride.",
    image: "Barco.webp",
  },
  train: {
    description:
      "Train travel is smooth, relaxing, and scenic, offering spacious seating, stable rides, and a stress-free experience without traffic or airport lines.",
    image: "trem.jpg",
  },
};

export function ResultsDescription({ car, airplane, boat, train }) {
  const result = getTravelResult({ car, airplane, boat, train });
  const { description, image } = TRAVEL_DATA[result];

  return (
    <section className="space-y-4 sm:space-y-6 flex flex-col items-center justify-center w-full px-4">
      <p className="text-center text-sm sm:text-base leading-relaxed text-stone-200">
        {description}
      </p>
      <figure className="w-full max-w-sm">
        <img
          className="w-full rounded-lg shadow-md object-cover aspect-video"
          src={image}
          alt={result}
        />
        <figcaption className="text-xs sm:text-sm text-stone-300 text-center mt-2">
          {result.charAt(0).toUpperCase() + result.slice(1)}
        </figcaption>
      </figure>
    </section>
  );
}
