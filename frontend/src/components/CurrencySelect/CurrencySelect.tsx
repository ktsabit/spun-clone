import { CaretDown } from "@phosphor-icons/react";

export function CurrencySelect() {
    return (
        <button className="flex border py-2 px-4 rounded-lg cursor-pointer items-center gap-4">
            <h1 className="font-light">IDR</h1>
            <CaretDown size={14} />
        </button>
    );
}