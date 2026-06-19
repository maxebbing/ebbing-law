import "./globals.css";

/* --- Vercel Analytics and Speed Insights--- */
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}