export function Button({ label }: { label: string }) {
    return (
        <button className="bg-primary rounded-lg py-2 px-3 leading-6 text-sm font-medium text-white p-2 bg-gradient-to-b from-primary-700 to-primary-800">
            {label}
        </button>
    );
}