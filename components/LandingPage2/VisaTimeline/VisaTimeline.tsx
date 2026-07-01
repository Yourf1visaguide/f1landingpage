"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import  { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import LeftColumn from "./left-column";
import { customScrollTo } from "@/lib/scroll-to";
import RedButton from "@/components/Red-Buttons";
import { handleWhatsappClick } from "@/function/handleWhatsapp";
import { VisaTimelineType } from "@/lib/types";
import Badge from "@/components/Badge";
import { icons } from "@/lib/icons";

gsap.registerPlugin(ScrollTrigger);

function HowThisWork({steps, title, description, badge}:VisaTimelineType) {
  const divStep = useRef<(SVGSVGElement | null)[]>([]);
  const divLine = useRef<(HTMLDivElement | null)[]>([]);
  const divMainElement = useRef<(HTMLDivElement | null)[]>([]);
  const divElement = useRef<(HTMLHeadingElement | null)[]>(null);
  const [currentImage, setCurrentImage] = useState(0);

  
  useEffect(() => {
    divStep.current.map((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            scroller: "body",

            start: "top 55%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    divMainElement.current.map((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0.5,
          filter: "grayScale(100%)",
          duration: 0.4,
        },
        {
          opacity: 1,
          filter: "grayScale(0%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            scroller: "body",

            start: "top 55%",
            end: "bottom 60%",
            scrub: true,
            onEnter: () => setCurrentImage(index),
            onEnterBack: () => setCurrentImage(index),
          },
        }
      );
    });
    divLine.current.map((el) => {
      gsap.fromTo(
        el,
        {
          height: 0,
        },
        {
          height: 120,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: el,
            scroller: "body",
            start: "top 55%",
            end: "+=120 55%",
            scrub: true,
          },
        }
      );
    });
    divElement?.current?.map(() => {
      gsap.fromTo(
        divElement.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: divElement.current,
            scroller: "body",
            start: "bottom 90%",
            end: "bottom 85%",
            scrub: true,
            markers: true,
          },
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  useEffect(() => {
  const timer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1500);

  return () => clearTimeout(timer);
}, []);

  const addToRefs = (el: HTMLHeadingElement | null) => {
    if (el && !divElement?.current?.includes(el)) {
      divElement?.current?.push(el);
    }
  };
  
  return (
    <section className="bg-zinc-100 py-20 px-4 xl:px-0 " id="process">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex justify-center items-center flex-col">
          <div
            ref={addToRefs}
          >
            <Badge  text={badge} isLive={true}  />
            
          </div>
          <h3
            ref={() => {
              divElement.current;
            }}
            className="text-4xl max-w-4xl text-center text-zinc-950 md:text-5xl lg:text-6xl font-bold pt-3 pb-8 "
          >
           {title}
          </h3>
          <p className="mt-0 mb-8 text-lg text-center text-slate-600 max-w-5xl">
        {description}
      </p>
        </div>
        <div className="  flex flex-col justify-center items-center">
          {/* <LeftColumn  /> */}
          {/* <LeftColumn currentImage={currentImage} steps={steps} /> */}
          <div className=" order-1 lg:order-2 col-span-3">
            {steps.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons]
              return (
                <div className="flex px-3 " key={index}>
                  <div className="relative rounded-full z-40">
                    <span className=" w-11 h-14 bg-white text-zinc-300 p-1 rounded-full absolute top-0 border-6 border-zinc-200 text-2xl flex justify-center items-center font-bold">
                     {item.step}
                    </span>
                    <Icon
                      ref={(el) => {
                        divStep.current[index] = el;
                      }}
                      className="w-11 h-14 bg-red-700 text-white p-1 rounded-full absolute top-0 border-6 border-red-100 shadow-xl/30 shadow-red-600"
                    />
                  </div>
                  <div
                    className={cn(
                      "flex pt-1 relative ",
                      steps.length === index + 1 ? "pl-6" : "visible"
                    )}
                  >
                    <div className="flex ">
                      <div
                        className={cn(
                          "h-[120px] w-1 bg-zinc-200 ml-5 z-0 ",
                          steps.length === index + 1 ? "hidden" : "visible"
                        )}
                      />
                      <div
                        ref={(el) => {
                          divLine.current[index] = el;
                        }}
                        className={cn(
                          " h-[120px] w-1 bg-red-700 -ml-1 z-0 origin-top",
                          steps.length === index + 1 ? "hidden" : "visible"
                        )}
                      />
                    </div>

                    <div
                      ref={(el) => {
                        divMainElement.current[index] = el;
                      }}
                      className="pl-10"
                    >
                      <h4 className="text-xl font-bold pb-1 text-zinc-900 ">{item.title}</h4>
                      <p className=" text-zinc-600 text-base">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-8 md:pl-4 pl-0 ">
              <RedButton
              className="py-4 text-lg"
                text="Start Process With Us"
                onClick={handleWhatsappClick}
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowThisWork;