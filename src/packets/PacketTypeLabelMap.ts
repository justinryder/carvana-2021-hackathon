import {PacketType} from "./types";
import {CarmaTheme} from "../theme/CarmaTheme";

export const PacketTypeLabelMap = {
  [PacketType.Trade]: 'Trade',
  [PacketType.Title]: 'Title',
  [PacketType.Registration]: 'Registration',
  [PacketType.Stc]: 'STC',
  [PacketType.Cats]: 'Cat Pics',
};

export const getPacketTypeLabel = (packetType: PacketType) =>
  PacketTypeLabelMap[packetType] ?? 'Packet';

export const PacketTypeColorMap = {
  [PacketType.Trade]: CarmaTheme.color.warning,
  [PacketType.Title]: CarmaTheme.color.team.transport,
  [PacketType.Registration]: CarmaTheme.color.team.pdi,
  [PacketType.Stc]: CarmaTheme.color.team.postOps,
  [PacketType.Cats]: CarmaTheme.color.team.insideAdvocate,
}

export const getPacketColor = (packetType: PacketType) =>
  PacketTypeColorMap[packetType] ?? CarmaTheme.color.callToActionInteractive;

export const BucketLabelMap = {
  [PacketType.Trade]: 'Trades',
  [PacketType.Title]: 'Titles',
  [PacketType.Registration]: 'Registrations',
  [PacketType.Stc]: 'STC',
  [PacketType.Cats]: '#catvana_cat_club',
}

export const getBucketLabel = (packetType: PacketType) =>
  BucketLabelMap[packetType] ?? 'Bucket';
