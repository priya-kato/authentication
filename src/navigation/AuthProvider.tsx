import React, {createContext, useState, ReactNode} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthContextProps {
  user: any; // Replace 'any' with the actual user type
  setUser: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual user type
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

/**
 * This provider is created
 * to access user in whole app
 */
export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  login: async () => {},
  register: async () => {},
  logout: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with the actual user type
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            const loggeduser = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
          } catch (e) {
            console.log(e, 'loginerr');
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
