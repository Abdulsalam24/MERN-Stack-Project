import { GridLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="grid h-screen place-items-center">
      <GridLoader color="#000000" />
    </div>
  );
}

export default Spinner;
