import c from "./App.module.scss";
import Header from "./Header/Header"
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import PageBackground from "./PageBackground/PageBackground";

function App() {
  return (
    <div className={c.App}>
      <Header />
      <Body />
      <Footer />
      <PageBackground />
    </div>
  );
}

export default App;
