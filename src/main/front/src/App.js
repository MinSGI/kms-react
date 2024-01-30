import { useRoutes } from "react-router-dom";
import CustomRouter from "./routes/CustomRouter";

const App = () => {
    const routing = useRoutes(CustomRouter);

    return <div className="dark">{routing}</div>;
};

export default App;
