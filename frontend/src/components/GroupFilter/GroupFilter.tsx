import { useSearchParams } from "next/navigation";
import { TypeChipRow } from "../TypeChip/TypeChipRow";

export function GroupFilter() {

    const searchParams = useSearchParams();

    const currency = searchParams.get("currency");
    const group = searchParams.get("group");
    console.log(currency);
    console.log(group);

    function capitalize(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="flex flex-col gap-4 max-w-5xl">
            <h1 className="font-semibold text-2xl">{group && capitalize(group)}</h1>
            <TypeChipRow />
        </div>
    );
}