// Importación de PropTypes para la validación de tipos de propiedades
import PropTypes from 'prop-types';

// Definición de las validaciones de propiedades para el componente TaskInput
TaskInput.propTypes = {
  taskInput: PropTypes.string.isRequired, // `taskInput` debe ser una cadena y es obligatorio
  onInputChange: PropTypes.func.isRequired, // `onInputChange` debe ser una función y es obligatorio
  onAddTask: PropTypes.func.isRequired, // `onAddTask` debe ser una función y es obligatorio
  isEditing: PropTypes.bool.isRequired, // `isEditing` debe ser un booleano y es obligatorio
};

// Componente funcional `TaskInput`
// Props:
// - taskInput: el texto actual en el input de tareas
// - onInputChange: función para manejar el cambio de texto en el input
// - onAddTask: función para manejar la adición o edición de tareas
// - isEditing: booleano que indica si el usuario está en modo de edición
function TaskInput({ taskInput, onInputChange, onAddTask, isEditing }) {
  return (
    <div>
      {/* Input de texto para la tarea */}
      <input
        type="text" // Tipo de entrada: texto
        className="border p-2 w-full mb-2" // Estilo aplicado con clases Tailwind CSS
        placeholder="Escribe una tarea..." // Texto de marcador de posición
        value={taskInput} // Valor actual del input controlado
        onChange={onInputChange} // Maneja los cambios en el input llamando a la función `onInputChange`
      />
      {/* Botón para añadir o guardar una tarea */}
      <button
        onClick={onAddTask} // Llama a la función `onAddTask` al hacer clic
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full" // Estilos de Tailwind CSS
      >
        {/* Texto dinámico del botón dependiendo del estado `isEditing` */}
        {isEditing ? 'Guardar Cambios' : 'Añadir Tarea'}
      </button>
    </div>
  );
}

// Exportación del componente para su uso en otros archivos
export default TaskInput;
