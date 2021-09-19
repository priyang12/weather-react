import { useFetch } from '../Utilis/useFetch';
import PropTypes from 'prop-types';

const SelectOptions = ({ name, url, setvalue }) => {
  const header = true;
  const { data, loading } = useFetch(url, header);

  return loading ? (
    <div className='loadingState'>Loading</div>
  ) : (
    <select
      name={name}
      id={name}
      onChange={setvalue}
      data-testid='selectoption'
    >
      <option>Select {name}</option>

      {data &&
        data.map((coun) => (
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
  setvalue: PropTypes.func.isRequired,
};
export default SelectOptions;
