import { FunctionComponent } from "react";
import { ShapeProps } from "../types/shapes";
import { Upgrade as UpgradeType } from "./types";
import { Upgrade } from "./Upgrade";

type UpgradeListProps = {
  upgrades: UpgradeType[];
} & ShapeProps;

export const UpgradeList: FunctionComponent<UpgradeListProps> = ({
  upgrades,
}) => {
  return (
    <>
      {upgrades.map((upgrade, index) => (
        <Upgrade
          key={upgrade.name}
          x={0}
          y={index * 160}
          height={150}
          upgrade={upgrade}
          onPurchase={() => console.log("you bought ", upgrade.name)}
          onRefund={() => console.log("you refunded ", upgrade.name)}
        />
      ))}
    </>
  );
};
