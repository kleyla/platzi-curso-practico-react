import { Layout } from "./containers/Layout";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import { Router } from "./routes/Router";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Router />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
