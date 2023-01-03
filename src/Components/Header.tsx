import styles from '../styles/Components_Modules/Nav.module.scss';

const Header = ({
  logo,
  image
}: any) => {
  return (
    <nav>
      <div className={styles.logo} data-testid='logoTestid'>
        <h1>{logo}</h1>
      </div>
      <div className='cloud' data-testid='CloudImage'>
        <img src={image.src} alt={image.alt} />
      </div>
    </nav>
  );
};

export default Header;
