import PropTypes from "prop-types";
import TaskToDo from "./TaskToDo";

const Tasks = ({ list, removeTask, concluirTask}) => {

  return list.map((task) => {
    return (
      <div key={task.id}>
        <TaskToDo list={list} task={task} removeTask={removeTask} concluirTask = {concluirTask}/>
      </div>
    );
  });
};

Tasks.propTypes = {
  list: PropTypes.array,
  removeTask: PropTypes.func,
}

export default Tasks;
