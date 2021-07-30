import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ShapeProps } from "../types/shapes";
import { Upgrade } from "./Upgrade";
import { purchase } from "./upgradeSlice";
import { Group } from "react-konva";

type UpgradeListProps = {} & ShapeProps;

export const UpgradeList: FunctionComponent<UpgradeListProps> = ({ x, y }) => {
  const upgrades = useSelector((state: RootState) => state.upgrades.upgrades);
  const dispatch = useDispatch();

  return (
    <Group x={x} y={y}>
      {upgrades?.map((upgrade, index) => (
        <Upgrade
          key={upgrade.name}
          x={0}
          y={index * 160}
          height={150}
          upgrade={upgrade}
          onPurchase={() => dispatch(purchase(upgrade))}
        />
      ))}
    </Group>
  );
};
