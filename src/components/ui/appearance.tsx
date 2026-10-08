import { createContext, useContext } from "react";

/**
 * Skala tampilan komponen ui:
 * - "app"   : theme proyek (font Inter, primary #2775BB, ukuran dasar 14)
 * - "modal" : theme bawaan modal lama (font inherit, primary #1976d2, ukuran dasar 13 -> ukuran rem x 13/14)
 * Konten modal imperatif (openModal) otomatis memakai "modal", sama seperti sebelumnya ThemeProvider di dalam modal.
 */
export type Appearance = "app" | "modal";

const AppearanceContext = createContext<Appearance>("app");

export const AppearanceProvider = AppearanceContext.Provider;

export const useAppearance = (override?: Appearance) => {
    const context = useContext(AppearanceContext);
    return override ?? context;
};
