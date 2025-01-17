
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ThemeProvider
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
