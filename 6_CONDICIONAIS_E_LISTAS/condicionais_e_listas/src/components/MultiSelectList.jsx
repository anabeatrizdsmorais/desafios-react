import { useState } from "react"

const MultiSelectList = () => {
    const [items, setItems] = useState([
        {id: 123, name: "Item 1", isSelected: false},
        {id: 456, name: "Item 2", isSelected: false},
        {id: 789, name: "Item 3", isSelected: false},
    ]);


    const selectedCount = items.filter((item) => item.isSelected).length;

    const handleItemClick = (id) => {
        setItems(
            items.map((item) => 
                item.id === id ? {...item, isSelected: !item.isSelected} : item
            )
        )
    }

    const handleSelectAll = () => {
        setItems(
            items.map((item) => 
                ({...item, isSelected: true})
            )
        )
    }
    
    const handleUnselectAll = () => {
        setItems(
            items.map((item) => 
                ({...item, isSelected: false})
            )
        )
    }

    return (
        <>
            <button onClick={handleSelectAll}>Selecionar todos</button>
            <button onClick={handleUnselectAll}>Desmarcar todos</button>
            <p>{selectedCount} Item(s) selecionados </p>
            <ul>
                {items.map((item)=> (
                    <li 
                        key={item.id}
                        style={{ background: item.isSelected ? "lightgreen" : "none" }}
                        onClick={() => handleItemClick(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MultiSelectList