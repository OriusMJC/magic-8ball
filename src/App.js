import './App.css';
import {useEffect,useState} from 'react';

function App() {
const en = ['It is certain.', 'It is decidedly so.', 'Without a doubt', 'Yes definitely.',
'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 
'Signs point to yes.','Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it", 'My reply is no.',
'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

const es = ['Es cierto','Es decididamente así', 'Sin lugar a dudas.',
 'Sí, definitivamente.',' Puedes confiar en ello', 'Como yo lo veo ,sí.', 'Lo más probable.', 
 'Perspectiva buena.','Sí.', 'Las señales apuntan a que sí.', 
 'Respuesta confusa, vuelve a intentarlo.', 'Vuelve a preguntar más tarde.',
 'Mejor no decirte ahora.', 'No se puede predecir ahora.', 
 'Concéntrate y vuelve a preguntar.', 'No cuentes con ello.', 'Mi respuesta es no.',
 'Mis fuentes dicen que no.', 'Las perspectivas no son muy buenas.', 'Muy dudoso.'];

  const [input,setInput] = useState('') //Input Value
  const [lan,setLan] = useState(false) // Language Value
  const [lastClass, setLastClass] = useState('');
  const [index,setIndex] = useState(null)
  // const [res,setRes] = useState({
  //   resEn: '...',
  //   resEs: '...'
  // })
  let textRes = document.querySelector('H4')
  let ball8 = document.querySelector('.number')
  let ballRes = document.querySelector('.cont-res')

  useEffect(()=>{
    if(index === 0 || index){
      textRes.innerHTML = lan? en[index] : es[index]
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[lan])
  
  function getRes(){
    let i = Math.round(Math.random() * (es.length - 1));
    setIndex(i)
    if(i > 0 && i <=9) {
      setLastClass('res-pos') ;
      lastClass? ballRes.classList.replace(lastClass,'res-pos') : ballRes.classList.add('res-pos')
    }
    if(i > 9 && i <=14) {
      setLastClass('res-med'); 
      lastClass? ballRes.classList.replace(lastClass,'res-med') : ballRes.classList.add('res-med')
    }
    if(i > 14 && i <=19) {
      setLastClass('res-neg');
      lastClass? ballRes.classList.replace(lastClass,'res-neg') : ballRes.classList.add('res-neg')
    }
    // setRes({en: en[i], es: es[i]})
    textRes.innerHTML = lan? en[i] : es[i]
  }

  function handleClick(e){
    e.preventDefault();
    if(input){
      setInput('')
      ball8.classList.add('number-rotate')
      ballRes.classList.add('cont-res-rotate')
      getRes()
    }else{
      alert(lan? 'Make a question' : 'Haz una pregunta')
    }
  }
  function handleChange(e){
    e.preventDefault();
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e)=>handleClick(e)}>
          <input className='form-in' value={input} onChange={(e)=>handleChange(e)}/>
          <input className='btn-in' type='submit' value={lan? 'Ask':'Preguntar'}></input>
        </form>
        <div>
          {/* <h3>{lan? 'Change Language': 'Cambiar Lenguaje'}</h3> */}
          <button className='btn-lan' onClick={()=>setLan(lan? false: true)}>
            {lan? 'es' : 'en'}
          </button>
        </div>
      </header>
      <div className='container'>
        <div className='ball'>
          <div className='number'>
            <h1>8</h1>
          </div>
          <div className='cont-res'>
            <h4>...</h4>
          </div>
        </div>
        <div className='shadow-ball'>
        </div>
      </div>
    </div>
  );
}

export default App;
