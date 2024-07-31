import { useCallback, useState } from "react";
import { TypeChip } from "./TypeChip";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export function TypeChipRow() {
  const [activeType, setActiveType] = useState("Visa"); // Default active type
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTypeClick = (type: any) => {
    setActiveType(type);
    router.push("/service?" + createQueryString("group", type.toLowerCase()));
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const types = [
    { label: "Visa", icon: "globe" },
    { label: "Extension", icon: "calendar" },
    { label: "Tax", icon: "dollar" },
    { label: "Legal", icon: "bank" },
    { label: "Other", icon: "other" },
  ];
  console.log(activeType);

  return (
    <div className="flex gap-4">
      {types.map((type) => (
        <TypeChip
          key={type.label}
          active={activeType === type.label}
          label={type.label}
          icon={type.icon}
          onClick={() => handleTypeClick(type.label)}
        />
      ))}
    </div>
  );
}
