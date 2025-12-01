import HomePage from "./components/Home";
import Sidenav from "./components/Sidenav";




export default function Home() {

  return (
    <div className="bg-[#080808] grid grid-cols-[60px_1fr]">
      <Sidenav />
      <HomePage />
    </div>
  );
}
