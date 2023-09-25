import Details from "~/components/sections/details";
import { type Project } from "~/types/project";
import { type SiteSettings } from "~/types/site-settings";

interface AsideProps {
  data: {
    projects: Project[];
    siteSettings: SiteSettings;
  };
}

export default function Aside({ data }: AsideProps) {
  return (
    <aside className="no-scrollbar sticky top-[90px] mt-[90px] hidden h-[calc(100vh_-_90px)] w-[400px] overflow-y-scroll scroll-smooth border-l border-slate-600 md:block">
      <Details data={data} layout />
    </aside>
  );
}
