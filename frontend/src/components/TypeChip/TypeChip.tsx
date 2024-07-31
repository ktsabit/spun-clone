import { Globe , CalendarDots, CurrencyCircleDollar, Bank, Sparkle} from "@phosphor-icons/react";
// import { useSearchParams } from "next/navigation";

interface TypeChipProps {
    active: boolean;
    label: string;
    icon: string;
    onClick: () => void;
}

export function TypeChip({ active, label, icon, onClick }: TypeChipProps) {
    // let iconjsx;
    const iconMap: { [key: string]: any } = {
        "globe": <Globe size={18}/>,
        "calendar": <CalendarDots size={18}/>,
        "dollar": <CurrencyCircleDollar size={18}/>,
        "bank": <Bank size={18}/>,
        "other": <Sparkle size={18}/>
    }

    const iconjsx = iconMap[icon]
   

    return (
        <button onClick={onClick} className={`flex gap-2 items-center rounded-full py-2 px-4 outline outline-1 ${active ? "bg-primary-700 text-white outline-primary-700" : "text-gray-500 bg-white"}`}>
            <span style={{ color: 'inherit' }}>{iconjsx}</span>
            <span style={{ color: 'inherit' }}>{label}</span>
        </button>
    );
}