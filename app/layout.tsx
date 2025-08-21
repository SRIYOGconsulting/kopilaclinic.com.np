import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Kopila Fertility & Womens Clinic",
  description: "Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kopila Fertility & Womens Clinic</title>
        <meta name="description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
        <link rel="icon" href="/icon.svg" />
        <title>Kopila Fertility & Womens Clinic, Damak-6, Jhapa, Nepal</title>
        <meta name="description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
        <meta name="keywords" content="jhapa gyne clinic, kopila clinic, damak gyne clinic, women clinic damak, jhapa clinic" />
        <meta name="author" content="PRACAS" />
        <meta property="og:url" content="https://kopilaclinic.com.np" />
        <meta property="og:title" content="Kopila Fertility & Womens Clinic | Damak, Jhapa, Nepal" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Kopila Fertility & Womens Clinic in Damak, Jhapa, Nepal, offers expert gynecological care, fertility treatments, and Womens health services with state-of-the-art facilities and compassionate care." />
        <meta property="og:image" content="https://kopilaclinic.com.np/images/og.jpg" />
        <meta property="og:image:alt" content="Kopila Fertility & Womens Clinic logo or clinic image" />

      </head>
      <body className='bg-white text-gray-800 font-sans antialiased m-0 p-0'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
