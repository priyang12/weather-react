import styles from '../styles/Components_Modules/Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <a href='https://github.com/priyang12'>
          <i className='fab fa-github'></i>
        </a>
        <a href='twitter.com'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='https://www.linkedin.com/in/priyang-patel-948685176/'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
