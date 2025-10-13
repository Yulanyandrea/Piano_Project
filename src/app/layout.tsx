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
  description:
    "This is an we application where the user can play different instruments like piano, drums, guitar and voice. You can practice your music level playing different scales",
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
       <head>
        {/* Google Analytics */}
         <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-WCZ1YYSNC6"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WCZ1YYSNC6');
        `,
      }}
    />
      </head>
      <body className={roboto.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
