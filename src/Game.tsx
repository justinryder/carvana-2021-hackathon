import {Group} from "react-konva";
import {UpgradeList} from "./upgrade/UpgradeList";
import {completePacket} from "./upgrade/upgradeSlice";
import {Score} from "./score/Score";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {Packet} from "./packets/Packet";
import {CarmaTheme} from "./theme/CarmaTheme";
import {boxIntersection} from "./collision/boxIntersections";
import {bounds, move} from "./bounds";
import {useWindowBounds} from "./useWindowSize";
import {Bucket} from "./bucket/Bucket";
import {layoutBox, moveRight} from "./layout/layoutBox";
import {PacketType} from "./packets/types";
import {getBucketLabel, getPacketColor} from "./packets/PacketTypeLabelMap";
import {BUCKET_HEIGHT, BUCKET_WIDTH, PACKET_HEIGHT, PACKET_WIDTH} from "./constants";

const padding = 5;

const randomItem = items => items[Math.floor(Math.random()*items.length)];

const getNewPacketBounds = () => bounds(500, 50, PACKET_WIDTH, PACKET_HEIGHT);
const getNewPacketType = () => randomItem(packetTypes);

const packetTypes = Object.values(PacketType);

export const Game = () => {
  const { money, packetsComplete } = useSelector(
    (state: RootState) => state.upgrades
  );
  const dispatch = useDispatch();

  const windowBounds = useWindowBounds();

  const [packetType, setPacketType] = useState(getNewPacketType());
  const [packetBounds, setPacketBounds] = useState(getNewPacketBounds);

  const buckets = packetTypes.reduce((result, bucketType, index) => {
    const isFirst = index === 0;

    const bounds = isFirst ? layoutBox({
      bounds: windowBounds,
      width: BUCKET_WIDTH,
      height: BUCKET_HEIGHT,
      padding: 25,
      align: 'bottom left',
    }) : moveRight({
      bounds: result[index - 1].bounds,
      margin: PACKET_WIDTH + 15,
    });

    const isPacketInBucket = boxIntersection(bounds, packetBounds);

    const packetMatch = isPacketInBucket && packetType === bucketType;
    const packetError = isPacketInBucket && packetType !== bucketType;

    let color = getPacketColor(bucketType);
    if (packetMatch) {
      color = CarmaTheme.color.success;
    }
    if (packetError) {
      color = CarmaTheme.color.error;
    }

    result.push({
      bucketType,
      bounds,
      packetMatch,
      packetError,
      color,
    });

    return result;
  }, []);

  const isPackedInWindow = boxIntersection(windowBounds, packetBounds);

  return (
    <Group x={padding} y={padding}>
      <Group x={0} y={0}>
        <Score
          x={0}
          y={0}
          score={{
            money,
            packetsCompleted: packetsComplete,
            incomePerPacket: 10,
          }}
        />
        <UpgradeList x={0} y={105} />
      </Group>

      {buckets.map(bucket => (
        <Bucket
          key={bucket.bucketType}
          {...bucket.bounds}
          label={getBucketLabel(bucket.bucketType)}
          fill={bucket.color}
        />
      ))}

      <Packet
        packetType={packetType}
        draggable={true}
        x={packetBounds.x}
        y={packetBounds.y}
        onDrag={event => {
          setPacketBounds(move(
            packetBounds,
            event.target.x(),
            event.target.y(),
          ));
        }}
        onDragEnd={() => {
          const bucketMatch = buckets.find(bucket => bucket.packetMatch);
          const bucketError = buckets.find(bucket => bucket.packetError);

          if (bucketMatch) {
            dispatch(completePacket(packetType)); // TODO: maybe count packet types separately
            setPacketBounds(getNewPacketBounds());
            setPacketType(getNewPacketType());
          } else if (!isPackedInWindow || bucketError) {
            setPacketBounds(getNewPacketBounds());
          }
        }}
      />
    </Group>
  );
};
