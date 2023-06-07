"use client";
import { useState, useRef } from "react";
import category from "@/types/category";
import Image from "next/image";

export default function Category() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };
  return (
    <section className="mt-11 px-7">
      <div className="container mx-auto">
        <div>
          <h2 className="text-dark text-2xl lg:max-w-md font-medium lg:text-4xl">
            Browser Our Category <span className="text-primary">Receipt</span>
          </h2>
        </div>
        <div
          ref={containerRef}
          style={{ scrollLeft: scrollPosition }}
          className="flex w-full transition overflow-x-auto overflow-y-hidden lg:overflow-x-hidden p-4 lg:justify-end gap-4 mt-10"
        >
          {category?.map((e, i) => (
            <div
              key={i}
              className={`w-56 h-44 flex-shrink-0 rounded-md bg-opacity-80 transition duration-300 hover:scale-110 flex flex-col items-center justify-center`}
              style={{
                backgroundColor: e.bgColor,
              }}
            >
              {e.img ? (
                <Image
                  src={e.img}
                  alt={e.title ? e.title : ""}
                  width={45}
                  height={10}
                />
              ) : null}
              <h1 className="font-medium text-dark text-base mt-5">
                {e.title}
              </h1>
              {e.items ? (
                <p className="mt-1 text-dark">{e.items} Items</p>
              ) : (
                <h1>Coming Soon</h1>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-9">
          <button
            onClick={handlePrevious}
            className="btn-sm bg-primary flex text-white gap-3 justify-center items-center"
          >
            {" "}
            <div className="grid place-items-center w-8 h-8 rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15 6l-6 6l6 6"></path>
              </svg>
            </div>{" "}
            Prev
          </button>
          <button
            onClick={handleNext}
            className="btn-sm bg-primary flex gap-1 justify-center items-center text-white"
          >
            Next{" "}
            <div className="w-8 h-8 grid place-items-center rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
