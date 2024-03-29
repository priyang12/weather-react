import SpinnerGif from "../image/Spinner.gif";

const Spinner = () => {
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
  return (
    <div className="loader">
      <img src={SpinnerGif} alt="Loading" />
    </div>
  );
};

export default Spinner;
