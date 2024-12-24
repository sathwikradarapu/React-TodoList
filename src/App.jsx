import AppName from "./components/AppName";
import AppContainer from "./components/AppContainer";
import WelComeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  /*let initialTodoItems = [
    {
      name: "Buy Milk",
      date: "03/10/2023",
    },
    {
      name: "Buy Boost",
      date: "04/10/2023",
    },
    {
      name: "Buy Horlicks",
      date: "05/10/2023",
    },
  ];*/
  const [todoItems, setTodoItems] = useState([]);
  const onNewItem = (newItem, newItemDueDate) => {
    const newList = [...todoItems, { name: newItem, date: newItemDueDate }];
    setTodoItems(newList);
  };
  const onDeleteTodo = (newItem) => {
    const newList = todoItems.filter((item) => item.name !== newItem);
    setTodoItems(newList);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AppContainer
        todoItems={todoItems}
        onNewItem={onNewItem}
        onDeleteTodo={onDeleteTodo}
      />
      {todoItems.length === 0 && <WelComeMessage></WelComeMessage>}
    </center>
  );
}

export default App;
