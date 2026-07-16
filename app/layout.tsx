import type { Metadata } from "next";
import { brandLogoSrc } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konselit | Dijital Ürün ve Yazılım Stüdyosu",
  description:
    "Konselit, fikirden yayına kadar modern dijital ürünler tasarlayan ve geliştiren yaratıcı bir stüdyodur.",
  icons: {
    icon: brandLogoSrc,
    shortcut: brandLogoSrc,
    apple: brandLogoSrc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var key = "konselit-theme";
                  var stored = window.localStorage.getItem(key);
                  var theme = stored === "light" || stored === "dark"
                    ? stored
                    : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
                  document.documentElement.dataset.theme = theme;
                } catch (_) {
                  document.documentElement.dataset.theme = "dark";
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
