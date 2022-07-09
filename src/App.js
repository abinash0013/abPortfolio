import "./index.css";
import Navbar from "./Component/Navbar/Navbar";
import Banner from "./Component/Banner/Banner";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Project from "./Component/Project/Project";
import Skills from "./Component/Skills/Skills";
import Feedback from "./Component/Feedback/Feedback";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Brands from "./Component/Brands/Brands";
import ScrollTop from "./Component/ScrollTop/ScrollTop";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <About />
            <Project />
            <Skills />
            <Services />
            <Brands />
            <Feedback />
            <Contact />
            <Footer />
            <ScrollTop />
        </div>
    );
}

export default App;
