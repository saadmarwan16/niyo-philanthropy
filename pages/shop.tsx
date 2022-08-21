import type { NextPage } from "next";
import Meta from "../src/shared/components/Meta";

interface ShopPageProps {}

const Shop: NextPage<ShopPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Gallery" />

      <main>Buy Our Merch View is working</main>
    </div>
  );
};

export default Shop;
