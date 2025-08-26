import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Card } from './card';

const meta: Meta<Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [
    moduleMetadata({
      declarations: [Card],
      imports: [CommonModule],
    }),
  ], 
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageUrl: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<Card>;

export const Default: Story = {
  args: {
    title: 'Título do Card',
    content: 'Este é um texto de exemplo para o conteúdo do card.',
    imageUrl: 'https://placehold.co/300x150',
  },
};

export const SemImagem: Story = {
  args: {
    title: 'Card Sem Imagem',
    content: 'Este card não possui uma imagem no topo.',
  },
};
