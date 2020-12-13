import Axios from "axios";
import { IReducerAction } from "../reducers";

// AT = Action Type
export interface IGetAction<AT> {
  url: string;
  nameType: string;
  initialValue: AT;
}

export type dispatchTypes<AT> = (args: IReducerAction<AT>) => void;

export function getAction<AT>({ url, initialValue, nameType }: IGetAction<AT>) {
  return (dispatch: dispatchTypes<AT>) => {
    Axios.get<AT>(url)
      .then((payload) => {
        const action: IReducerAction<AT> = {
          type: nameType,
          data: { ...payload.data, status: "DONE" },
        };
        return dispatch(action);
      })
      .catch(() => {
        const action: IReducerAction<AT> = {
          type: nameType,
          data: { ...initialValue, status: "ERROR" },
        };
        return dispatch(action);
      });
  };
}
