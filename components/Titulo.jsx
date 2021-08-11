export default function Titulo(props) {
  props.titulo == "Titulo" ? console.log("verdadeiro") : console.log("falso");
  return (
    <>
      <h2>{props.titulo}</h2>
      <h3>{props.descricao}</h3>
    </>
  );
}
