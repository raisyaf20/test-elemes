import Header from "./components/Header";
import Hero from "./components/Hero";
import bg from "./assets/imgs/bg-hero.png";
import Category from "./components/Category";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen object-cover object-center"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="bg-white/95 lg:px-10">
        <Header />
        <Hero />
        <Category />
      </div>
      <div className="bg-white px-10">
        <Trending />
        <Footer />
      </div>
    </main>
  );
}
