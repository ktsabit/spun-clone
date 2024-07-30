import React from 'react';

interface TypeChipProps {
    active: boolean;
    label: string;
    icon: string;
}

export function TypeChip({ active, label, icon }: TypeChipProps) {
    return (
        <button className={"rounded-full" || active ? "bg-primary-700 text-white" : "bg-white outline"}>
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
        </button>
    );
}