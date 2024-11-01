import { NavLink, Outlet } from "react-router-dom";
const categoriesList = ["Dog", "Cat", "Rabbit", "Pig", "Cow"];

const Categories = ({ title }) => {
  return (
    <>
      <div className="container">
        <h1>{title}</h1>

        <ul>
          {categoriesList.map((item, i) => {
            return (
              <li key={i}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#88a9c3",
                  })}
                  to={item}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Categories;
