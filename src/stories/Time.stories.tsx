import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Time, TimeProps } from '../components/Time/Time';

export default {
  title: 'Components/Time',
  component: Time,
  argTypes: {
    time: {
      control: 'time',
    },
  },
} as Meta;

const Template: Story<TimeProps> = (args) => <Time {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  time: new Date(),
};
