import GetBylist from "../Components/GetByList";
import "@testing-library/jest-dom/extend-expect";
import { screen, render, act, fireEvent } from "@testing-library/react";

describe("Get Weather by list", () => {
  it("Click on Submit", () => {
    const setUrl = jest.fn();
    render(<GetBylist setUrl={setUrl} />);
    const container = screen.getByTestId("GetBylists");
    const submitBtn = container.querySelector("#getWeather");
    // @ts-expect-error TS(2345): Argument of type 'Element | null' is not assignabl... Remove this comment to see the full error message
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
