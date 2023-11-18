
const TimeBasedComponent = () => {
    const hour = new Date().getHours();
    let greeting;

    if(hour < 12)
        greeting = "Bom dia!";
    else if(hour < 18)
        greeting = "Boa tarde!";
    else
        greeting = "Boa noite!";



  return (
    <div>{greeting}</div>
  )
}

export default TimeBasedComponent