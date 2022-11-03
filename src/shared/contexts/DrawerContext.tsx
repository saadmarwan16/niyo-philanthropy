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
import { useAuthContext } from "../../modules/auth/AuthContext";
import MobileLoginRegisterButton from "../components/MobileLoginRegisterButton";
import { GrFormClose } from "react-icons/gr";
import DrawerNavItems from "../components/DrawerNavItems";
import DrawerProfileLink from "../components/DrawerProfileLink";
import DrawerProfileImageUpdate from "../components/DrawerProfileImageUpdate";

const DrawerContext = createContext<IDrawerContext>({
  toggleDrawer: () => {},
});

export const useDrawerContext = () => useContext(DrawerContext);

const DrawerContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useAuthContext();

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
        customIdSuffix="-mobile-drawer"
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
              <div className="flex flex-col items-center justify-center gap-4">
                <DrawerProfileImageUpdate user={user} setUser={setUser} />

                <DrawerProfileLink user={user} />
              </div>
            </div>
          ) : (
            <MobileLoginRegisterButton />
          )}

          <DrawerNavItems />
        </div>
      </Drawer>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
