import type { Preview } from '@storybook/react'
import React from 'react'
import '../dist/index.css'
import { Toaster } from 'sonner'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
}

export default preview
