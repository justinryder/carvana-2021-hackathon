import { FunctionComponent } from "react";
import { Rect, Text } from "react-konva";
import { Upgrade as UpgradeType } from "./types";
import { CarmaTheme } from "../theme/CarmaTheme";
import { Button } from "../inputs/Button";
import { ShapeProps } from "../types/shapes";

type UpgradeProps = {
  upgrade: UpgradeType;
  onPurchase: () => void;
  onRefund: () => void;
  padding?: number;
} & ShapeProps;

const titleHeight = CarmaTheme.font.size.large;
const buttonHeight = 40;

type UpgradeInternalProps = {
  upgrade: UpgradeType;
  onPurchase: () => void;
  onRefund: () => void;
  padding: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};

const UpgradeName = ({
  upgrade,
  onPurchase,
  onRefund,
  top,
  left,
  right,
  bottom,
  width,
  height,
  padding,
}: UpgradeInternalProps) => {
  return (
    <Text
      text={upgrade.name.toUpperCase()}
      width={width - 2 * padding}
      height={titleHeight}
      x={left + padding}
      y={top + padding}
      fontFamily={CarmaTheme.font.family}
      fontSize={titleHeight}
      fontStyle="bold"
      verticalAlign="top"
      align="left"
    />
  );
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const UpgradeCost = ({
  upgrade,
  onPurchase,
  onRefund,
  top,
  left,
  right,
  bottom,
  width,
  height,
  padding,
}: UpgradeInternalProps) => {
  return (
    <Text
      text={currencyFormatter.format(upgrade.cost)}
      width={width - 2 * padding}
      x={left + padding}
      y={top + padding}
      fontFamily={CarmaTheme.font.family}
      fontSize={CarmaTheme.font.size.normal}
      fontStyle="bold"
      verticalAlign="top"
      align="right"
    />
  );
};

const UpgradeDescription = ({
  upgrade,
  onPurchase,
  onRefund,
  top,
  left,
  right,
  bottom,
  width,
  height,
  padding,
}: UpgradeInternalProps) => {
  const yOffset = 2 * padding + titleHeight;
  const y = top + yOffset;
  const bottomOffset = 2 * padding + buttonHeight;

  return (
    <Text
      text={upgrade.description}
      width={width - 2 * padding}
      height={height - yOffset - bottomOffset}
      x={left + padding}
      y={y}
      fontFamily={CarmaTheme.font.family}
      fontSize={CarmaTheme.font.size.large}
      fontStyle="bold"
      ellipsis
      verticalAlign="top"
      align="left"
    />
  );
};

const UpgradeButton = ({
  upgrade,
  onPurchase,
  onRefund,
  top,
  left,
  right,
  bottom,
  width,
  height,
  padding,
}: UpgradeInternalProps) => {
  const buttonWidth = width - 2 * padding;
  const buttonX = left + padding;
  const buttonY = bottom - padding - buttonHeight;

  return (
    <Button
      onClick={upgrade.isPurchased ? onRefund : onPurchase}
      x={buttonX}
      y={buttonY}
      width={buttonWidth}
      height={buttonHeight}
    >
      {upgrade.isPurchased ? "Refund" : "Purchase"}
    </Button>
  );
};

export const Upgrade: FunctionComponent<UpgradeProps> = ({
  upgrade,
  onPurchase,
  onRefund,
  x,
  y,
  width = 300,
  height = 200,
  padding = 10,
}) => {
  const top = y;
  const bottom = y + height;
  const left = x;
  const right = y + width;

  const internalProps = {
    upgrade: upgrade,
    onPurchase: onPurchase,
    onRefund: onRefund,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    width: width,
    height: height,
    padding: padding,
  };

  return (
    <>
      <Rect
        width={width}
        height={height}
        fill={CarmaTheme.color.background}
        stroke={CarmaTheme.color.border}
        x={x}
        y={y}
      />
      <UpgradeName {...internalProps} />
      <UpgradeCost {...internalProps} />
      <UpgradeDescription {...internalProps} />
      <UpgradeButton {...internalProps} />
    </>
  );
};

/**
 * purchase/refund
 * cost
 * name
 */
