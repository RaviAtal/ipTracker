import { Inter } from "next/font/google";
import "./globals.css";
import "/public/assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ravi",
  description: "A passionate Front End Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
