import React from "react";

const Data = (props) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "30px" }}> {props.user.Fullname}</h1>
      <h1> {props.user.Bio}</h1>
      <h1> {props.user.Profession}</h1>
      {props.children}
      <button onClick={() => props.handleName(props.user.Fullname)}>
        {" "}
        the profile user
      </button>
    </div>
  );
};
Data.defaultProps = {
  Bio: "0",
};
// Data.propTypes = {
//   Fullname: propTypes.String,
// };
export default Data;
