import { BrowserRouter } from "react-router-dom";
import { Header, Hero, Cursor, About } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Header />
            <Cursor />
            <Hero />
            <About />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
