import { ListType, ReactState } from "../types/type";
import Button from "./Button";

type ListArray = {
  todoList: ListType[];
  setTodoList: ReactState<ListType[]>;
};

const List = ({ todoList, setTodoList }: ListArray) => {
  const handleDelete = (id: Number) => {
    const updatedList = todoList.filter((x) => x.id !== id);
    setTodoList(updatedList);
  };
  return (
    <>
      {todoList.map((item, i) => (
        <div key={i} className="mt-3 ml-3 flex gap-2">
          <p className="w-[80%]  py-1 border-[1px] border-gray-600  text-center">
            {item?.value}
          </p>
          <Button
            onClick={() => handleDelete(item.id)}
            value="Del"
            className="py-1 px-3 bg-red-600 text-white"
          />
        </div>
      ))}
    </>
  );
};

export default List;
