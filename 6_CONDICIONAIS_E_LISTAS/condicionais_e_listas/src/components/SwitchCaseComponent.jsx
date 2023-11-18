
const SwitchCaseComponent = ({value}) => {
    let component;

    switch (value) {
        case "1":
            component = <p>Componente 1</p>;
            break;
        case "2":
            component = <p>Componente 2</p>;
            break;
        case "3":
            component = <p>Componente 3</p>;
            break;
            
        default:
            component = <p>Componente não encontrado</p>;
            break;
    }

    return (
        component
    )
}

export default SwitchCaseComponent