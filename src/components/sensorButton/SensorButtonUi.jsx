import { Button } from "@mui/material";

const styles = {
  // 스타일 수정해야 함.
  sensorButtonLayout: {
    transition: "all 0.1s ease-out",
    width: "97px",
    height: "97px",
    zIndex: 1,
    borderRadius: "50%",
    background: "linear-gradient(to top, #eeeeee, #e6e1df)",
    boxShadow: "inset 0 2px 3px rgba(91, 85, 86, 0.37)",
    cursor: "pointer",
    position: "relative",
    "&:before": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      content: '""',
      width: "88px",
      height: "88px",
      zIndex: 2,
      background: "linear-gradient(to bottom, #f5f5f5, #e7e7e7)",
      borderRadius: "50%",
      boxShadow:
        "0 2px 6px rgba(83, 73, 74, 0.44), 0 0 0 1px rgba(41, 41, 41, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.77)",
    },
    "&:after": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      content: '"OFF"',
      zIndex: 3,
      fontSize: "16px",
      color: "#73706b",
      textShadow: "0 2px 0 rgba(255, 255, 255, 1)",
    },
    "&:hover:before": {
      background: "linear-gradient(to bottom, #e7e7e7, #f5f5f5)",
    },
    "&.active": {
      // width: "117px",
      // height: "117px",
      transformOrigin: "center",
      background:
        "linear-gradient(50deg, #ffca17 0%, #fe8800 31%, #ff5a24 52%, #f81e37 76%, #f61439 100%)",
      boxShadow: "inset 0 0 7px rgba(87, 0, 10, 0.57)",
      "&:before": {
        background: "linear-gradient(to bottom, #dbcfca, #fcf6f0)",
        boxShadow:
          "0 2px 8px rgba(183, 0, 15, 0.44), 0 0 0 1px rgba(41, 41, 41, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.77)",
      },
      "&:after": {
        content: '"ON"',
        color: "#f72735",
      },
    },
  },
};

const SensorButtonUi = ({ isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={styles.sensorButtonLayout}
      className={isActive ? "active" : ""}
    />
  );
};

export default SensorButtonUi;
