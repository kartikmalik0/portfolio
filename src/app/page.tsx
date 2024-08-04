// app/page.js (or wherever your Home component is located)
import HomePage from "@/components/Home";
import Sidenav from "@/components/Sidenav";
import { prisma } from "@/lib/connect";



export default async function Home() {
  async function fetchHero() {
    try {
      const hero = await prisma.hero.findMany();
      return { hero };
    } catch (error) {
      throw new Error("Unable to fetch Hero");
    }
  }

  const data = await fetchHero();

  return (
    <div className="bg-[#080808] grid grid-cols-[60px_1fr]">
      <Sidenav />
      <HomePage heroData={data.hero} />
    </div>
  );
}
