import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madhukumar Gowroju | Data Analyst & Power BI Developer",
  description:
    "Premium portfolio of Madhukumar Gowroju - Senior Data Analyst and Power BI Developer with 4+ years of experience building enterprise BI solutions at Tata Consultancy Services.",
  keywords: [
    "Power BI",
    "Data Analyst",
    "SQL",
    "DAX",
    "TCS",
    "Data Visualization",
    "Portfolio",
    "Madhukumar Gowroju",
  ],
  openGraph: {
    title: "Madhukumar Gowroju | Data Analyst & Power BI Developer",
    description:
      "Premium portfolio showcasing 4+ years of Power BI and SQL expertise at Tata Consultancy Services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
