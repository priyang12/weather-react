import { useFetch } from '../Utils/CustomHook';
import PropTypes from 'prop-types';

const SelectOptions = ({ name, url, setValue }) => {
  const header = true;
  const { Data, Loading } = useFetch(url, header);

  return Loading ? (
    <div className='loadingState'>Loading</div>
  ) : (
    <select
      name={name}
      id={name}
      onChange={setValue}
      data-testid='selectoption'
    >
      <option>Select {name}</option>
      {Data &&
        Data.map((coun) => (
          <option value={coun.iso2} key={coun.id}>
            {coun.name}
          </option>
        ))}
    </select>
  );
};

SelectOptions.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
export default SelectOptions;
