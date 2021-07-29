import { FunctionComponent } from "react";
import { Rect, Text } from "react-konva";
import { Upgrade as UpgradeType } from "./types";
import { CarmaTheme } from "../theme/CarmaTheme";
import { Button } from "../inputs/Button";
import { ShapeProps } from "../types/shapes";
import {padBox} from "../layout/padBox";
import {layoutBox} from "../layout/layoutBox";
import {Bounds} from "../layout/types";

type UpgradeProps = {
  upgrade: UpgradeType;
  onPurchase: () => void;
  onRefund: () => void;
  padding?: number;
} & ShapeProps;

const titleHeight = CarmaTheme.font.size.large;
const buttonHeight = 45;

type UpgradeInternalProps = {
  upgrade: UpgradeType;
  onPurchase: () => void;
  onRefund: () => void;
  padding: number;
  bounds: Bounds;
};

const UpgradeName = ({
  upgrade,
  onPurchase,
  onRefund,
  bounds,
  padding,
}: UpgradeInternalProps) => {
  return (
    <Text
      text={upgrade.name.toUpperCase()}
      {...bounds}
      fontFamily={CarmaTheme.font.family}
      fontSize={titleHeight}
      fontStyle="bold"
      verticalAlign="top"
      align="left"
    />
  );
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const UpgradeCost = ({
  upgrade,
  onPurchase,
  onRefund,
  bounds,
  padding,
}: UpgradeInternalProps) => {
  return (
    <Text
      text={currencyFormatter.format(upgrade.cost)}
      {...bounds}
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
  bounds,
  padding,
}: UpgradeInternalProps) => {
  return (
    <Text
      text={upgrade.description}
      {...bounds}
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
  bounds,
  padding,
}: UpgradeInternalProps) => {
  return (
    <Button
      onClick={upgrade.isPurchased ? onRefund : onPurchase}
      {...bounds}
      label={upgrade.isPurchased ? 'Refund' : 'Purchase'}
    />
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
  const internalProps = {
    upgrade: upgrade,
    onPurchase: onPurchase,
    onRefund: onRefund,
    padding: padding,
  };

  const bounds = padBox({
    x,
    y,
    width,
    height,
  }, padding);

  const nameBounds = layoutBox({
    bounds,
    width: bounds.width / 2,
    height: titleHeight,
    align: 'top left',
  });

  const costBounds = layoutBox({
    bounds,
    width: bounds.width / 2,
    height: titleHeight,
    align: 'top right',
  });

  const buttonBounds = layoutBox({
    bounds,
    width,
    height: buttonHeight,
    align: 'bottom center',
  });

  const descriptionYOffset = nameBounds.y + nameBounds.height + padding;
  const descriptionBottomOffset = (2 * padding) + buttonHeight;
  const descriptionBounds = layoutBox({
    bounds: {
      ...bounds,
      y: descriptionYOffset,
    },
    width,
    height: height - descriptionYOffset - descriptionBottomOffset
  });

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
      <UpgradeName
        {...internalProps}
        bounds={nameBounds}
      />
      <UpgradeCost
        {...internalProps}
        bounds={costBounds}
      />
      <UpgradeDescription
        {...internalProps}
        bounds={descriptionBounds}
      />
      <UpgradeButton
        {...internalProps}
        bounds={buttonBounds}
      />
    </>
  )
};

/**
 * purchase/refund
 * cost
 * name
 */
