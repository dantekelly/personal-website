import "~/styles/globals.css";

const StudioLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default StudioLayout;
