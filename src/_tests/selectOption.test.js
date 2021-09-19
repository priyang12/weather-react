import '@testing-library/jest-dom/extend-expect';
import { screen, render, fireEvent, act } from '@testing-library/react';
import SelectOptions from '../Components/SelectOptions';

describe('Select option', () => {
  it('check for rendering', () => {
    const setvalue = jest.fn();
    const name = 'country';
    const url = '';
    render(<SelectOptions setvalue={setvalue} name={name} url={url} />);
    const container = screen.getByTestId('selectoption');
    expect(container).toBeInTheDocument();
  });
  it('select click', () => {
    const setvalue = jest.fn();
    const name = 'country';
    const url = '';
    render(<SelectOptions setvalue={setvalue} name={name} url={url} />);
    const container = screen.getByTestId('selectoption');
    fireEvent.change(container, { target: { value: 0 } });
    expect(setvalue).toBeCalled();
  });
  it('Fetch list', () => {
    const setvalue = jest.fn();
    const name = 'country';
    const url = '';
    act(() => {
      render(<SelectOptions setvalue={setvalue} name={name} url={url} />);
      const container = screen.getByTestId('selectoption');
      console.log(container.innerHTML);
    });
  });
});
