// Importación del componente `TaskItem` y PropTypes para la validación de propiedades
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

// Validaciones de las propiedades que recibe `TaskList`
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired, // `tasks` debe ser un array de cadenas (obligatorio)
  onEditTask: PropTypes.func.isRequired, // `onEditTask` debe ser una función y es obligatoria
  onDeleteTask: PropTypes.func.isRequired, // `onDeleteTask` debe ser una función y es obligatoria
};

// Componente funcional `TaskList`
// Props:
// - tasks: lista de tareas (array de cadenas)
// - onEditTask: función para manejar la edición de una tarea específica
// - onDeleteTask: función para manejar la eliminación de una tarea específica
function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    // Contenedor de la lista de tareas
    <ul className="list-disc pl-5">
      {/* Mapeo de las tareas para renderizar un `TaskItem` por cada tarea */}
      {tasks.map((task, index) => (
        <TaskItem
          key={index} // Clave única para cada elemento, basada en el índice
          task={task} // Texto de la tarea
          index={index} // Índice de la tarea dentro del array
          onEditTask={onEditTask} // Función de edición pasada al `TaskItem`
          onDeleteTask={onDeleteTask} // Función de eliminación pasada al `TaskItem`
        />
      ))}
    </ul>
  );
}

export default TaskList;
