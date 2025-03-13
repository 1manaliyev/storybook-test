import type { Preview } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import "../src/styles/global.module.scss";

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#fff",
        },
        {
          name: "dark",
          value: "#232528",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: "auto",
      },
    },
  },
};

export default preview;