import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BadgeComponent } from './badge';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent],
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
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  args: {
    text: 'Novo',
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    text: 'Alerta',
    color: 'danger',
  },
};
