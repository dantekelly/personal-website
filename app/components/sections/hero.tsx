import Image from "next/image";

import Photo from "@/images/Photo.png";

export default function Hero() {
  const image = Photo;
  const title = "Dante Kelly";
  const body = `I’m a tech professional in Las Vegas working as a full-stack developer and UI/UX designer, building secure and effective applications.

Often I’ll take on additional smaller projects to test out cutting-edge technology in production, and let you know my insights.

If you like one of my experiments, don’t be a stranger, report some issues.`;
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 xl:flex-row ">
      <Image src={image} alt="Dante Kelly" width={300} height={305} />

      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-extrabold text-slate-50">{title}</h1>
        <p className="text-md text-slate-400">{body}</p>
      </div>
    </div>
  );
}
