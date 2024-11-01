import { useParams } from "react-router-dom";

const Breed = () => {
  const { breedId } = useParams();

  return (
    <>
      <div className="container">
        <h3>Breed info</h3>
        <h1>{breedId}</h1>
      </div>
    </>
  );
};

export default Breed;
