import { useNavigate } from "react-router-dom";

const Product = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col border-solid border-2 border-indigo-520"
      onClick={() => navigate(`/${car.id}`)}
    >
      <img className="flex w-48 h-40" src={car.url} alt="photo" />
      <div className="flex flex-col">
        <p className="text-xs">
          {<span class="material-symbols-outlined ">currency_ruble</span>}
          {car.price}
        </p>
        <p className="text-sm">{car.name}</p>
        <div className="flex flex-row">
          {car.date} г. /{car.distance} км
        </div>
      </div>
    </div>
  );
};
export default Product;
