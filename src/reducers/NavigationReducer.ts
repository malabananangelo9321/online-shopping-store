import { NavigationContants } from "../components/navigation/constants/Constants";

const initialState = {
  isOpenCart: false,
  isOpenCategory: false,
  refresh: false,
};
const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NavigationContants.ACTION_NAVIGATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default dataReducer;
