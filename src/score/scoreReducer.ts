import ScoreActionTypes from "./ScoreActionTypes";
import { Score } from "./types";

export const initialState: Score = {
  packetsCompleted: 0,
  money: 0,
  incomePerPacket: 1,
};

type Action = {
  type: string;
  payload: Record<string, unknown>;
};

export const scoreReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ScoreActionTypes.PacketCompleted:
      return {
        ...state,
        packetsCompleted: state.packetsCompleted + 1,
        money: state.money + state.incomePerPacket,
      };
    case ScoreActionTypes.UpgradePurchased:
      return {
        ...state,
        money: state.money - (action.payload.cost as number),
      };
    default:
      return state;
  }
};
