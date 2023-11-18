
// eslint-disable-next-line react/prop-types
const TernaryComponent = ({ condition }) => {
  return (
    <div>
        {
            condition ? <p>A prop é verdadeira!</p> : <p>A prop é falsa!</p>
        }
    </div>
  )
}

export default TernaryComponent