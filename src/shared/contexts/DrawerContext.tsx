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

const DrawerContext = createContext<IDrawerContext>({
  toggleDrawer: () => {},
});

export const useDrawerContext = () => useContext(DrawerContext);

const DrawerContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
        size={500}
        direction="left"
        className="hide-drawer"
      >
        <button onClick={toggleDrawer}>Close</button>
        <div>Hello World</div>
      </Drawer>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
