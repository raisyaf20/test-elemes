type props = {
  rating: number;
};

export default function Rating({ rating }: props) {
  return (
    <div className="flex items-center mt-1">
      {Array.from({ length: rating }).map((_, index) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          key={index}
          className="icon icon-tabler icon-tabler-star-filled text-yellow-500"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
            stroke-width="0"
            fill="currentColor"
          ></path>
        </svg>
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          key={index}
          className="icon icon-tabler text-gray-300 icon-tabler-star-filled"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
            stroke-width="0"
            fill="currentColor"
          ></path>
        </svg>
      ))}
    </div>
  );
}
