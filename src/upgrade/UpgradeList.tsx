import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ShapeProps } from "../types/shapes";
import { Upgrade } from "./Upgrade";
import { purchase } from "./upgradeSlice";

type UpgradeListProps = {} & ShapeProps;

export const UpgradeList: FunctionComponent<UpgradeListProps> = () => {
  const upgrades = useSelector((state: RootState) => state.upgrades.upgrades);
  const dispatch = useDispatch();

  return (
    <>
      {upgrades?.map((upgrade, index) => (
        <Upgrade
          key={upgrade.name}
          x={0}
          y={index * 160}
          height={150}
          upgrade={upgrade}
          onPurchase={() => dispatch(purchase(upgrade))}
          onRefund={() => console.log("you refunded ", upgrade.name)}
        />
      ))}
    </>
  );
};
