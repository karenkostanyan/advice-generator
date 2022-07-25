import { useEffect, useState, useRef } from 'react';
import './App.css';


function App() {

  const [adviceId, setAdviceId] = useState()
  const [advice, setAdvice] = useState()


  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(res => res.slip)
    .then((data) => {
      setAdviceId(data.id)
      setAdvice(data.advice)
    });
  })

  const adviceRef = useRef();
  const adviceHeight = adviceRef.current?.clientHeight;
  const btnRef = useRef()
  const line = useRef()  
  const width = useRef()
  const innerWidth = width.current?.clientWidth
  console.log(advice)

  console.log(innerWidth + " " + adviceHeight)

  if (adviceHeight === 77) {
    btnRef.current.style.marginTop = '31px';
    line.current.style.paddingTop = '70px';
  }

  if (adviceHeight === 38) {
    btnRef.current.style.marginTop = '38px';
    line.current.style.paddingTop = '100px';
  }

  if (innerWidth <= 510 && adviceHeight === 66) {
    btnRef.current.style.marginTop = '27px';
    line.current.style.paddingTop = '70px';
  }

  if (innerWidth <= 510 && adviceHeight === 33) {
    btnRef.current.style.marginTop = '38px';
    line.current.style.paddingTop = '90px';
  }

  if (innerWidth <= 450 && adviceHeight === 28) {
    btnRef.current.style.marginTop = '30px';
    line.current.style.paddingTop = '90px';
  }

  if (innerWidth <= 450 && adviceHeight === 56) {
    btnRef.current.style.marginTop = '20px';
    line.current.style.paddingTop = '70px';
  }

  if (innerWidth <= 395 && adviceHeight === 22) {
    btnRef.current.style.marginTop = '32px';
    line.current.style.paddingTop = '70px';
  }

  if (innerWidth <= 395 && adviceHeight === 43) {
    btnRef.current.style.marginTop = '25px';
    line.current.style.paddingTop = '60px';
  }

  if (innerWidth <= 335 && adviceHeight === 17) {
    btnRef.current.style.marginTop = '35px';
    line.current.style.paddingTop = '60px';
  }

  if (innerWidth <= 335 && adviceHeight === 34) {
    btnRef.current.style.marginTop = '25px';
    line.current.style.paddingTop = '50px';
  }

  return (
    <div ref={width} className="App">
      <div className='container'>
        <div className='header'>
          <h3>ADVICE #{adviceId}</h3>
        </div>

        <div ref={adviceRef} className='advice'>
          <p>{advice}</p>
        </div>

        <div ref={line} className='line'>
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>

        <div ref={btnRef} className='shuffle-button' onClick={() => {
          window.location.reload();
        }}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
