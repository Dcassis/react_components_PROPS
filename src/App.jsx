/* eslint-disable react/prop-types */
const Equipe = (props) => {
  return (
    <>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
      <hr className="border-2 border-#000000d8 my-2"/>
    </>
  )
}

const Sobre = (props) => {
  return (
    <div className="py-2">
      <h2>Olá, sou o (a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div className="flex justify-between w-60 hover:bg-green-200 bg-green-100">
      <a href={props.fb}>Facebook </a>
      <a>Linkedin </a>
      <a>Youtube </a>
    </div>
  )
}

function App(){
  return (
    <>
      <h1 className="font-bold text-2xl text-center p-4">Conheça a nossa equipe:</h1>
      <Equipe nome="Joaquim" cargo="Programador" idade="29" facebook="https://google.com"/>
      <Equipe nome="Daniel" cargo="Programador II" idade="45" facebook="https://facebook/Daniel"/>
    </>
    
  )
}

export default App
