import Home from './components/home/Home'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Image Generation",
  description: "Ai Image Generation using next js 15",
};

export default function Homes() {
  return (
    <div>
      <Home/>
    </div>
     
  );
}
