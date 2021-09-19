import Display from '../Components/Display';

export default {
  title: 'Display',
  component: Display,
};

const weatherInfo = {
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10n',
    },
  ],
  main: {
    temp: 301.14,
    feels_like: 305.69,
    temp_min: 301.14,
    temp_max: 301.14,
    pressure: 1004,
    humidity: 83,
  },
  visibility: 6000,
  wind: {
    speed: 2.06,
    deg: 210,
  },
  name: 'Surat',
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});

Default.args = {
  weatherDetails: weatherInfo,
};

export const ErrorHandle = Template.bind({});

ErrorHandle.args = {
  weatherDetails: {
    main: {
      temp: 301.14,
      feels_like: 305.69,
      temp_min: 301.14,
      temp_max: 301.14,
      pressure: 1004,
      humidity: 83,
    },
    visibility: 6000,
    wind: {
      speed: 2.06,
      deg: 210,
    },
    name: 'Surat',
  },
};

export const NotAvaliable = Template.bind({});

NotAvaliable.args = {
  weatherDetails: {
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10n',
      },
    ],
    main: {
      temp: 301.14,
      feels_like: 305.69,
      temp_min: 301.14,
    },
    visibility: 6000,
    wind: {
      speed: 2.06,
      deg: 210,
    },
    name: 'Surat',
  },
};

export const NoData = Template.bind({});

NoData.args = {
  weatherDetails: null,
};
