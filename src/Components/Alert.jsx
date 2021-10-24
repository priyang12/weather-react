import styles from '../styles/Components_Modules/Alert.module.scss';

const Alert = ({ massage }) => {
  return (
    <div id={styles.alert}>
      <p id='alertMsg'>{massage}</p>
    </div>
  );
};

export default Alert;
