import ThemeToggle from "./ThemeToggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main>
      <ThemeToggle></ThemeToggle>
      <SearchForm></SearchForm>
      <Gallery></Gallery>
      <ToastContainer position="top-center"></ToastContainer>
    </main>
  );
};
export default App;
