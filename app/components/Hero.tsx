import React from "react";
import Image from "next/image";
import salad from "../assets/imgs/salad.png";

const Hero: React.FC = () => {
  return (
    <section className="mt-4">
      <div className="px-4 flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:px-6">
          <h1 className="max-w-md lg:text-6xl lg:pt-12 text-4xl text-primary font-semibold">
            Good Food Us Good Mood
          </h1>
        </div>
        <div className="sm:w-1/2 lg:grid lg:place-items-center mt-11 md:mt-0">
          <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px] rounded-full bg-zinc-50 grid place-items-center">
            <div className="w-[190px] md:w-[290px] lg:w-[412px] md:mx-auto">
              <Image
                src={salad}
                alt="hero image"
                height={"100"}
                width={"100"}
                layout="responsive"
              />
            </div>
            <div className="w-60 sm:w-72 h-20 flex preview items-center absolute bottom-5 -right-20 sm:right-0 md:bottom-8 md:-left-16">
              <div className="w-12 ml-6">
                <Image
                  src={salad}
                  alt="preview-rate"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <div className="ml-3">
                <h2 className="font-semibold text-sm">Green Salad Tomato</h2>
                <p className="text-xs text-secondary">Tomato</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 sm:-mt-36 lg:-mt-72 lg:w-1/2 lg:px-6">
          <p className="sm:max-w-xs lg:max-w-md text-secondary">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </p>
          <div className="flex gap-4 mt-5">
            <button className="w-[142px] bg-primary font-medium text-white h-[42px] rounded-full shadow-2xl">
              Register Now
            </button>
            <button className="w-24 h-[42px] rounded-full bg-zinc-100 font-medium text-dark">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
