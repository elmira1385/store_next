import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Hero/>
    </div>
  );
}
