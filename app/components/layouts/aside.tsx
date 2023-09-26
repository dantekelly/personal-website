import Details from "~/components/sections/details";
import { type Details as DetailsType } from "~/types/sections/details";

interface AsideProps {
  data: DetailsType;
}

export default function Aside({ data }: AsideProps) {
  return (
    <aside className="no-scrollbar sticky top-[90px] mt-[90px] hidden h-[calc(100vh_-_90px)] w-[400px] overflow-y-scroll scroll-smooth border-l border-slate-600 md:block">
      <Details data={data} layout />
    </aside>
  );
}
