import Sidebar from "@/components/Sidebar";
import Cover from "@/components/Cover";
import Searchlisting from "@/components/Searchlisting";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Profile from "@/components/Profile";
import Services from "@/components/service";
import Partnership from "@/components/parntership";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Cover />
      <Searchlisting />
      <Details />
      <Gallery />
      <Profile />
      <Services />
      <Partnership />
      {/*    
      <div className="bg-amber-400  h-96">Maps</div>
      <div className="bg-amber-400  h-96">Call OR VISIT</div>
      <div className="bg-amber-400  h-96">Footer</div>  */}
    </div>
  );
}
