/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const TaskToDo = ({ task, removeTask, concluirTask }) => {
  return (
    <div className="flex justify-center items-center gap-3 ">
      <p className="break-all text-white w-72 px-3.5 border-solid border border-cyan-500 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500">
        {task.descricao}
      </p>

      { (
        <input
        type="checkbox"
        checked={task.sts}
        onChange={() => concluirTask(task.id)}
        className="h-5 w-5 accent-blue-700 cursor-pointer"
      />
      
      ) }

      <button
        className="bg-red-500 text-white rounded-xl w-6 h-6 text-center"
        onClick={() => removeTask(task.id)}
      >
        X
      </button>
    </div>
  );
};

TaskToDo.propTypes = {
  task: PropTypes.object,
  removeTask: PropTypes.func,
};

export default TaskToDo;
