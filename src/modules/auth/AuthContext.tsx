import { parseCookies, setCookie } from "nookies";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAuthContext } from "../../shared/types/interface";
import { AuthModel, ConvertAuthModel } from "./data/models/AuthModel";

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: (user) => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthModel | null>(null);
  const [userCookies, setUserCookies] = useState(parseCookies().user);

  useEffect(() => {
    if (userCookies) {
      setUser(ConvertAuthModel.toAuthModel(userCookies));
    } else {
      setUser(null);
    }
  }, [userCookies]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: (user) => {
          const userString = JSON.stringify(user);
          setCookie(null, "user", userString, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          });
          setUserCookies(userString);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
