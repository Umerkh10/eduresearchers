import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import Tawkto from "@/lib/Tawkto";
import Footer from "./(Home)/Footer";


const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Eduresearcher",
  description: "Eduresearchers",


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Tawkto/>
      <body
      
        className={inter.className}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        <Footer/>
        <Toaster richColors position="bottom-right"/>
        </ThemeProvider>
      </body>
    </html>
  );
}
