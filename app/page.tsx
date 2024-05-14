import Image from "next/image";

import Aside from "./components/aside";
import Herosection from "./components/herosection";
import Result from "./components/result";
// import {data} from "./restApi.json";

export default function Home() {
  return (
    <main className="flex flex-row bg-gray-100 h-full mx-24">
      {/* <h1>hello Alt Technology</h1> */}
      
      <Aside />
      <Herosection />
      <Result />
      
    </main>
  );
}
