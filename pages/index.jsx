import { useEffect, useState } from "react";
 import {FaOpencart} from "react-icons/fa";
 import{IoHome} from "react-icons/io5";
 import {BsBoxSeamFill} from "react-icons/bs";
 import {TbCategoryFilled} from "react-icons/tb";
 import {MdEditSquare} from "react-icons/md";
 import {TfiMoreAlt} from "react-icons/tfi";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {Autoplay,EffectCreative,FreeMode,Pagination} from "swiper/modules";
import StunningDemos from "./StunningDemos";


export default function Home() {
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                      TOP BENNER RIGHT SIDE SWIPER PAGE
       const [currentPage, setcurrentPage] = useState("Home Page")
       const [swiperInstance, setSwiperInstance] = useState(null)
       
       const handlePageChange = (pageId) => {
    setcurrentPage(pageId)
       }

       useEffect(() => {
        if(swiperInstance){
          const slideIndex={
            "Home Page":0,
            "Product Page":1,
            "Collection Page":2,
            "Blog":3,
            "More":4
          } [currentPage];
          
          swiperInstance.slideTo(slideIndex);
        }
      
       }, [currentPage])

  //                                              CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                    BACKGROUND VIDEO LAST 4 SECONDS REPEAT

  //                                              CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                         50 + Stunning Demos

  const demos = [
    {
      href: "/",
      image: "https://www.codingwebstudio.com/img/portfolio/Portfolio.jpg",
      title: "Next.js 14 Portfolio App",
      category: "blog",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/makmovie/next%20js%20movie%20app.jpg",
      title: "Next.js 14 Movie App",
      category: "movie",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/blog/fullstack_blog/Fullstack%20Blog%20App%20Thumbnail%20com.jpg",
      title: "Full Stack Blog Website",
      category: "blog",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/game/gaming%20website%20thumbnail.jpg",
      title: "Pro Gaming Website",
      category: "gaming",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/ecommerce/digital%20website%20thumbnail.jpg",
      title: "Digital Service Website",
      category: "css",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/resume/resume-website-thumbnail.jpg",
      title: "Personal Resume Website",
      category: "resume",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/blog/problog/perosnal%20blog%20website.jpg",
      title: "Personal Blog Website",
      category: "blog",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/blog/recipeblog/recipe%20blog%20website%20thumbnail.jpg",
      title: "Recipe Blog Website",
      category: "blog",
      label: "Premium",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/blog/problog/Pro%20Blog%20Website%20Thumbnail.jpg",
      title: "Pro Level Blog Website",
      category: "blog",
      label: "Premium",
    },
    {
      href: "/",
      image: "https://www.codingwebstudio.com/img/blog/blog1/bloghome.jpg",
      title: "Blog & portfolio Template",
      category: "resume",
      label: "Free",
    },
    {
      href: "/",
      image: "https://www.codingwebstudio.com/img/css/Loader%20Css.jpg",
      title: "Ipad Loader Animation",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/css/social%20card%20hover%20design.jpg",
      title: "Social Icon Card",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/css/Dark%20Mode%20Toggle%20Button%20Design%20Card.jpg",
      title: "Light & Dark Mode",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/css/product%20check%20out.jpg",
      title: "E commerce Product Check Out Design",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/css/toggle%20switch%20design.jpg",
      title: "Design Toggle Switch",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/css/macbook%20air%20design.jpg",
      title: "Design MacBook Air",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/css/5%20loading%20animation.jpg",
      title: "5 Website Loading Animation",
      category: "css",
      label: "Free",
    },
    {
      href: "/",
      image: "https://www.codingwebstudio.com/img/game/codexgame.jpg",
      title: "Codexgame gaming website",
      category: "Gaming",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/ecommerce/cwsfood/cwsfood-1.jpg",
      title: "Food, fruits & vegetables selling",
      category: "ecommerce",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/ecommerce/clothyfly/clothyfly.png",
      title: "Clothyfly E-commece Template",
      category: "ecommerce",
      label: "Free",
    },
    {
      href: "/",
      image:
        "https://www.codingwebstudio.com/img/ecommerce/trishaenterprise/trishaenterprise.png",
      title: "Trishaenterprise E-commece Template",
      category: "ecommerce",
      label: "Free",
    },
  ];

  //                                                CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                   PRODUCT PAGE SCROLL ANIMATION ONCLICK

  //                                                CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                         CLEAN RESPONSVIE VERSATILE

  //                                              CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                      FUNCTION FOR SCROLL SMOOTH FOR ANCHOR TAG

  //                                              CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  //                                      BUTTON FUNCTION FOR SMOOTH SCROLL TO TOP

  //                                              CODE  END
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#
  // #$#$#$#$#$#$#$#$#$#$#$##$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#

  return (
    <>
      <div className="banner">
        <div className="section_inner">
          <div className="light_eff">
            <img
              loading="lazy"
              className="bn_dk"
              src="/img/bg.jpeg"
              alt="Light eff"
            />
            <div className="line-eff">
              <svg
                width={1240}
                height={1200}
                viewBox="0 0 1240 1252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  background: "transparent",
                }}
              >
                <g className="eff-1 eff" filter="url(#filter0_f_1390_2298)">
                  <path
                    d="M885.857 160.25L1024.14 911.075C1026.99 926.564 1042.13 936.591 1057.5 933.177V933.177C1072.87 929.763 1082.34 914.271 1078.37 899.031L885.857 160.25Z"
                    fill="url(#paint0_linear_1390_2298)"
                  />
                </g>
                <g className="eff-2 eff" filter="url(#filter1_f_1390_2298)">
                  <path
                    d="M353.786 160.25L215.507 911.075C212.655 926.564 197.517 936.591 182.143 933.177V933.177C166.768 929.763 157.298 914.271 161.269 899.031L353.786 160.25Z"
                    fill="url(#paint1_linear_1390_2298)"
                  />
                </g>
                <g className="eff-3 eff" filter="url(#filter2_f_1390_2298)">
                  <path
                    d="M620 163L648.095 1063.01C648.59 1078.87 635.868 1092 620 1092V1092C604.132 1092 591.41 1078.87 591.905 1063.01L620 163Z"
                    fill="url(#paint2_linear_1390_2298)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1390_2298"
                    x={725.857}
                    y={0.249634}
                    width={513.422}
                    height={1093.6}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={80}
                      result="effect1_foregroundBlur_1390_2298"
                    />
                  </filter>
                  <filter
                    id="filter1_f_1390_2298"
                    x={0.363525}
                    y={0.249634}
                    width={513.422}
                    height={1093.6}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={80}
                      result="effect1_foregroundBlur_1390_2298"
                    />
                  </filter>
                  <filter
                    id="filter2_f_1390_2298"
                    x={431.891}
                    y={3}
                    width={376.218}
                    height={1249}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={80}
                      result="effect1_foregroundBlur_1390_2298"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1390_2298"
                    x1={857.643}
                    y1={178}
                    x2={1057.5}
                    y2={933.177}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="rgba(255,255,255,0.5)" />
                    <stop
                      offset={1}
                      stopColor="rgba(255,255,255,0.5)"
                      stopOpacity={0.95}
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1390_2298"
                    x1={382}
                    y1={178}
                    x2={182.143}
                    y2={933.177}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="rgba(255,255,255,0.5)" />
                    <stop
                      offset={1}
                      stopColor="rgba(255,255,255,0.5)"
                      stopOpacity={0.95}
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1390_2298"
                    x1={651.578}
                    y1={176.155}
                    x2={608.641}
                    y2={1091.47}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="rgba(255,255,255,0.5)" />
                    <stop
                      offset={1}
                      stopColor="rgba(255,255,255,0.5)"
                      stopOpacity={0.95}
                    />
                  </linearGradient>
                  <style>
                    {
                      "\n                  g.eff {\n                    animation: line-eff 3s infinite;\n                    transform-origin: 50% 100%;\n                    filter: blur(70px)\n                  }\n\n                  .eff-1 {\n                    animation-delay: 0.3s;\n                  }\n\n                  .eff-2 {\n                    animation-delay: 0.5s;\n                  }\n\n                  .eff-3 {\n                    animation-delay: 0.7s;\n                  }\n\n                  @keyframes line-eff {\n\n                    0%,\n                    100% {\n                      opacity: 0;\n                      transform: rotate(0) scale(1) translate3d(0, 0, 0);\n                    }\n\n                    50% {\n                      opacity: 1;\n                      transform: rotate(0) scale(1) translate3d(0, 0, 300px);\n                    }\n                  }\n                "
                    }
                  </style>
                </defs>
              </svg>
            </div>
          </div>
      <div className="container banner_info">
            <div className="left_banner_info">
              <h2>One-stop Foysal's Theme</h2>
              <h1>Prime Quality<br />
              Premium Design</h1>
              <p>Craft a beautiful and high-converting 
              store with a versatile shop multipurpose theme,
              optimized for eCommerce, speed, user experiences, and
              seamless mobile responsiveness.</p>
              <div className="group_btns">
                <div type="button" className="light_skew_hover">
                  <div className="effect_parent"></div><a href="#demos"
                  className="light_skew">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width={22}
                        height={22}
                        viewBox="0 0 443.771 443.772"
                        xmlSpace="preserve"
                        fill="currentColor"
                      >
                        <g>
                          <g id=" Layer_3">
                            <g>
                              <path d="M163.073,3.459C140.557,125.764,122.304,144.016,0,166.532c122.305,22.516,140.557,40.768,163.073,163.073       c22.516-122.305,40.768-140.557,163.073-163.073C203.841,144.016,185.588,125.764,163.073,3.459z" />
                              <path d="M340.064,232.896c-14.318,77.781-25.928,89.39-103.708,103.708c77.78,14.319,89.39,25.928,103.708,103.708       c14.318-77.78,25.928-89.39,103.707-103.708C365.99,322.286,354.383,310.677,340.064,232.896z" />
                            </g>
                          </g>
                        </g>
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                      <span className="cta_text">Explore
                  Demos</span></a>
                </div>
                <a className="g_btn_two" href=
                "https://www.codingwebstudio.com/about/">

                 <FaOpencart/> Open Your Store</a>
              </div>
              <p className="mt-2">Get 3 months trial with
              9$/month, exclusive Theme deal for The4's
              customers</p>
            </div>
            <div className="right_banner_info">
            <div className="right_banner_cont">
              <div className="three_dot">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="right_main_banner_box">
                <div className="left_banner_box">
                  <h1>Featured</h1>
                  <ul>
                 {["Home Page", "Product Page", "Collection Page", "Blog", "More"].map((page,index) => (
            <li className={currentPage=== page ? "active":""} key={page} onClick={() => handlePageChange(page)}>
            <div className="flex gap-05">
              <div className="banner_box_svg">
                {index === 0 && <IoHome />}
                {index === 1 && <BsBoxSeamFill />}
                {index === 2 && <TbCategoryFilled />}
                {index === 3 && <MdEditSquare />}
                {index === 4 && <TfiMoreAlt />}
              </div>{page}
            </div>
      
          </li>
                    ))}
        
                  
                  </ul>
          
                </div>
                <div className="right_banner_box">
                  {/* <div className="swiper mySwiper4">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="right_banner_box_img"><img src=
                        "/img/home1.png" alt=
                        "Home Page Slide 1" /></div>
                      </div>
                      <div className="swiper-slide">
                        <div className="right_banner_box_img"><img src=
                        "/img/home2.png" alt=
                        "Home Page Slide 1" /></div>
                      </div>
                      <div className="swiper-slide">
                        <div className="right_banner_box_img"><img src=
                        "/img/home3.png" alt=
                        "Home Page Slide 1" /></div>
                      </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                  </div> */}
                    {currentPage === "Home Page" && (
                      <Swiper 
                      grabCursor={true}
                      effect={"creative"}
                       creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[180,0,0],
                        },
                        next: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[-180,0,0],
                        },
                       }}
                       pagination={{clickable:true}}
                       nagivation={true}
                       modules={[EffectCreative,Pagination]}
                       className="mySwiper4"
                      >
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/home1.png" alt="Home Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/home2.png" alt="Home Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/home3.png" alt="Home Page" />
                            </div>
                        </SwiperSlide>
                        
                       
                      </Swiper>
                    )}
                    {currentPage === "Product Page" && (
                      <Swiper 
                      grabCursor={true}
                      effect={"creative"}
                       creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[180,0,0],
                        },
                        next: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[-180,0,0],
                        },
                       }}
                       pagination={{clickable:true}}
                       nagivation={true}
                       modules={[EffectCreative,Pagination]}
                       className="mySwiper4"
                      >
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/prod1.jpg" alt="Product Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/prod2.jpg" alt="Product Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/prod3.jpg" alt="Product Page" />
                            </div>
                        </SwiperSlide>
                      
                      </Swiper>
                    )}
                    {currentPage === "Collection Page" && (
                      <Swiper 
                      grabCursor={true}
                      effect={"creative"}
                       creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[180,0,0],
                        },
                        next: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[-180,0,0],
                        },
                       }}
                       pagination={{clickable:true}}
                       nagivation={true}
                       modules={[EffectCreative,Pagination]}
                       className="mySwiper4"
                      >
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/colle1.png" alt="Collection Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/colle2.png" alt="Collection Page" />
                            </div>
                        </SwiperSlide>    
                      </Swiper>
                    )}
                    {currentPage === "Blog" && (
                      <Swiper 
                      grabCursor={true}
                      effect={"creative"}
                       creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[180,0,0],
                        },
                        next: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[-180,0,0],
                        },
                       }}
                       pagination={{clickable:true}}
                       nagivation={true}
                       modules={[EffectCreative,Pagination]}
                       className="mySwiper4"
                      >
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/blog1.png" alt="Blog Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/blog2.png" alt="Blog Page" />
                            </div>
                        </SwiperSlide>    
                      </Swiper>
                    )}
                    {currentPage === "More" && (
                      <Swiper 
                      grabCursor={true}
                      effect={"creative"}
                       creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[180,0,0],
                        },
                        next: {
                          shadow: true,
                          translate: [0, 0, -800],
                          rotate:[-180,0,0],
                        },
                       }}
                       pagination={{clickable:true}}
                       nagivation={true}
                       modules={[EffectCreative,Pagination]}
                       className="mySwiper4"
                      >
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/more1.png" alt="more Page" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="right_banner_box_img">
                            <img src="/img/more2.png" alt="more Page" />
                            </div>
                        </SwiperSlide>    
                      </Swiper>
                    )}

                </div>
              </div>
            </div>
            <img className="right_banner_img_mobile" src=
            "/img/banner.png" alt="" /></div>
          </div>
        </div>
      </div>
    
 
   
    </>
  );
}
