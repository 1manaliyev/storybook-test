import type { Preview } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import "../src/styles/color-variables.css";
import "../src/styles/global.module.scss";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const bg = context.globals.backgrounds?.value;

      if (bg === "#232528") {
        return (
          <div className="dark">
            <MemoryRouter initialEntries={["/"]}>
              <Story />
            </MemoryRouter>
          </div>
        );
      } else {
        return (
          <div className="light">
            <MemoryRouter initialEntries={["/"]}>
              <Story />
            </MemoryRouter>
          </div>
        );
      }
    },
  ],
  parameters: {
    a11y: {
      disable: true,
    },
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