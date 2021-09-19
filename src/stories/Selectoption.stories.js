import React from 'react';
import SelectOptions from '../Components/SelectOptions';

export default {
  title: 'selectOption',
  component: SelectOptions,
  decorators: [
    (story) => (
      <form
        className='container'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {story()}
      </form>
    ),
  ],
};

const Template = (args) => <SelectOptions {...args} />;

export const Default = Template.bind({});

Default.args = {};
