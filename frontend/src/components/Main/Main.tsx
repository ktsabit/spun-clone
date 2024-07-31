export function Main(props: React.PropsWithChildren<{}>) {
  return (
    <div className="mb-10 flex justify-center w-full">
      <main className="flex gap-6 flex-col max-w-5xl pt-28">{props.children}</main>
    </div>
  );
}
