import '../src/assets/main.css'
import { initialize, mswLoader } from 'msw-storybook-addon';
import { h } from 'vue'
import { createThemeProvider } from '../src/providers/theme'

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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme switcher',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
    },
  },
}

export const decorators = [
  (story, context) => {
    document.documentElement.className = context.globals.theme ?? 'light'

    return {
      setup() {
        createThemeProvider(context.globals.theme)
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