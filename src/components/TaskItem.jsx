// Importación de PropTypes para la validación de propiedades
import PropTypes from 'prop-types';

// Definición de las validaciones de propiedades para el componente TaskItem
TaskItem.propTypes = {
  task: PropTypes.string.isRequired, // La tarea debe ser una cadena de texto y es obligatoria
  index: PropTypes.number.isRequired, // El índice de la tarea debe ser un número y es obligatorio
  onEditTask: PropTypes.func.isRequired, // La función para editar tareas debe ser obligatoria
  onDeleteTask: PropTypes.func.isRequired, // La función para eliminar tareas debe ser obligatoria
};

// Componente funcional `TaskItem`
// Props:
// - task: el texto de la tarea
// - index: el índice de la tarea dentro de la lista
// - onEditTask: función para manejar la edición de la tarea
// - onDeleteTask: función para manejar la eliminación de la tarea
function TaskItem({ task, index, onEditTask, onDeleteTask }) {
  return (
    <li className="mb-2 flex justify-between items-center">
      {/* Texto de la tarea */}
      <span>{task}</span>
      <div>
        {/* Botón para editar la tarea */}
        <button
          onClick={() => onEditTask(index)} // Llama a la función `onEditTask` pasando el índice de la tarea
          className="bg-yellow-400 text-white px-2 py-1 rounded mr-2" // Estilo del botón de editar con Tailwind CSS
        >
          Editar
        </button>
        {/* Botón para borrar la tarea */}
        <button
          onClick={() => onDeleteTask(index)} // Llama a la función `onDeleteTask` pasando el índice de la tarea
          className="bg-red-500 text-white px-2 py-1 rounded" // Estilo del botón de borrar con Tailwind CSS
        >
          Borrar
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
