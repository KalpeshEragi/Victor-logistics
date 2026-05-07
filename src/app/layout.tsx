import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTracker from "@/components/analytics/PageTracker";
import ChatBot from "@/components/chat/ChatBot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageTracker />
        <ChatBot />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
