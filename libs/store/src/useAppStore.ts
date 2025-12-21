import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AppStateType = {
  theme: 'light' | 'dark';
  setTheme?: (theme: 'light' | 'dark') => void;
};

export const useAppStore = create<AppStateType>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'app-storage',
    },
  ),
);
