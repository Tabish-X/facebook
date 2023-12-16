import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import auth from "@/lib/auth";

export const metadata: Metadata = {
  title: {
    template: "%s | Facebook",
    default: auth().authenticated ? "Facebook": "Facebook - Log in or sign up",
  },
  description: "Facebook clone with Next JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-Roboto">
        <Header />
        {children}
        <Toaster
          position="bottom-center"
          containerStyle={{borderRadius: "5rem", height: "2rem", fontSize: "12px"}}
          toastOptions={{
            style: {
              background: "#777777",
              color: "#000",
            },
          }}
        />
      </body>
    </html>
  );
}
