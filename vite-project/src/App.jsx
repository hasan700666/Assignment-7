import "./App.css";
import Footer from "./compunent/Footer";
import Header from "./compunent/Header";
import Main from "./compunent/Main";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const notify = () => toast("Successfully add in your Task Status!");
  const notify_error = () => toast("This one already add on your Task Status!");
  const notify_error_2 = () =>
    toast("This task is already added to your Task Status.");

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <Header></Header>
      <Main
        notify={notify}
        notify_error={notify_error}
        notify_error_2={notify_error_2}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
