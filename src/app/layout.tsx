import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./styles/globals.css"

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canil de Sapiranga",
  description:
    "Seja bem-vindo ao canil de Sapiranga. Sinta-se a vontade para fazer a vida de um pet feliz",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="min-h-dvh">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
