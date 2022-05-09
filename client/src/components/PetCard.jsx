const PetCard = (props) => {
  return(
    <div className='card' onClick={props.click}>
      <img src={props.img} alt={props.name}></img>
    </div>
  )
}

export default PetCard