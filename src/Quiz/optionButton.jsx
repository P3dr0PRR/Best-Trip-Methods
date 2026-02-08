export function OptionButton({ option, text, isSelected, onClick }) {
  return (
    <li
      className={`bg-stone-600 rounded-md w-full ${
        isSelected ? "ring-4 ring-indigo-500" : ""
      }`}
    >
      <button
        onClick={() => onClick(option)}
        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 w-full text-left cursor-pointer hover:bg-stone-500 transition rounded-md"
      >
        <span className="flex items-center justify-center w-8 sm:w-10 md:w-12 aspect-square shrink-0 rounded-full bg-stone-800 text-white font-semibold hover:bg-stone-900 active:scale-95 transition focus:ring-2 focus:ring-indigo-500">
          {option}
        </span>
        <span className="text-white font-medium text-sm sm:text-base">
          {text}
        </span>
      </button>
    </li>
  );
}
