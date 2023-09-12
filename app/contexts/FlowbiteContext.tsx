"use client";

import { Flowbite } from "flowbite-react";
import { type FC, type PropsWithChildren } from "react";

import theme from "~/styles/theme";

const FlowbiteContext: FC<PropsWithChildren> = function ({ children }) {
  return <Flowbite theme={theme}>{children}</Flowbite>;
};

export default FlowbiteContext;
