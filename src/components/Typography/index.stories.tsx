import { Meta, StoryObj } from "@storybook/react/*";
import Typography from ".";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Title1: Story = {
  args: {
    children: "Text example",
    variant: "t1",
  },
};

export const Title2: Story = {
  args: {
    children: "Text example",
    variant: "t1",
  },
};

export const Title3: Story = {
  args: {
    children: "Text example",
    variant: "t3",
  },
};

export const Title4: Story = {
  args: {
    children: "Text example",
    variant: "t4",
  },
};

export const Headline1: Story = {
  args: {
    children: "Text example",
    variant: "h1",
  },
};

export const Headline2: Story = {
  args: {
    children: "Text example",
    variant: "h2",
  },
};

export const Accent1: Story = {
  args: {
    children: "Text example",
    variant: "a1",
  },
};

export const BodyText: Story = {
  args: {
    children: "Text example",
    variant: "b1",
  },
};

export const CaptionCaps: Story = {
  args: {
    children: "Text example",
    variant: "b2",
  },
};

export const FootnoteParagraph: Story = {
  args: {
    children: "Text example",
    variant: "f1",
  },
};

export const AllTypography: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Typography variant="t1">T1 Title 1</Typography>
      <Typography variant="t2">T2 Title 2</Typography>
      <Typography variant="t3">T3 Title 3</Typography>
      <Typography variant="t4">T4 Title 4</Typography>
      <Typography variant="h1">H1 Headline 1</Typography>
      <Typography variant="h2">H2 Headline 2</Typography>
      <Typography variant="a1">A1 Accent 1</Typography>
      <Typography variant="b1">B1 Body text</Typography>
      <Typography variant="b2">B2 Caption Caps</Typography>
      <Typography variant="f1">F1 Footnote paragraph </Typography>
    </div>
  ),
};
