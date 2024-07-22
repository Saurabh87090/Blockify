import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Review from "@/components/Review"
import  Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <Header />
      <Main/>
      <Features/>
      <Review/>
      <FAQs/>
      <Footer/>
    </div>
  );
}