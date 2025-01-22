const Button = (props) => {

    const alertLabel = () => {
        alert(`A label desse botão é "${props.label}"`)
    }

    return (
        <button className="btn" onClick={alertLabel}>{props.label}</button>
    )
}

Button.defaultProps = {
    label:'Baixar CV'
}

export default Button