import React, { ReactNode } from "react";
// import Navbar from "./components/Navbar"; // Adjust the path as necessary
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta
          name="description"
          content="A description of my website for better SEO and accessibility."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
