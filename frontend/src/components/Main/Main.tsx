export function Main(props: React.PropsWithChildren<{}>) {
    return (
        <div className="flex flex-col items-center w-full">
            {props.children}
        </div>
    );
}