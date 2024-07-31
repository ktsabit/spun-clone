interface CurrencyCardProps {
  name: string;
  code: string;
  symbol: string;
  active: boolean;
  onSelect: () => void;
}

export function CurrencyCard({ name, code, symbol, active, onSelect }: CurrencyCardProps) {
  return (
    <div onClick={onSelect} className={`border rounded-lg p-3 focus:outline-none cursor-pointer ${active ?   "border-primary-700":"border-gray-300"}`}>
      <div className="flex flex-row">
        <div>
          <span className={`block h-2 w-2 m-2 mt-6 mr-6 rounded-full ring-1 ring-offset-2 ${active ?"bg-primary-700 ring-primary-700" :"ring-gray-400"}`}></span>
        </div>
        <div>
          <div className="font-medium text-sm text-primary leading-6">{code} ({symbol})</div>
          <div className="text-sm text-secondary leading-6">{name}</div>
        </div>
      </div>
    </div>
  );
}
