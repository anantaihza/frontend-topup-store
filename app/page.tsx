import FeaturedGame from "@/components/organisms/FeaturedGame";
import Footer from "@/components/organisms/Footer";
import MainBanner from "@/components/organisms/MainBanner";
import Navbar from "@/components/organisms/Navbar";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import TransactionStep from "@/components/organisms/TransactionStep";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Header/hero */}
      <MainBanner />

      {/* Transaction Step - 3 Column */}
      <TransactionStep/>

      {/* Featured-game - 5 Column */}
      <FeaturedGame />

      {/* Reached */}
      <Reached />

      {/* Story */}
      <Story />

      {/* Footer */}
      <Footer />
    </>
  );
}
