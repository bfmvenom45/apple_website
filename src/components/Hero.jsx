import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"


const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSourceSet = () => {
     if (window.innerWidth < 760) {
       setVideoSrc(smallHeroVideo);
     } else {
       setVideoSrc(heroVideo);  
     }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSourceSet);
    return () => {
      window.removeEventListener('resize', handleVideoSourceSet);
    };
  }, []);

  useGSAP(() => {
  gsap.to('.hero-title', {opacity:1, y:0, duration:1, ease:'power3.out', delay:2.5}),
  gsap.to('#cta', {opacity:1, y: -50, duration:1, ease:'power3.out', delay:2.5})


 }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col ">
        <p className="hero-title ">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12 ">
            <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none w-full h-full object-contain">
              <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center  opacity-0 translate-y-20 ">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl text-gray mt-3">
          From $199/mo. or $999
        </p>
      </div>
    </section>
  )
}

export default Hero;