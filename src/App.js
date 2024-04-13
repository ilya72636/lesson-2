
import Heder from './component/heder/Heder';
import Footer from './component/footer/Footer';
import MainPage from './pages/MainPage/MainPage';


function User({name,lastname,age}) {
  return (
    <u>
      <li>
        {name}: {lastname}-{age}--- через 10 дет ему будет{age+10}</li>
    </u>
  );
}

function Users() {
  return (
    <u>
      <User name='Anna' lastname='Smith' age={45}/>
      <User name='John' lastname='Doe' age={4}/>
      <User name='Ilya' lastname='Johnson' age={35}/>
      <User name='Roma' lastname='Williams' age={12}/>
      <User name='Elena' lastname='Brown' age={56}/>
    </u>
  );
}
function App() {
  return (
    <>
      <Heder/>
      <Users/>
      <MainPage/>
      <Footer/>
    </>
  );
}

export default App;
