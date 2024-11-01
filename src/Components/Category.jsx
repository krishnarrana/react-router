import { NavLink, Outlet, useParams } from "react-router-dom";
const animals = [
  {
    animalType: "dog",
    breed: ["Labrador Retriever", "German Shepherd", "Golden Retriever"],
  },
  { animalType: "cat", breed: ["Siamese", "Persian", "Maine Coon"] },
  {
    animalType: "rabbit",
    breed: ["Holland Lop", "Netherland Dwarf", "Flemish Giant"],
  },
  { animalType: "pig", breed: ["Yorkshire", "Berkshire", "Hampshire"] },
  { animalType: "cow", breed: ["Holstein", "Angus", "Hereford"] },
  { animalType: "horse", breed: ["Arabian", "Thoroughbred", "Clydesdale"] },
  { animalType: "bird", breed: ["Parakeet", "Canary", "Cockatiel"] },
];
function getBreedsByAnimalType(animalType) {
  const animal = animals.find(
    (a) => a.animalType.toLowerCase() === animalType.toLowerCase()
  );
  return animal ? animal.breed : [];
}
const Category = () => {
  const { catId } = useParams();
  const breeds = getBreedsByAnimalType(catId);
  return (
    <>
      <div className="container">
        <div>
          <h1>{catId} Breed </h1>
          <ul>
            {breeds.map((breed) => {
              return (
                <li key={breed}>
                  <NavLink to={breed}>{breed}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Category;
