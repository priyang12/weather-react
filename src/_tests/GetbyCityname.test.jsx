import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import GetbyCityname from '../Components/GetbyCityname';

describe('Check for get by Cityname id working or not', () => {
  let container;
  let setUrl;
  beforeEach(() => {
    setUrl = jest.fn();
    render(<GetbyCityname setUrl={setUrl} />);
    container = screen.getByTestId('getbycity');
  });
  afterAll(() => {
    container = null;
    setUrl = null;
  });

  it('check If Text Input is Working', () => {
    const inputs = container.querySelectorAll('input');
    const CityName = inputs[0];
    fireEvent.change(CityName, { target: { value: 'Surat' } });
    expect(CityName.value).toBe('Surat');
  });
  it('Button layout', () => {
    const inputs = container.querySelectorAll('input');
    const WeatherBtn = inputs[1];
    expect(WeatherBtn.className).toMatch(/btn/);
    expect(WeatherBtn.className).toMatch('btn-light');
  });
  it('Form Inputs calls submit funtion and null check', () => {
    const inputs = container.querySelectorAll('input');
    const CityName = inputs[0];

    //If No input It should not Fire
    fireEvent.click(container);
    expect(setUrl).not.toBeCalled();

    fireEvent.change(CityName, { target: { value: 'Surat' } });
    expect(CityName.value).toBe('Surat');
    fireEvent.submit(container);
    expect(setUrl).toBeCalled();
  });
});
