import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Header from "../../src/shared/components/Header";
import DonationSection from "../../src/modules/profile/components/DonationSection";
import ProfileSection from "../../src/modules/profile/components/ProfileSection";
import SubscriptionSection from "../../src/modules/profile/components/SubscriptionSection";
import WalletSection from "../../src/modules/profile/components/WalletSection";
import Meta from "../../src/shared/components/Meta";
import { TProfileTab } from "../../src/shared/types/types";
import Avatar from "../../src/shared/components/Avatar";
import { useAuthContext } from "../../src/modules/auth/AuthContext";
import { BASE_URL } from "../../src/constants/urls";
import PasswordSection from "../../src/modules/profile/components/PasswordSection";
import validateServerUser from "../../src/shared/utils/validateServerUser";
import profileRepository from "../../src/modules/profile/data/repositories/profile_repository";

interface UserProfilePageProps {}

const UserProfile: NextPage<UserProfilePageProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState<TProfileTab>("profile");
  const { user } = useAuthContext();

  const updateCurrentTab = (tab: TProfileTab) => setCurrentTab(tab);

  return (
    <div>
      <Meta titlePrefix="User Profile" />

      <div className="flex flex-col gap-16">
        <div className="px-4 py-1 text-white md:py-4 bg-primary">
          <Header />
        </div>

        <main className="flex flex-col gap-6 pb-8 md:pb-12 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 md:flex-row profile-section-horizontal-padding">
          <div className="tabs md:hidden">
            <a
              onClick={() => updateCurrentTab("profile")}
              className={`tab tab-bordered ${
                currentTab === "profile" && "tab-active"
              }`}
            >
              Profile
            </a>
            <a
              onClick={() => updateCurrentTab("passwords")}
              className={`tab tab-bordered ${
                currentTab === "passwords" && "tab-active"
              }`}
            >
              Change Password
            </a>
            <a
              onClick={() => updateCurrentTab("donations")}
              className={`tab tab-bordered ${
                currentTab === "donations" && "tab-active"
              }`}
            >
              My Donations
            </a>
            <a
              onClick={() => updateCurrentTab("subscriptions")}
              className={`tab tab-bordered ${
                currentTab === "subscriptions" && "tab-active"
              }`}
            >
              My Subscriptions
            </a>
            <a
              onClick={() => updateCurrentTab("wallet")}
              className={`tab tab-bordered ${
                currentTab === "wallet" && "tab-active"
              }`}
            >
              My Wallet
            </a>
          </div>

          <div className="flex-col hidden gap-8 px-4 py-8 border border-gray-500 rounded-lg md:flex md:w-2/5 lg:w-2/6">
            <div className="flex flex-col items-center gap-4">
              <Avatar
                alt="User Profile Image"
                url={
                  user?.profile_image?.url
                    ? `${BASE_URL}${user.profile_image.url}`
                    : "/images/no_profile_image.webp"
                }
                width="w-32"
              />
              <div className="text-center">
                <p className="heading3">{user?.full_name}</p>
                <p>{user?.email}</p>
                <p className="text-sm italic text-secondary">
                  @{user?.username}
                </p>
              </div>
            </div>

            <ul className="w-full menu bg-base-100">
              <li className={`${currentTab === "profile" && "bordered"}`}>
                <a onClick={() => updateCurrentTab("profile")}>Profile</a>
              </li>
              <li className={`${currentTab === "passwords" && "bordered"}`}>
                <a onClick={() => updateCurrentTab("passwords")}>
                  Change Password
                </a>
              </li>
              <li className={`${currentTab === "donations" && "bordered"}`}>
                <a onClick={() => updateCurrentTab("donations")}>
                  My Donations
                </a>
              </li>
              <li className={`${currentTab === "subscriptions" && "bordered"}`}>
                <a onClick={() => updateCurrentTab("subscriptions")}>
                  My Subscriptions
                </a>
              </li>
              <li className={`${currentTab === "wallet" && "bordered"}`}>
                <a onClick={() => updateCurrentTab("wallet")}>My Wallet</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-3/5 lg:w-4/6">
            {currentTab === "profile" && <ProfileSection />}

            {currentTab === "passwords" && <PasswordSection />}

            {currentTab === "donations" && <DonationSection />}

            {currentTab === "subscriptions" && <SubscriptionSection />}

            {currentTab === "wallet" && <WalletSection />}
          </div>
        </main>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = (ctx) => {
  return validateServerUser(ctx, async (token: string) => {
    const id = ctx.query.id as string;
    const results = await profileRepository.getOne("1", token);

    return {
      props: {
        id,
        ...results,
      },
    };
  });
};

export default UserProfile;
