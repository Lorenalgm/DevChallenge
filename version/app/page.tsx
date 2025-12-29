import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { CategoriesList } from "@/components/CategoriesList";
import { Steps } from "@/components/Steps";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CategoriesList />
      <Steps />
      <Newsletter />
      <Footer />
    </>
  );
}
