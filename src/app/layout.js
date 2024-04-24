import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const jost = Jost({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
