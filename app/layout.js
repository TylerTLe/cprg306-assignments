import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CPRG 306-D Tyler Le",
  description: "CPRG 306: Web Development 2 - Assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
