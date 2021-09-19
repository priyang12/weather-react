import GetByList from '../Components/GetBylist';
import React from 'react';

export default {
  title: 'getbylist',
  component: GetByList,
  decorators: [
    (story) => (
      <div
        className='container'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {story()}
      </div>
    ),
  ],
};

const Template = (args) => <GetByList {...args} />;

export const Default = Template.bind({});

Default.args = {};
