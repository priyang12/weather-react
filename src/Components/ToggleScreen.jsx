const ToggleScreen = ({ Toggle, OnClick }) => {
  return (
    <div id='ToggleScreen'>
      <h1 className={Toggle ? 'Active' : 'NonActive'}>By City Name</h1>
      <div onClick={OnClick}>
        {Toggle ? (
          <i className='fas fa-toggle-off'></i>
        ) : (
          <i className='fas fa-toggle-on'></i>
        )}
      </div>
      <h1 className={!Toggle ? 'Active' : 'NonActive'}>By List</h1>
    </div>
  );
};

export default ToggleScreen;
