import '../src/assets/main.css'
import { initialize, mswLoader } from 'msw-storybook-addon';
import { withThemeByClassName } from '@storybook/addon-themes';
import { h } from 'vue'

initialize();

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (story, context) => {
    return {
      setup() {
        return {}
      },
      render() {
        return h('div', {}, [h(story())])
      },
    }
  },
]

export default preview;
export const loaders = [mswLoader];