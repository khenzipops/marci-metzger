import Sidebar from "@/components/Sidebar";
import Cover from "@/components/Cover";
import Searchlisting from "@/components/Searchlisting";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Profile from "@/components/Profile";
import Services from "@/components/service";
import Partnership from "@/components/parntership";
import Footers from "@/components/Footers";
import Contact from "@/components/Contact";
import Map from "@/components/Maps";
export default function Home() {
  return (
    <div>
      <Sidebar />
      <Cover />
      <hr />
      <Searchlisting />
      <hr />
      <Details />
      <Gallery />
      <Profile />
      <Services />
      <Partnership />
      <Contact />
      <Map />

      <Footers />
    </div>
  );
}
