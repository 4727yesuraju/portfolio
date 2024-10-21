import './app.scss';
import Navbar from './components/navbar/Navbar';
import Test from './Test';

const App = () => {

  if(1) return <Test />
  return <div>
    <section >
      <Navbar />
    </section>
    <section>
      Parallax
    </section>
    <section>
      Services
    </section>
    <section>
      Portfolio1
    </section>
    <section>
      Portfolio1
    </section>
    <section>
      Portfolio1
    </section>
    <section>
      Contact
    </section>
  </div>;
};

export default App;
