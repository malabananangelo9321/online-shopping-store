import { NavigationContants } from "../constants/Constants";
interface OpenProps {
  isOpenCart: boolean;
  isOpenCategory: boolean;
}
interface RefresProps {
  refresh: boolean;
}

export const onOpenMyCart = (values: OpenProps) => async (dispatch: any) => {
  dispatch({
    type: NavigationContants.ACTION_NAVIGATION,
    payload: values,
  });
};

export const onOpenCartegory = (values: OpenProps) => async (dispatch: any) => {
  dispatch({
    type: NavigationContants.ACTION_NAVIGATION,
    payload: values,
  });
};
export const onRefreshCount =
  (values: RefresProps) => async (dispatch: any) => {
    dispatch({
      type: NavigationContants.ACTION_NAVIGATION,
      payload: values,
    });
  };
