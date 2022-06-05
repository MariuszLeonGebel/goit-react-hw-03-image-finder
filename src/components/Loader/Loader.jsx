import {RotatingSquare} from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Spinner() {
  return (
    <RotatingSquare className = "loader" type="Circles" color="#00BFFF" height={80} width={80}/>
  );
}