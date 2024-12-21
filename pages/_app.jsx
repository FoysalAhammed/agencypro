
import { useEffect } from 'react';
import Header from "../components/Header";
import WhyChoseUs from "./WhyChoseUs";
import "@/styles/globals.css";
import StunningDemos from "./StunningDemos";
import PageRight from "./PageRight";
import ReadyToUse from "./ReadyToUse";
import TextLftToRight from "./TextLftToRight";
import AllFeatures from "./AllFeatures";
import MegaMenu from "./MegaMenu";
import EcomRise from "./EcomRise";
import SeoSection from "./SeoSection";
import MobileFirst from "./MobileFirst";
import CustomerReview from "./CustomerReview";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const scrollToTopBtn = document.querySelector('.scroll_to_top_btn');
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);
  return <>
  <Header/>
    <Component {...pageProps} />
    <WhyChoseUs/>
    <StunningDemos/>
    <PageRight/>
    <ReadyToUse/>
    <TextLftToRight/>
    <AllFeatures/>
    <MegaMenu/>
    <EcomRise/>
    <SeoSection/>
    <MobileFirst/>
    <CustomerReview/>
    <div class="scroll_to_top_btn">
        <div class="light_skew_hover">
          <div class="effect_parent"></div>
          <div class="light_skew">
      <HiOutlineChevronDoubleUp/>
          </div>
        </div>
      </div>
  </>
}
