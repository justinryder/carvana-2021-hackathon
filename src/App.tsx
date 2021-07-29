import "./App.css";
import { Layer, Text } from "react-konva";
import { UpgradeList } from "./upgrade/UpgradeList";
import { Button } from "./inputs/Button";
import { useDispatch, useSelector } from "react-redux";
import { completePacket } from "./upgrade/upgradeSlice";
import { RootState } from "./app/store";
import { Score } from "./score/Score";

function App() {
  const { money, packetsComplete } = useSelector(
    (state: RootState) => state.upgrades
  );
  const dispatch = useDispatch();

  return (
    <Layer>
      <Text text="Store List" />
      <UpgradeList x={100} y={100} />

      <Button
        label="complete packet"
        x={600}
        y={600}
        onClick={() => dispatch(completePacket())}
      />

      <Score
        x={300}
        y={320}
        score={{
          money,
          packetsCompleted: packetsComplete,
          incomePerPacket: 10,
        }}
      />
    </Layer>
  );
}

export default App;
