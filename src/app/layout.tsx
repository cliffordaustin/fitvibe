import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitVibe",
  description: "FitVibe - Your Fitness Journey Starts Here",
};

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/cabinet-grotesk/cabinetgrotesk-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cabinet-grotesk/cabinetgrotesk-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/cabinet-grotesk/cabinetgrotesk-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/cabinet-grotesk/cabinetgrotesk-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/cabinet-grotesk/cabinetgrotesk-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
});

const amulya = localFont({
  src: [
    {
      path: "../../public/fonts/amulya/amulya-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/amulya/amulya-lightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/amulya/amulya-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/amulya/amulya-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/amulya/amulya-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/amulya/amulya-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-amulya",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cabinetGrotesk.variable} ${amulya.variable} ${amulya.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
