import {PacketType} from "./types";

export const PacketTypeLabelMap = {
  [PacketType.Trade]: 'Trade',
  [PacketType.Title]: 'Title',
  [PacketType.Registration]: 'Registration',
  [PacketType.Stc]: 'Sell to Carvana',
  [PacketType.Cats]: 'Just Cat Photos',
};

export const getPacketTypeLabel = (packetType: PacketType) =>
  PacketTypeLabelMap[packetType] ?? 'Packet';

export const BucketLabelMap = {
  [PacketType.Trade]: 'Trades',
  [PacketType.Title]: 'Titles',
  [PacketType.Registration]: 'Registrations',
  [PacketType.Stc]: 'STC',
  [PacketType.Cats]: '#catvana_cat_club',
}

export const getBucketLabel = (packetType: PacketType) =>
  BucketLabelMap[packetType] ?? 'Bucket';
