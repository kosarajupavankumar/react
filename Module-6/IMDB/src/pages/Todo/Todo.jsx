import { useDispatch, useSelector } from 'react-redux';
import todoSlice from '../../redux/slice/todoSlice';
import './Todo.css';
const actions = todoSlice.actions;

const Todo = () => {
    const dispatch = useDispatch();

    const todoState = useSelector((state) => state.todo);
    const { value, todoList } = todoState;

    

    const handleChange = (e) => {
        dispatch(actions.updateInputField(e.target.value));
    }

    const handleAddList = () => {
        dispatch(actions.addTodo({
            value: value
        }));
    }

    const handleDeleteList = (e) => {
        const index = e.target.innerText.split('.')[0] - 1;
        dispatch(actions.removeTodo({
            index: index
        }));
    }

    return (
        <div>
            <h2>Todo Application</h2>
            <div>
                <div className='container'>
                    <input className='input' type="text" value={value} onChange={handleChange} />
                    <button className='button' onClick={handleAddList} >Add</button>
                </div>
                <div className='ToDoComponent'>
                    <ul className='unorderList'>
                        {todoList.map((item, index) => (
                            <li className= "list"  onDoubleClick={handleDeleteList} key={index}>{index+1}.  {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;
