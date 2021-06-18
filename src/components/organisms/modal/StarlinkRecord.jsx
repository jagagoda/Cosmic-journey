import Loader from "react-loader-spinner";

const RocketRecord = ({ item }) => {
  const { height_km, velocity_kms } = item;

  if (!velocity_kms || !height_km) {
    return null;
  }

  return (
    <div className="modal__data">
      <div className="data__type">{height_km}</div>
      <div className={"data__status"}>{velocity_kms}</div>
    </div>
  );
};

export default RocketRecord;
