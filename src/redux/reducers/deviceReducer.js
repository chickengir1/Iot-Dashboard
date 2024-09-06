import { SET_DEVICE_IDS } from "@redux/actions/deviceActions";

const initialState = {
  deviceIds: [],
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_IDS:
      return {
        ...state,
        deviceIds: action.payload,
      };
    default:
      return state;
  }
};

export default deviceReducer;
