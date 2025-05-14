import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Cahier Journal",
  description: "Cahier journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="cupcake" className="h-full">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
