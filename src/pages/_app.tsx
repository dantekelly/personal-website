import { Flowbite } from "flowbite-react";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import FlowbiteTheme from "~/styles/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Flowbite theme={FlowbiteTheme}>
      <Component {...pageProps} />
    </Flowbite>
  );
};

export default MyApp;
