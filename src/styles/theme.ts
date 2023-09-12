import { type ThemeProps } from "flowbite-react";

const FlowbiteTheme: ThemeProps = {
  dark: true,
  theme: {
    button: {
      color: {
        primary: "bg-blue-500 text-white",
      },
    },
    navbar: {
      root: {
        base: "bg-slate-900 px-[24px] lg:px-[48px] border-slate-600 border-0 border-b-1 fixed left-0 right-0",
      },
    },
  },
};

export default FlowbiteTheme;
