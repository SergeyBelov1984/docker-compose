const { data } = require("../api/config");
const { default: Product } = require("../components/Product");

const CarsPages = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>Бибики</p>
      {data?.cars.map((car) => (
        <Product car={car} key={car.id} />
      ))}
    </div>
  );
};
export default CarsPages;
