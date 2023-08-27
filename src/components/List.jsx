import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from "./Tasks";
import NotTaskFound from "../assets/not_task_found.png"

const List = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    const data = localStorage.getItem("items");
    const initialValue = JSON.parse(data);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  const concluirTask = (id) => {
    const updatedList = list.map((task) =>
      task.id === id ? { ...task, sts: !task.sts } : task
    );

    setList(updatedList);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input !== "") {
      const obj = { id: uuidv4(), descricao: input, sts: false };
      setInput("");
      setList([...list, obj]);
    }
  };

  const removeTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)} className="flex items-center gap-2 top-0 ">
        <input
          className="w-64 h-8 px-3.5 border-solid border border-cyan-500 rounded-lg focus:outline-none tablet:w-96 desktop:w-[32rem]"
          value={input}
          type="text"
          placeholder="Digite sua tarefa"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="bg-cyan-500 rounded-xl p-2 text-white">Add</button>
      </form>
      <div className="flex flex-col items-center h-80 w-80 gap-3 p-4 top-16 border-solid border-2 border-cyan-600 rounded-md overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-600 tablet:w-[30rem] tablet:h-[40rem] laptop:w-[30rem] laptop:h-80 desktop:w-[40rem] desktop:h-96">
        <h2 className="text-2xl text-cyan-500 font-bold">Taks to Do</h2>
        {list.length !== 0 ? (
          <Tasks
            list={list}
            removeTask={removeTask}
            concluirTask={concluirTask}
          />
        ) : (
          <img src={NotTaskFound} className="m-auto w-72" />
        )}
      </div>
    </>
  );
};

export default List;
