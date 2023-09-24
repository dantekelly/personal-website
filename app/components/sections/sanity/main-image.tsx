import { type Image as ImageType } from "~/types/sections/image";
import Image from "~/components/atoms/image";

type Props = {
  data: ImageType;
  width?: number;
  height?: number;
};

const MainImage = ({ data, width = 1152, height = 740 }: Props) => (
  <Image data={data} width={width} height={height} />
);

export default MainImage;
