import HomeNavbar from "./components/user/HomePage/HomeNavbar";
import Banner from "./components/user/HomePage/Banner";
import CardVideoSection from "./components/user/HomePage/CardVideoSection";
import Footer from "./components/user/HomePage/Footer";

export default function Home() {
  return (
    <main>
      <HomeNavbar />
      <Banner />
      <CardVideoSection />
      <Footer />
    </main>
  );
}
