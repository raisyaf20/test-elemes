import bg from "../app/assets/imgs/bg-hero.png";
import pizaPar from "../app/assets/imgs/img3.png";
import pizaMeat from "../app/assets/imgs/img2.png";
import donKebab from "../app/assets/imgs/img6.png";
import sushi from "../app/assets/imgs/img5.png";
import choco from "../app/assets/imgs/img1.png";
import donatM from "../app/assets/imgs/img7.png";
import donatP from "../app/assets/imgs/img4.png";
import kathi from "../app/assets/imgs/img8.png";

const trending: trendingReceipt[] = [
  {
    img: pizaPar.src,
    title: "Pizza Paperoni",
    description: "Pizza",
    rating: 4,
    bgColor: "#E6F3F5",
  },
  {
    img: pizaMeat.src,
    title: "Pizza Meat",
    description: "Pizza",
    rating: 3,
    bgColor: "#E6F3F5",
  },
  {
    img: donKebab.src,
    title: "Doner Kebab",
    description: "Kebab",
    rating: 5,
    bgColor: "#E6F3F5",
  },
  {
    img: sushi.src,
    title: "Salmon Roll",
    description: "salmon",
    rating: 4,
    bgColor: "#F9EEF3",
  },
  {
    img: choco.src,
    title: "Cupcake Choco",
    description: "Cupcake",
    rating: 4,
    bgColor: "#F0FEEB",
  },
  {
    img: donatM.src,
    title: "Doughnut Milk",
    description: "Doughnut",
    rating: 5,
    bgColor: bg,
  },
  {
    img: donatP.src,
    title: "Doughnut Unicorn",
    description: "Doughnut",
    rating: 4,
    bgColor: "#F3F7D9",
  },

  {
    img: kathi.src,
    title: "Kathi Kebab",
    description: "Kebab",
    rating: 4,
    bgColor: "#EAEEFA",
  },
];
export default trending;
