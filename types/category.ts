import cake from "../app/assets/imgs/pancake.svg";
import piza from "../app/assets/imgs/pizza.svg";
import kebab from "../app/assets/imgs/kebab.svg";
import salmon from "../app/assets/imgs/salmon.svg";
import donat from "../app/assets/imgs/donat.svg";

const category: categoryReceipt[] = [
  {
    img: cake,
    title: "Cupcake",
    items: 22,
    bgColor: "#F0FEEB",
  },
  {
    img: piza,
    title: "Pizza",
    items: 25,
    bgColor: "#E4F2F4",
  },
  {
    img: kebab,
    title: "Kebab",
    items: 12,
    bgColor: "#EAEEFA",
  },
  {
    img: salmon,
    title: "Salmon",
    items: 22,
    bgColor: "#F9EEF3",
  },
  {
    img: donat,
    title: "Doughnut",
    items: 11,
    bgColor: "#F3F7D9",
  },
  {
    img: false,
    title: false,
    items: false,
    bgColor: "#F0FEEB",
  },
];

export default category;
