import Header from '../Components/Header';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Cloud from '../image/cloud-min.png';

describe('Header Componet Working', () => {
  let getbyId;
  let logo;
  let CloudImage;
  const image = {
    src: Cloud,
    alt: 'Weather Logo',
  };
  beforeEach(() => {
    const { getByTestId } = render(<Header logo={'Weather'} image={image} />);
    logo = getByTestId('logoTestid');
    CloudImage = getByTestId('CloudImage');
    getbyId = getByTestId;
  });

  it('Logo Text Should be Weather', () => {
    expect(logo.textContent).toBe('Weather');
  });
  it('Header Cloud Image Reandering Altering', () => {
    expect(CloudImage.firstChild.alt).toBe('Weather Logo');
  });
  it('Header Cloud Image Reandering src', () => {
    expect(CloudImage.firstChild.src).toBe('http://localhost/cloud-min.png');
  });
});
