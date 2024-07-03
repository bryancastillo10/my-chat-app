export const tailwindColors = [
    "bg-sky-500",
    "bg-emerald-700",
    "bg-indigo-600",
    "bg-rose-400",
    "bg-amber-500",
    "bg-teal-600",
    "bg-cyan-500",
    "bg-yellow-400",
    "bg-fuchsia-600"
];

export const getRandomColor = () => {
    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
};