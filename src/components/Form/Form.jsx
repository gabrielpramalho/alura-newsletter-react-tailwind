import Input from "../Input/Input"

const Form = ({ onSubmit }) =>{

    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()

        const name = event.target[0].value
        const email = event.target[1].value

        onSubmit({ name, email })
    }

    return(
        <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center h-full gap-10 -mt-20 mx-5" >
            <Input type="text" required placeholder="Insira seu nome" />
            <Input type="email" required placeholder="Insira seu e-mail" />
            <button type="submit" className="alura-button" >Seguir</button>
        </form>
    )
}

export default Form