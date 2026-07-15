import { Nav } from "@/components/Nav";
import { Opening } from "@/components/sections/Opening";
import { Credentials } from "@/components/sections/Credentials";
import { Participations } from "@/components/sections/Participations";
import { Founder } from "@/components/sections/Founder";
import { MyStory } from "@/components/sections/MyStory";
import { Academy } from "@/components/sections/Academy";
import { Specs } from "@/components/sections/Specs";
import { PersonalCoaching } from "@/components/sections/PersonalCoaching";
import { Editorial } from "@/components/sections/Editorial";
import { HowItsBuilt } from "@/components/sections/HowItsBuilt";
import { Merchandise } from "@/components/sections/Merchandise";
import { Booking } from "@/components/sections/Booking";
import { Reviews } from "@/components/sections/Reviews";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative bg-paper text-ink">
      <Nav />
      <Opening />
      <Credentials />
      <Participations />
      <Founder />
      <MyStory />
      <Academy />
      <Specs />
      <PersonalCoaching />
      <Editorial />
      <HowItsBuilt />
      <Merchandise />
      <Booking />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
