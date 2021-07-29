import {Group, Rect, Text} from "react-konva";
import {UpgradeList} from "./upgrade/UpgradeList";
import {Button} from "./inputs/Button";
import {completePacket} from "./upgrade/upgradeSlice";
import {Score} from "./score/Score";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./app/store";
import {Packet} from "./packets/Packet";
import {vector} from "./vector";
import {Bounds} from "./layout/types";
import {CarmaTheme} from "./theme/CarmaTheme";
import {boxIntersection} from "./collision/boxIntersections";
import {bounds, move} from "./bounds";
import {useWindowBounds} from "./useWindowSize";
import {Bucket} from "./bucket/Bucket";

const padding = 5;

const getNewPacketBounds = () => bounds(500, 50, 85, 100);

export const Game = () => {
  const { money, packetsComplete } = useSelector(
    (state: RootState) => state.upgrades
  );
  const dispatch = useDispatch();

  const windowBounds = useWindowBounds();

  const [packetBounds, setPacketBounds] = useState(getNewPacketBounds);

  const target: Bounds = {
    x: 400,
    y: 300,
    width: 85 * 1.2,
    height: 100 * 1.2,
  };

  const isPacketInTarget = boxIntersection(target, packetBounds);
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

      <Bucket
        {...target}
        label={"Trades"}
        fill={isPacketInTarget ? CarmaTheme.color.callToAction : CarmaTheme.color.team.insideAdvocate}
      />

      {/*<Rect*/}
      {/*  {...target}*/}
      {/*  fill={isPacketInTarget ? CarmaTheme.color.success : CarmaTheme.color.background}*/}
      {/*  stroke={CarmaTheme.color.border}*/}
      {/*/>*/}

      <Packet
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
          if (isPacketInTarget) {
            dispatch(completePacket());
            setPacketBounds(getNewPacketBounds());
          } else if (!isPackedInWindow) {
            setPacketBounds(getNewPacketBounds());
          }
        }}
      />
    </Group>
  );
};
