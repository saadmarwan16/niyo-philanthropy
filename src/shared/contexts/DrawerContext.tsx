import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { IDrawerContext } from "../../shared/types/interface";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GrClose, GrFormClose } from "react-icons/gr";
import navItems from "../../constants/nav_items";
import Link from "next/link";
import { useAuthContext } from "../../modules/auth/AuthContext";
import Avatar from "../components/Avatar";
import Routes from "../../constants/routes";
import { BASE_URL } from "../../constants/urls";
import MobileLoginRegisterButton from "../components/MobileLoginRegisterButton";
import { MdDelete, MdModeEdit } from "react-icons/md";
import profileController from "../../modules/profile/controllers/profile_controller";
import { TiUserAdd } from "react-icons/ti";

const DrawerContext = createContext<IDrawerContext>({
  toggleDrawer: () => {},
});

export const useDrawerContext = () => useContext(DrawerContext);

const DrawerContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawer: toggleDrawer,
      }}
    >
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        size={280}
        direction="left"
        className="hide-drawer"
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-end mb-14">
            <GrFormClose
              className="text-5xl cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
          {user ? (
            <div>
              <Link href={Routes.USER_PROFILE(user.username)}>
                <a>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {user?.profile_image?.url ? (
                        <>
                          <button className="text-white btn btn-primary btn-square">
                            <MdModeEdit
                              className="text-2xl hover:cursor-pointer hover:text-accent"
                              onClick={() => profileController.updateImage()}
                            />
                          </button>

                          <button className="text-white btn btn-primary btn-square">
                            <MdDelete
                              className="text-2xl hover:cursor-pointer hover:text-accent"
                              onClick={() => profileController.deleteImage()}
                            />
                          </button>
                        </>
                      ) : (
                        <button className="text-white btn btn-primary btn-square">
                          <TiUserAdd
                            className="text-3xl hover:cursor-pointer hover:text-accent"
                            onClick={() => profileController.addImage()}
                          />
                        </button>
                      )}
                    </div>
                    <div className="flex flex-col items-center">
                      <Avatar
                        url={
                          user.profile_image?.url
                            ? `${BASE_URL}${user.profile_image.url}`
                            : "/images/no_profile_image.webp"
                        }
                        width="w-20"
                        alt="User Profile Image"
                      />

                      <div className="flex flex-col mt-2 text-center text-black">
                        <span className="font-semibold line-clamp-1">
                          {user.full_name}
                        </span>
                        <small className="text-base italic w-[280px] line-clamp-1">
                          @{user.username}
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <MobileLoginRegisterButton />
          )}
          <ul className="w-full p-2 menu rounded-box">
            {navItems.map((item, index) => (
              <li key={index} className="">
                <Link href={item.route}>
                  <a className="text-2xl">
                    {item.icon}
                    <span className="text-xl">{item.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
