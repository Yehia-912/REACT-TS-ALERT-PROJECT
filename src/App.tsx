import { Ban, Bell, CheckCheck, Info } from "lucide-react";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <>
      <Alert
        type="alert-default"
        icon={<Bell size={20} />}
        title="Some Thing Went Wrong"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur{" "}
          <a href="alert-link">adipisicing</a> elit. Id eveniet laboriosam
          aspernatur culpa atque blanditiis adipisci s
        </p>
      </Alert>

      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="Some Thing Went Wrong"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid autem possimus ullam a voluptatem non soluta itaque earum dolorem numquam."
      />
      <Alert
        type="alert-info"
        icon={<Info size={20} />}
        title="Some Thing Went Wrong"
      >
        <p>
          Lorem ipsum, dolor sit amet <a href="">quisquam</a> adipisicing elit.
          Porro temporibus enim eos quasi! rationeDolore magni fuga obcaecati
          tempore!
        </p>
      </Alert>

      <Alert
        type="alert-success"
        icon={<CheckCheck size={20} />}
        title="Some Thing Went Wrong"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid autem possimus ullam a voluptatem non soluta itaque earum dolorem numquam."
      />
      <Alert
        type="alert-worning"
        icon={<Ban size={20} />}
        title="Some Thing Went Wrong"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          temporibus enim eos quasi! <a href="/">Dolore</a> ratione magni
          quisquam fuga obcaecati tempore!
        </p>
      </Alert>
    </>
  );
}

export default App;
