import { FunctionComponent } from "react";
import HomeSingleCategory from "./HomeSingleCategory";
import { GiHumanPyramid } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import { IoSchool, IoFastFood } from "react-icons/io5";
import Link from "next/link";
import Routes from "../../../constants/routes";
import { Categories } from "../data/models/home_page_model";

interface HomeCategoriesProps {
  data: Categories;
}

const HomeCategories: FunctionComponent<HomeCategoriesProps> = ({ data }) => {
  return (
    <section className="flex flex-col gap-16 py-16 sm:gap-24 md:flex-row home-section-horizontal-padding">
      <div className="grid items-center justify-center w-full grid-cols-2 gap-8 place-items-center">
        <HomeSingleCategory
          title="Human"
          description={data.human}
          icon={<GiHumanPyramid />}
          iconBackgroundColor="bg-primary"
          iconColor="text-primary"
        />
        <HomeSingleCategory
          title="Medicine"
          description={data.medicine}
          icon={<AiFillMedicineBox />}
          iconBackgroundColor="bg-secondary"
          iconColor="text-secondary"
        />
        <HomeSingleCategory
          title="Study"
          description={data.study}
          icon={<IoSchool />}
          iconBackgroundColor="bg-secondary"
          iconColor="text-secondary"
        />
        <HomeSingleCategory
          title="Food"
          description={data.food}
          icon={<IoFastFood />}
          iconBackgroundColor="bg-primary"
          iconColor="text-primary"
        />
      </div>

      <div className="flex flex-col w-full gap-10 text-gray-500 sm:gap-12 md:gap-16">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h3 className="!font-medium heading3">CATEGORIES</h3>
          <h1 className="heading1 !font-medium text-black mb-2 sm:mb-4">
            {data.title}
          </h1>
          <p>{data.description}</p>
        </div>
        <Link href={Routes.DONATE}>
          <a className="custom-btn-secondary w-fit">Donate Now</a>
        </Link>
      </div>
    </section>
  );
};

export default HomeCategories;
