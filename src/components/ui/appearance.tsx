import { createContext, useContext } from "react";

export type Appearance = "app" | "modal";

const AppearanceContext = createContext<Appearance>("app");

export const AppearanceProvider = AppearanceContext.Provider;

export const useAppearance = (override?: Appearance) => {
    const context = useContext(AppearanceContext);
    return override ?? context;
};
