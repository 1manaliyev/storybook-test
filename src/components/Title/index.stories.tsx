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

export const B1: Story = {
  args: {
    children: "Text example",
    variant: "b1",
  },
};

export const B1_1: Story = {
  args: {
    children: "Text example",
    variant: "b1_1",
  },
};

export const B2: Story = {
  args: {
    children: "Text example",
    variant: "b2",
  },
};

export const B3: Story = {
  args: {
    children: "Text example",
    variant: "b3",
  },
};

export const B4: Story = {
  args: {
    children: "Text example",
    variant: "b4",
  },
};

export const B5: Story = {
  args: {
    children: "Text example",
    variant: "b5",
  },
};

export const B6: Story = {
  args: {
    children: "Text example",
    variant: "b6",
  },
};

export const B7: Story = {
  args: {
    children: "Text example",
    variant: "b7",
  },
};

export const B8: Story = {
  args: {
    children: "Text example",
    variant: "b8",
  },
};

export const AllTypography: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Typography variant="h1Title">H1 Heading 1</Typography>
      <Typography variant="h2Title">H2 Heading for mobile</Typography>
      <Typography variant="h3Title">H3 Heading 1</Typography>
      <Typography variant="h4Title">H4 NFT name on collections page</Typography>
      <Typography variant="h5Title">H5 Heading 1</Typography>
      <Typography variant="h6Title">H6 NFT Collections Performance</Typography>
      <Typography variant="h7Title">
        H7 Display of purchased tokens + time until the end of the auction
      </Typography>
      <Typography variant="h8Title">H8 Heading 1</Typography>
      <Typography variant="h9Title">H9 Heading 1</Typography>
      <Typography variant="h10Title">
        H10 Text in header, on buttons, in NFT collections, accordion, in chips
        (Choice chips)
      </Typography>
      <Typography variant="h10_1Title">H10.1 Heading 1</Typography>
      <Typography variant="h11Title">H11 Footer Heading</Typography>
      <Typography variant="h12Title">H12 Heading 1</Typography>
      <Typography variant="b1">
        B1 Main text, balance display, sidebar
      </Typography>
      <Typography variant="b1_1">B1.1 Heading 1</Typography>
      <Typography variant="b2">B2 Heading 1</Typography>
      <Typography variant="b3">
        B3 Names of NFT collections, text on the additional information button
      </Typography>
      <Typography variant="b4">B4 Heading 1</Typography>
      <Typography variant="b5">B5 Heading 1</Typography>
      <Typography variant="b6">B6 Heading 1</Typography>
      <Typography variant="b7">
        B7 Search button text, subtitle in NFT collections, main text footer
      </Typography>
      <Typography variant="b8">B8 Heading 1</Typography>
      <Typography variant="b9">
        B9 Explanatory text for NFT collection indicators
      </Typography>
    </div>
  ),
};
