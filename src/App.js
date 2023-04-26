import logo from './logo.svg';
import './App.css';
import Profile from './profil/Profile';
import im1 from './images.jpg'


function App() {
  const sayHello=(name)=>{
    alert( `hello ${name} `)
  }
  return (
    <div className="App">
      <Profile fullName="IKHLASS AMMAR" bio="full stack js developer" profession="student" sayHello={sayHello}>
        <img src={im1} alt='nnnnn'/>
      </Profile>
    </div>
  );
}


export default App;
