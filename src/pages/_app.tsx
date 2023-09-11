import {Flowbite, type ThemeProps} from "flowbite-react";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const FlowbiteTheme: ThemeProps = {
  dark: true,
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Flowbite theme={FlowbiteTheme}><Component {...pageProps} /></Flowbite>;
};

export default MyApp;
