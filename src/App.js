import { useState } from "react"

export default function App() {

    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    function zerar() {
        setNumero(0)
    } 

    return <section>
        <h1>Counter<div>Hello Kitty</div></h1>
        <p>{numero}</p>
        <button onClick={diminuir}>-1</button>
        <button onClick={aumentar}>+1</button>
        <div><button onClick={zerar}>Reset</button></div>

    </section>
}
