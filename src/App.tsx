import "./App.css";
import { Button } from "./components";
import AssistanceMain from "./components/Assistance/AssistanceMain";

function App() {
  return (
    <div className=" flex justify-center items-center">
      <Button />
      <AssistanceMain
        secretKey="apple"
        containerStyle={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      />
    </div>
  );
}

export default App;
