import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";

function App() {

  const tab = [
    {id: 1, nazwa: "Programowanie w C#"},
    {id: 2, nazwa: "Angular dla początkujących"},
    {id: 3, nazwa: "Kurs Django"}
  ]

  const [inn, setinn] = useState("");
  const [nr, setnr] = useState("");

  const fun = (e) => {
    e.preventDefault();
    console.log(inn);
    let ta = tab.filter(ta => ta.id == nr)
    if(ta.length > 0){
      let naz = ta[0].nazwa;
      console.log(naz);
    } else{
      console.log("Nieprawidłowy numer kursu")
    }
  }

  return(
    <div className='container'>
    <h2>Liczba kursów: {tab.length}</h2>
    <ol>
      {tab.map(l => {
        return <li key={l.id}>{l.nazwa}</li>
      })}
    </ol>
    <form onSubmit={fun}>
      <div className='form-group'>
        <label htmlFor='in'>Imie i nazwisko:</label>
        <input type='text' id='inn' className='form-control' value={inn} onChange={(e) => setinn(e.target.value)}></input>
      </div>
      <div className='form-group'>
        <label htmlFor='nr'>Numer kursu:</label>
        <input type='number' id='nr' className='form-control' value={nr} onChange={(e) => setnr(e.target.value)}></input>
      </div><br/>
      <button type='submit' className='btn btn-primary'>Zapisz do kursu</button>
    </form>
    </div>
  )}

export default App;
