interface Props {
  text: string;
  color?: string;
}

const colorMap: Record<string, string> = {
  red: "bg-red-300",
  blue: "bg-blue-400",
  green: "bg-green-400",
  yellow: "bg-yellow-300",
  gray: "bg-gray-200",
  purple: "bg-purple-500",
  orange: "bg-orange-400",
  pink: "bg-pink-500",
  teal: "bg-teal-400",
};

const Tag = ({ text, color }: Props) => {
  const backgroundClass =
    color && colorMap[color] ? colorMap[color] : "bg-gray-300";

  return (
    <span
      className={`flex w-fit rounded-full ${backgroundClass} px-3 py-1 text-sm font-semibold`}
    >
      {text}
    </span>
  );
};

export default Tag;
