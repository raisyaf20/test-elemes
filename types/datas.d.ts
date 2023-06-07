interface categoryReceipt {
  img: string | false;
  title: string | false;
  items: number | false;
  bgColor: string;
}

interface trendingReceipt {
  img: string | false;
  title: string;
  description: string;
  rating: number;
  bgColor: string | Array;
}
