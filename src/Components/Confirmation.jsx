import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  return (
    <>
      <div className="container">
        <p>Thank you for filling the form</p>
        <br />
        {state && (
          <div>
            <h4>Name: {state.username}</h4>
            <h4>Email: {state.email}</h4>

            <h4> Password: {state.password}</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Confirmation;
