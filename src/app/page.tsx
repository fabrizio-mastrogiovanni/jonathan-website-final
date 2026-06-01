import { Nav } from "@/components/Nav";
import { Opening } from "@/components/sections/Opening";
import { Credentials } from "@/components/sections/Credentials";
import { Founder } from "@/components/sections/Founder";
import { Specs } from "@/components/sections/Specs";
import { Editorial } from "@/components/sections/Editorial";
import { HowItsBuilt } from "@/components/sections/HowItsBuilt";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative bg-paper text-ink">
      <Nav />
      <Opening />
      <Credentials />
      <Founder />
      <Specs />
      <Editorial />
      <HowItsBuilt />
      <CTA />
      <Footer />
    </main>
  );
}
