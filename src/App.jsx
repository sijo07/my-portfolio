import { BrowserRouter } from "react-router-dom";
import { About, Contact, Header, Hero, Projects } from "./sections";
import { Cursor } from "./components";

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
            <Projects />
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
