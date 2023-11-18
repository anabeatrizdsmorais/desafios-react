import './Card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ title, body }) => {
  return <div className='card'>
    <div className="card-header">{title}</div>
    <div className="card-body">{body}</div>
  </div>
}

export default Card