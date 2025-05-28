import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Shadows_Into_Light } from "next/font/google";

const roboto = Shadows_Into_Light({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Create your own music",
  description: "",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
