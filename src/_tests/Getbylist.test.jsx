import GetBylist from '../Components/GetBylist';
import '@testing-library/jest-dom/extend-expect';
import { screen, render, act, fireEvent } from '@testing-library/react';

describe('Get Weather by list', () => {
  it('Click on Submit', () => {
    const setUrl = jest.fn();
    render(<GetBylist setUrl={setUrl} />);
    const container = screen.getByTestId('GetBylists');
    const submitBtn = container.querySelector('#getWeather');
    fireEvent.submit(submitBtn);
  });
  // it('Check for Null Submit', () => {
  //   const  setUrl = jest.fn();
  //   render(<GetBylist setUrl={setUrl}/>);
  //     const container = screen.getByTestId('GetBylists');
  //     const submitBtn = container.querySelector('#getWeather');
  //     fireEvent.click(submitBtn);

  // });
});
