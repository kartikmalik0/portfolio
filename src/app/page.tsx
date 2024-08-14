import HomePage from "@/components/Home";
import Sidenav from "@/components/Sidenav";
import { prisma } from "@/lib/connect";


async function fetchHero() {
  try {
    console.log("fetching hero")
    const hero = await prisma.hero.findMany();
    return { hero };
  } catch (error) {
    throw new Error("Unable to fetch Hero");
  }
}

export async function fetchAbout() {
  console.log("fetching aobut")
  try {
      const about = await prisma.about.findMany();
      return { about };
  } catch (error) {
      throw new Error("Unable to fetch About");
  }
}

export default async function Home() {

  const data = await fetchHero();
  const aboutData = await fetchAbout()

  

  return (
    <div className="bg-[#080808] grid grid-cols-[60px_1fr]">
      <Sidenav />
      <HomePage heroData={data.hero} aboutData = {aboutData.about}/>
    </div>
  );
}
