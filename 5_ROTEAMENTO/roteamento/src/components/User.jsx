import { useParams } from "react-router-dom"

const User = () => {
  
    let {userId} = useParams();

    return (
        <div>
            <h3>Id do usuario: {userId}</h3>
        </div>
    )
}

export default User