import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { fetchPortfolioData } from "@/lib/data";

const jost = Jost({ weight: "400", subsets: ["latin"] });

export async function generateMetadata() {
  const data = await fetchPortfolioData();
  if (!data) {
    return {
      title: `Not Found`,
      description: `Error getting user information `,
    };
  }
  return {
    title: { template: `%s | ${data?.about.name} `, default: data?.about.name },
    description: `${data?.about.name} ${data?.about.title}`,
    keywords: [data.about.name, "Portfolyo"],
    authors: [{ name: "thagoo", url: "https://github.com/thagoo" }],
    openGraph: {
      images: data.about.avatar.url,
    },
    icons: {
      icon: data.about.avatar.url,
    },
  };
}
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
