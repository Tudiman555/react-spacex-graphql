import { useState } from "react";
import LaunchDetails from "./components/LaunchDetails.tsx/LaunchDetails";
import LaunchList from "./components/LaunchList/LaunchList";
const App: React.FC = () => {
  const [launchId, setLaunchId] = useState<string>();

  return (
    <div className="max-w-screen-2xl flex mx-auto overflow-hidden h-screen">
      <div className="max-w-xs overflow-y-scroll ">
        <LaunchList setLaunchId={setLaunchId} />
      </div>
      <div className="w-full overflow-y-scroll">
        {!!launchId && <LaunchDetails launchId={launchId} />}
      </div>
    </div>
  );
};

export default App;
