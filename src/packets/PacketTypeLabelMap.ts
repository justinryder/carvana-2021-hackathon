import {PacketType} from "./types";
import {CarmaTheme} from "../theme/CarmaTheme";

export const PacketTypeLabelMap = {
  [PacketType.Trade]: 'Trade',
  [PacketType.Title]: 'Title',
  [PacketType.Registration]: 'Registration',
  [PacketType.Treasury]: 'Treasury',
  [PacketType.Cats]: 'Cat Pics',
};

export const getPacketTypeLabel = (packetType: PacketType) =>
  PacketTypeLabelMap[packetType] ?? 'Packet';

export const PacketTypeColorMap = {
  [PacketType.Trade]: CarmaTheme.color.white,
  [PacketType.Title]: CarmaTheme.color.callToAction,
  [PacketType.Registration]: CarmaTheme.color.warning,
  [PacketType.Treasury]: CarmaTheme.color.success,
  [PacketType.Cats]: CarmaTheme.color.team.insideAdvocate,
}

export const getPacketColor = (packetType: PacketType) =>
  PacketTypeColorMap[packetType] ?? CarmaTheme.color.callToActionInteractive;

export const BucketLabelMap = {
  [PacketType.Trade]: 'Trades',
  [PacketType.Title]: 'Titles',
  [PacketType.Registration]: 'Registrations',
  [PacketType.Treasury]: 'Treasury',
  [PacketType.Cats]: '#catvana_cat_club',
}

export const getBucketLabel = (packetType: PacketType) =>
  BucketLabelMap[packetType] ?? 'Bucket';
