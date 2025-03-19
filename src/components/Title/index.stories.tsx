import { Meta, StoryObj } from "@storybook/react/*";
import Typography from ".";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: {
    children: "Text example",
    variant: "h1Title",
  },
};

export const H2: Story = {
  args: {
    children: "Text example",
    variant: "h2Title",
  },
};

export const H3: Story = {
  args: {
    children: "Text example",
    variant: "h3Title",
  },
};

export const H4: Story = {
  args: {
    children: "Text example",
    variant: "h4Title",
  },
};

export const H5: Story = {
  args: {
    children: "Text example",
    variant: "h5Title",
  },
};

export const H6: Story = {
  args: {
    children: "Text example",
    variant: "h6Title",
  },
};

export const H7: Story = {
  args: {
    children: "Text example",
    variant: "h7Title",
  },
};

export const H8: Story = {
  args: {
    children: "Text example",
    variant: "h8Title",
  },
};

export const H9: Story = {
  args: {
    children: "Text example",
    variant: "h9Title",
  },
};

export const H10: Story = {
  args: {
    children: "Text example",
    variant: "h10Title",
  },
};

export const H10_1: Story = {
  args: {
    children: "Text example",
    variant: "h10_1Title",
  },
};

export const H11: Story = {
  args: {
    children: "Text example",
    variant: "h11Title",
  },
};

export const H12: Story = {
  args: {
    children: "Text example",
    variant: "h12Title",
  },
};

export const AllTypography: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div>
        <h3>H1 Заголовок 1</h3>
        <Typography variant="h1Title">Text example</Typography>
      </div>
      <div>
        <h3>H2 Заголовок для мобилки</h3>
        <Typography variant="h2Title">Text example</Typography>
      </div>
      <div>
        <h3>H3 Заголовок 1</h3>
        <Typography variant="h3Title">Text example</Typography>
      </div>
      <div>
        <h3>H4 Название NFT на стр коллекций</h3>
        <Typography variant="h4Title">Text example</Typography>
      </div>
      <div>
        <h3>H5 Заголовок 1</h3>
        <Typography variant="h5Title">Text example</Typography>
      </div>
      <div>
        <h3>H6 Показатели NFT коллекций</h3>
        <Typography variant="h6Title">Text example</Typography>
      </div>
      <div>
        <h3>H7 Отображение купленных токенов
        +время до окончания аукциона</h3>
        <Typography variant="h7Title">Text example</Typography>
      </div>
      <div>
        <h3>H8 Заголовок 1</h3>
        <Typography variant="h8Title">Text example</Typography>
      </div>
      <div>
        <h3>H9 Заголовок 1</h3>
        <Typography variant="h9Title">Text example</Typography>
      </div>
      <div>
        <h3>H10 Текст в хедере, на кнопках, в NFT коллекций,
        аккордеон, в фишках (Choice chips)</h3>
        <Typography variant="h10Title">Text example</Typography>
      </div>
      <div>
        <h3>H10.1 Заголовок 1</h3>
        <Typography variant="h10_1Title">Text example</Typography>
      </div>
      <div>
        <h3>H11 Заголовок футера</h3>
        <Typography variant="h11Title">Text example</Typography>
      </div>
      <div>
        <h3>H12 Заголовок 1</h3>
        <Typography variant="h12Title">Text example</Typography>
      </div>
    </div>
  ),
};
