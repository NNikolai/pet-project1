import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Switcher from "./components/Switcher";

function App() {
  
  return (
    <div className="dark:bg-slate-900">
      <Header/>
      <Content/>
      <Footer/>
      <Switcher />
    </div>
  );
}

export default App;
