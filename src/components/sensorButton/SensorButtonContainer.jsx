import SensorButtonUi from "./SensorButtonUi";

const SensorButtonContainer = ({ isActive, onClick }) => {
  return <SensorButtonUi isActive={isActive} onClick={onClick} />;
};

export default SensorButtonContainer;
