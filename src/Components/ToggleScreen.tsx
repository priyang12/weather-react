import styles from '../styles/Components_Modules/Toggle.module.scss';

const ToggleScreen = ({
  Toggle,
  OnClick
}: any) => {
  return (
    <section className={styles.ToggleScreen}>
      <h1 className={Toggle ? styles.Active : 'NonActive'}>By City Name</h1>
      <div onClick={OnClick}>
        {Toggle ? (
          <i className='fas fa-toggle-off'></i>
        ) : (
          <i className='fas fa-toggle-on'></i>
        )}
      </div>
      <h1 className={!Toggle ? styles.Active : 'NonActive'}>By List</h1>
    </section>
  );
};

export default ToggleScreen;
