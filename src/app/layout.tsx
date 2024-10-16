import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "sonner";
import Footer from "./(Home)/Footer";


const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Eduresearcher",
  description: "Eduresearchers",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <script data-host="https://mmeanalytics.designstime.com/" data-dnt="false" src="https://mmeanalytics.designstime.com/js/script.js" id="ZwSg9rf6GA" async defer></script>
      {/* <Tawkto/> */}
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
