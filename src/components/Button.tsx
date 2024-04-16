type Button = {
    value: String,
    className: String,
    onClick?: () => void
}
const Button = ({ value, className, onClick }: Button) => {
   
    return (
        <button onClick={onClick} className={`${className}`}>{value} </button>
    )
}

export default Button