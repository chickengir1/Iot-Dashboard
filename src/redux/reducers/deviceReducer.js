import { SET_DEVICE_IDS } from "@redux/actions/deviceActions";

const initialState = {
  deviceIds: [],
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_IDS:
      console.log("디바이스 아이디", action.payload);
      return {
        ...state,
        deviceIds: action.payload,
      };
    default:
      return state;
  }
};

export default deviceReducer;
