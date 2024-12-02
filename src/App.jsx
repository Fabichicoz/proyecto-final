import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/styles.css';
// Importación de React Query para el manejo de datos remotos
import { QueryClient, QueryClientProvider } from 'react-query';

// Inicialización de una instancia de QueryClient para React Query
const queryClient = new QueryClient();

// Componente principal de la aplicación
function App() {
  // Estado local para las tareas
  const [tasks, setTasks] = useState([]); // Lista de tareas
  const [taskInput, setTaskInput] = useState(''); // Entrada de texto para tareas
  const [isEditing, setIsEditing] = useState(false); // Estado de edición
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null); // Índice de la tarea en edición

  // Maneja los cambios en el input de tareas
  const handleInputChange = (e) => {
    setTaskInput(e.target.value); // Actualiza el valor del input de tarea
  };

  // Agrega una nueva tarea o actualiza una tarea existente
  const handleAddTask = () => {
    if (taskInput.trim()) { // Verifica que el input no esté vacío
      if (isEditing) {
        // Si está en modo de edición, actualiza la tarea seleccionada
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? taskInput : task
        );
        setTasks(updatedTasks); // Actualiza la lista de tareas
        setIsEditing(false); // Sale del modo de edición
        setCurrentTaskIndex(null); // Restablece el índice de la tarea en edición
      } else {
        // Si no está editando, agrega una nueva tarea
        setTasks([...tasks, taskInput]); // Agrega la nueva tarea al estado
      }
      setTaskInput(''); // Limpia el input
    }
  };

  // Activa el modo de edición para una tarea específica
  const handleEditTask = (index) => {
    setTaskInput(tasks[index]); // Llena el input con el valor de la tarea a editar
    setIsEditing(true); // Activa el modo de edición
    setCurrentTaskIndex(index); // Guarda el índice de la tarea en edición
  };

  // Elimina una tarea específica
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filtra la tarea seleccionada
    setTasks(updatedTasks); // Actualiza la lista de tareas
  };

  // Renderiza el componente principal de la aplicación
  return (
    <div className="todo-app p-4 max-w-md mx-auto">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-4">Administrador de tareas</h1>
      {/* Componente de entrada de tareas */}
      <TaskInput
        taskInput={taskInput} // Valor del input
        onInputChange={handleInputChange} // Maneja el cambio de texto
        onAddTask={handleAddTask} // Maneja la adición/edición de tareas
        isEditing={isEditing} // Estado de edición
      />
      {/* Componente de lista de tareas */}
      <TaskList
        tasks={tasks} 
        onEditTask={handleEditTask} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

// Componente raíz que envuelve `App` con React Query
export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      {}
      <App />
    </QueryClientProvider>
  );
};
