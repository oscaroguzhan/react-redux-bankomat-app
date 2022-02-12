import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Atm from "./components/Atm";
import Header from "./components/Header";

function App() {
  const theme = {
    colors: {
      primary_bg: "#695cfe",
      secondary_bg: "#fafafa",
      primary_btn: "tomato",
      primary_text: "#fff",
      secondary_text: "#333",
    },
  };
  // get the state from the  redux store
  const { showAtm } = useSelector((state) => state.atm);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* conditionally render the component beroende av state */}
      {showAtm && <Atm />}
    </ThemeProvider>
  );
}

export default App;
