import Home from './components/home/Home'
import { Metadata } from "next";

export const metadata = {
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
