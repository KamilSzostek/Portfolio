import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { StoreProvider } from "./store/StoreProvider";

export let appRefresher: Function;

function App() {
  const [isRefresh, setIsRefresh] = useState(false);
  appRefresher = () => setIsRefresh(!isRefresh);
  return (
    <StoreProvider>
      <Header />
      <Main />
      <Footer />
    </StoreProvider>
  );
}

export default App;
