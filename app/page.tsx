import Image from "next/image";
import Hero from "./components/Hero";
import Evidence from "./components/Evidence";

export default function Home() {
  return (
    <div className="flex flex-col gap-26 justify-center items-center">
      <Hero/>
      <Evidence/>
    </div>
  );
}
