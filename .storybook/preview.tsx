import type { Preview } from '@storybook/react-vite'
import { DarkurProvider } from '../src/DarkurProvider/DarkurProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    decorators: [
      (Story) => (
        <DarkurProvider>
          <Story />
        </DarkurProvider>
      )
    ],
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;