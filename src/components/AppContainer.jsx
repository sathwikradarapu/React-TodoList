import AppDetails from "./AppDetails";
import AppData from "./AppData";
function AppContainer(props) {
  return (
    <div className="container">
      <AppDetails onNewItem={props.onNewItem} />
      {props.todoItems.map((item) => (
        <AppData
          name={item.name}
          date={item.date}
          onDeleteTodo={props.onDeleteTodo}
          key={item.name}
        />
      ))}
    </div>
  );
}
export default AppContainer;
