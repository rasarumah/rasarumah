import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rasa Rumah - Heat n Eat | Masakan Rumahan Siap Saji dalam 5 Menit",
  description: "Rasa Rumah menyajikan Heat n Eat, masakan rumahan siap saji dalam 5 menit. Rendang, Ayam Ungkep, Sambal Cumi dan lainnya. Nikmat, praktis, tanpa pengawet. Pesan sekarang via WhatsApp!",
  keywords: "masakan rumahan, siap saji, heat n eat, rendang, ayam ungkep, sambal cumi, makanan praktis, tanpa pengawet, delivery makanan",
  authors: [{ name: "Rasa Rumah" }],
  creator: "Rasa Rumah",
  publisher: "Rasa Rumah",
  openGraph: {
    title: "Rasa Rumah - Heat n Eat | Masakan Rumahan Siap Saji",
    description: "Masakan rumahan berkualitas, siap saji dalam 5 menit. Pesan sekarang!",
    url: "https://rasarumah.id",
    siteName: "Rasa Rumah",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasa Rumah - Heat n Eat",
    description: "Masakan rumahan siap saji dalam 5 menit",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
