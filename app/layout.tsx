import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mike Ebbing LL.M. | Rechtsanwalt",
    template: "%s | Mike Ebbing LL.M.",
  },
  description:
    "Kanzlei Mike Ebbing LL.M. – Rechtsanwalt in Berlin.",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ebbing-law.de"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}