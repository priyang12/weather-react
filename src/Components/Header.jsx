const Header = ({ logo, image }) => {
  return (
    <nav>
      <div className='logo' data-testid='logoTestid'>
        <h1>{logo}</h1>
      </div>
      <div className='cloud' data-testid='CloudImage'>
        <img src={image.src} alt={image.alt} />
      </div>
    </nav>
  );
};

export default Header;
