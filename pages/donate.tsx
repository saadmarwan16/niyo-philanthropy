import type { NextPage } from "next";
import Meta from "../src/shared/components/Meta";

interface DonatePageProps {}

const Donate: NextPage<DonatePageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Donate" />

      <main>Donate View is working</main>
    </div>
  );
};

export default Donate;
