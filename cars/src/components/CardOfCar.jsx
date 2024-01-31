import { useParams } from "react-router-dom";
import { data } from "../api/config";

const CardOfCar = () => {
  const { id } = useParams();
  const car = data.cars.find((element) => element.id.toString() === id);
  return (
    <div className="flex flex-row gap-2 border-solid border-2 border-indigo-520  bg-slate-200">
      <div className="flex flex-col border-solid border-2 border-indigo-520">
        <div className="text-sm flex justify-center">
          информация по авто {car.name}
        </div>
        <img className="flex w-64 h-56" src={car.url} alt="photo" />
        <div className="flex flex-col"></div>
      </div>
      <div className="flex flex-col gap-1 align-middle justify-center">
        <div>Цена: {car.price} руб.</div>
        <div>
          Пробег: {car.distance} км/ Год выпуска: {car.date}
        </div>
        <div>Количество ДТП: {car.accident}</div>
        <div>Количество владельцев: {car.owners}</div>
        <p>Описание владельца:</p>
        <div className="text-lime-950 text-sm">{car.info}</div>
      </div>
    </div>
  );
};
export default CardOfCar;
