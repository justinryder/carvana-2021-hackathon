import ScoreActionTypes from './ScoreActionTypes';

const packetCompleted = () => ({
  type: ScoreActionTypes.PacketCompleted,
  payload: {},
});

const upgradePurchased = (cost: number) => ({
  type: ScoreActionTypes.UpgradePurchased,
  payload: {
    cost,
  },
});

export default {
  packetCompleted,
  upgradePurchased,
}
