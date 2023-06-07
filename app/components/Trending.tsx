"use client";

import trending from "@/types/trending";
import Image from "next/image";
import Rating from "./Rating";

export default function Trending() {
  return (
    <section className="pt-14 lg:pt-32 lg:px-7">
      <div className="container mx-auto">
        <h2 className="text-dark text-2xl lg:max-w-md font-medium lg:text-4xl">
          Browser Our Trending <span className="text-primary">Receipt</span>
        </h2>
      </div>
      <div className="mt-12 flex gap-4 justify-center flex-wrap">
        {trending?.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full sm:w-64 h-64 rounded-lg shadow-lg object-cover object-center overflow-hidden"
              style={{
                background:
                  i === 5 ? `url(${e.bgColor.src}), #F3F7D9` : e.bgColor,
                backdropFilter: "blur(5.5px)",
              }}
            >
              <div
                className="w-full h-full p-4"
                style={{
                  backgroundColor: i === 5 ? "rgb(255 255 255/0.95)" : "",
                }}
              >
                <div className="w-24">
                  <Image
                    src={e.img ? e.img : ""}
                    layout="responsive"
                    alt={e.title}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xl font-medium mt-6">{e.title}</h3>
                <p className="text-base font-medium text-primary mt-1">
                  {e.description}
                </p>
                <Rating rating={e.rating} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-20">
        <button className="w-[160px] h-[50px] text-white shadow-md rounded-full bg-primary">
          ALL Receipt
        </button>
      </div>
    </section>
  );
}
