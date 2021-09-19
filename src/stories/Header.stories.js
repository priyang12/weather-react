import Header from '../Components/Header';
import React from 'react';
import cloud from '../image/cloud-min.png';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: 'Weather',
  image: {
    src: cloud,
    alt: 'Weather Logo',
  },
};

export const LogoName = Template.bind({});

LogoName.args = {
  ...Default.args,
  logo: 'Know Weather',
};
