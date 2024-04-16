import { ReactState } from "../types/type"

type Input = {
    type: "text" | "color",
    setTodo: ReactState<String>,
    todo: any

}
const Input = ({ type, setTodo, todo }: Input) => {
    return (
        <input type={type}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-[80%] border-[1px] py-1 border-gray-200 "
        />
    )
}

export default Input