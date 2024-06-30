
import { useEffect } from "react";
import { chameleonImg } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Lizard = () => {

useEffect(() => {
  gsap.fromTo(
    ".lizard",
    {
      opacity: 0,
      scale: 2,
    },
    {
      opacity: 1,
      scale: 1, // Change this to 1 to scale down to normal size
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".lizard",
        start: "top bottom", // Adjust this as needed
        end: "center center", // Adjust this as needed
        scrub: true, // Smooth scrolling animation
      },
    }
  );
}, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width1">
        <div className="text-4xl md:text-6xl font-semibold ">
          A camera that captures your wildest imagination.
        </div>
        <p className="text-gray mt-10 text-2xl">
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system.
        </p>
        <div className="lizard">
          <img src={chameleonImg} alt="chameleon" width={1500} height={1500} />
        </div>
      </div>
    </section>
  );
};

export default Lizard;
