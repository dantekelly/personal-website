import Details from "~/components/sections/details";

export default function Aside() {
  return (
    <aside className="no-scrollbar sticky top-[90px] mt-[90px] hidden h-[calc(100vh_-_90px)] w-[400px] overflow-y-scroll scroll-smooth border-l border-slate-600 md:block">
      <Details layout />
    </aside>
  );
}
