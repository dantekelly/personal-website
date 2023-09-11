import { Flowbite, type ThemeProps } from "flowbite-react";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const FlowbiteTheme: ThemeProps = {
  dark: true,
  theme: {
    navbar: {
      root: {
        base: "bg-slate-900 px-12 py-6 border-slate-600 fixed left-0 right-0",
      },
    },
  },
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Flowbite theme={FlowbiteTheme}>
      <Component {...pageProps} />
    </Flowbite>
  );
};

export default MyApp;
