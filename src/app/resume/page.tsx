import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Resume } from "@/components/sections/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional credentials and technical summary of Vikas.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-24 min-h-screen">
        <Resume />
      </main>
      <Footer />
    </>
  );
}
