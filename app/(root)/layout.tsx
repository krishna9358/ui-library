
import Header from "@/components/landing/Header";
import { Footer } from "@/components/layout/Footer";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    template: "UI Library Made By Krishna Mohan",
    default: "UI libary Made by Krishna Mohan",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="relative w-full pt-0 md:pt-0">{children}</main>
      <Footer/>
    </div>
  );
}
