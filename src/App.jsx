import './app.scss'

//components 
import Navbar from './components/navbar/Navbar';

const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>p1</section>
    <section>p2</section>
    <section>p3</section>
    <section>Contact</section>
  </div>;
};

export default App;
