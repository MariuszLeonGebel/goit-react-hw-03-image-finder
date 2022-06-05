import {RotatingSquare} from "react-loader-spinner";

export default function Spinner() {
  return (
    <RotatingSquare className = "loader" type="Circles" color="#00BFFF" height={80} width={80}/>
  );
}