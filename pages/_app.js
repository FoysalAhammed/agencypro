
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


export default function App({ Component, pageProps }) {
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
            <svg stroke="currentcolor" fill="none" stroke-width="2"
            viewbox="0 0 24 24" aria-hidden="true" height="1em"
            width="1em" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d=
            "M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
          </div>
        </div>
      </div>
   
  </>
}
