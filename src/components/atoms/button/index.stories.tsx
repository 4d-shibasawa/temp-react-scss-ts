import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './';

const Meta: ComponentMeta<typeof Button> = {
  title: 'Components/atoms/Button',
  component: Button,
};
export default Meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  disabled: false,
  children: 'Button Name',
};
