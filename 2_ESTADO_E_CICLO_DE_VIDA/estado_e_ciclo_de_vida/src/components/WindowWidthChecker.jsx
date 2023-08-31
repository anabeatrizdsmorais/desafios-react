import { useEffect, useState } from "react";

const WindowWidthChecker = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div>Largura da tela: {windowWidth}</div>
    )
}

export default WindowWidthChecker