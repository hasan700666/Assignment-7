import "./App.css";
import Footer from "./compunent/Footer";
import Header from "./compunent/Header";
import Main from "./compunent/Main";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const notify = () => toast("Successfully add in your Task Status!");

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <Header></Header>
      <Main notify={notify}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
