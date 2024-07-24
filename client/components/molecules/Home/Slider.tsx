"use client"
import { LeftArrow, RightArrow } from "@/assets"
import { useEffect, useState } from "react";

const slides = [
    { 
        image: "https://backpack.exchange/_next/image?url=%2Fhome-banner-refer.png&w=1920&q=75", 
        caption: "slide1",
        title: "Refer and Earn",
        desc: "Refer a friend and earn a percentage of their trading fees.",
        btn: "Manage Referrals"
    },
    { 
        image: "https://backpack.exchange/_next/image?url=%2Fhome-banner-cloud.jpg&w=1920&q=75", 
        caption: "slide2",
        title: "New Token: CLOUD",
        desc: "The CLOUD/USDC market is live.",
        btn: "Trade Now"
    }
]

export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);  

    useEffect(() => {
        let id = setInterval(nextSlide, 3000);

        return () => clearInterval(id);
    }, [])
  
    const nextSlide = () => {  
      setCurrentSlide((prev) => (prev + 1) % slides.length);  
    };  
  
    const prevSlide = () => {  
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);  
    };  
  
    return (
        <div className="relative w-full overflow-hidden">   
            <div className="flex transition-transform duration-700 ease-in-out w-full" 
                style={{ transform: `translateX(-${currentSlide * 100}%)`}}
            >  
                {slides.map((slide, index) => (  
                    <div key={index} className="flex-shrink-0 relative w-full">   
                        <img src={slide.image} alt={slide.caption} className="w-full object-cover" />  

                        <div className="absolute top-1/2 left-14">
                            <p className="text-white font-semibold text-[46px]">{ slide.title }</p>
                            <p className="text-lg text-gray-300"> { slide.desc } </p>

                            <button 
                                className="mt-4 bg-white text-black rounded-xl px-5 font-semibold py-3"
                            >
                                {slide.btn}
                            </button>
                        </div>
                    </div>  
                ))}  
            </div> 

            <button onClick={prevSlide}>  
                <LeftArrow className="absolute top-1/2 left-4 text-gray-400 hover:text-gray-300 transition-all duration-200" />
            </button>
            <button onClick={nextSlide} >
                <RightArrow className="absolute top-1/2 right-4 text-gray-400 hover:text-gray-300 transition-all duration-200" />
            </button>  
        </div>  
    )
}
