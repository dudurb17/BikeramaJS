import { createContext } from "react";
import { User } from "../../types/user";
import { UsersArray } from "../../types/usersArray";
import { Race } from "../../types/race";

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  userByName: (name: string) => Promise<User>;
  getAllUsers: () => Promise<UsersArray>;
  createNewRace: (race: Race) => Promise<Race>;
};

export const AuthContext = createContext<AuthContextType>(null!);
