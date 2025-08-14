import type { Meta, StoryObj } from '@storybook/react-vite';

type VariantMap = Record<string, string>;

interface ButtonProps {
  variant?: string;
  label?: string;
}

const Button = ({ variant = 'default', label = '' }: ButtonProps) => {
  const container = `min-w-32 min-h-10 px-2 py-2 rounded-xl cursor-pointer`;

  const variantMap: VariantMap = {
    primary: `text-white  hover:bg-sky-600 bg-sky-700`,
    secondary: `text-white  hover:bg-fuchsia-600 bg-fuchsia-700`,
    default: `text-black  hover:bg-slate-200 bg-slate-300`
  }

  return (
    <button className={`${container} ${variantMap[variant]}`}>{label}</button>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Elements/Button',
  component: Button,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  //   layout: 'centered',
  // },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: 'text' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { variant: 'string' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Save'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Upload'
  },
};

export const Default: Story = {
  args: {
    label: 'Cancel'
  }
};
