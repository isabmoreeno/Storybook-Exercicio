import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Badge } from './badge';

const meta: Meta<Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    moduleMetadata({
      imports: [Badge],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
  },
};
export default meta;
type Story = StoryObj<Badge>;

export const Primary: Story = {
  args: {
    text: 'Novo',
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    text: 'Perigo',
    color: 'danger',
  },
};

export const Success: Story = {
  args: {
    text: 'Sucesso',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    text: 'Alerta',
    color: 'warning',
  },
};

