import { type Work } from "~/types/work";

export interface Works {
  _type: "works";
  _key: string;
  title: string;
  works: Work[];
}
