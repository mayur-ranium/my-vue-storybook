// src/providers/theme.js
import { provide, ref } from 'vue'

export const createThemeProvider = (initialTheme = 'light') => {
  const theme = ref(initialTheme)

  const setTheme = (value) => {
    theme.value = value
    document.documentElement.className = value
  }

  setTheme(initialTheme)

  provide('theme', {
    theme,
    setTheme,
  })
}