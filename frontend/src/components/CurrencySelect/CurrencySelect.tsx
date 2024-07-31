import { CaretDown } from "@phosphor-icons/react";
interface NavbarProps {
  onClick: () => void;
  currCode: string;
}

export const CurrencySelect: React.FC<NavbarProps> = ({ onClick, currCode }) => {
  return (
    <button
      onClick={onClick}
      className="flex border py-2 px-4 rounded-lg cursor-pointer items-center gap-4"
    >
      <h1 className="font-light">{currCode}</h1>
      <CaretDown size={14} />
    </button>
  );
};
