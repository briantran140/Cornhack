import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });
const noto_serif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Support Net",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto_serif.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

