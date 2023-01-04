import { useFetch } from "../Utils/CustomHook";
import Select from "react-select";

const SelectOptions = ({ name, url, setValue }: any) => {
  const header = true;
  const { Data, Loading } = useFetch(url, header);
  return Loading && !Data ? (
    <div className="loadingState">Loading</div>
  ) : (
    <>
      <Select
        data-testid="selectoption"
        onChange={(e: any) => setValue({ name, value: e.value })}
        options={Data?.map((item: any) => {
          return {
            value: name !== "City" ? item.iso2 : item.name,
            label: item.name,
          };
        })}
        styles={{
          control: (styles) => ({
            ...styles,
            textAlign: "center",
            fontWeight: "bolder",
            margin: "auto",
            fontSize: "1.5rem",
            Border: "5px dotted #1869e2",
          }),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
              ...styles,
              backgroundColor: "#062450",
              Color: "#f4f4f4",
              textAlign: "left",
            };
          },
        }}
      />
    </>
  );
};

export default SelectOptions;
