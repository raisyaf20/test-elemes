import Image from "next/image";
import logo from "../assets/imgs/logo.png";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="my-20 md:mt-32 md:my-0 text-secondary">
      <div className="flex flex-wrap bg-[#F9FFF6] rounded-md p-5 md:gap-5 lg:gap-10">
        <div className="p-3 w-full md:w-[335px]">
          <Image src={logo} alt="logo" width={200} height={110} />
          <p className="text-sm mt-5">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="flex gap-1 mt-2">
            <div className="w-10 h-10 rounded-full grid place-items-center group hover:bg-primary">
              <Link href={"/#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail text-primary group-hover:text-white"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </Link>
            </div>
            <div className="w-10 h-10 rounded-full grid place-items-center group hover:bg-primary">
              <Link href={"/#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone text-primary group-hover:text-white"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>
              </Link>
            </div>
            <div className="w-10 h-10 rounded-full grid place-items-center group hover:bg-primary">
              <Link href={"/#"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram text-primary group-hover:text-white"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-40 lg:w-52">
          <h2 className="text-dark text-lg font-medium">Categories</h2>
          <ul className="mt-8 text-sm flex flex-col gap-3">
            <li>Cupcake</li>
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Salmon</li>
            <li>Doughnut</li>
            <li></li>
          </ul>
        </div>
        <div className="w-1/2 md:w-[170px] lg:w-60">
          <h2 className="text-dark text-lg font-medium">About Us</h2>
          <ul className="mt-8 text-sm flex flex-col gap-3">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Report Problem</li>
          </ul>
        </div>
        <div className="w-full mt-7 md:mt-0 md:w-auto lg:w-40 lg:ml-12">
          <h2 className="text-dark text-lg font-medium">Newsletter</h2>
          <p className="mt-8 text-sm w-56">
            Get now free 50% discount for alll products on your first order
          </p>
          <form className="mt-3">
            <div className="flex">
              <input
                type="email"
                className="rounded-md border rounded-r-none p-1.5 w-[190px] focus:outline-none focus:ring focus:ring-primary placeholder-slate-400 placeholder:text-sm placeholder:text-dark "
                placeholder="Your email address"
              />
              <button className="bg-primary p-[7px] rounded-r-md text-white font-medium">
                Send
              </button>
            </div>
          </form>
          <div className="mt-3">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail text-primary"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              elemesid@gmail.com
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone text-primary"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
              <span> 0888 1111 2222 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 grid place-items-center">
        <p className=" font-normal text-xs text-center">
          &copy; <span>{year}</span> Elemes id. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
