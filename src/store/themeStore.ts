import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({darkMode:false,
  toggleDarkMode:() => {
    set((state) => {
      const newMode = !state.darkMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      }else{
        document.documentElement.classList.remove("dark");
      }
      return {darkMode:newMode};
    });
  },
}));


export default useThemeStore;
