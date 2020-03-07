import React, {Component} from 'react';
import './App.css';
import ConfirmationDelete from "../delete-confirmation-modal/confirmation-delete";
import TodoListItem from "../todo-list-item/todo-list-item";

class App extends Component {
    //lifecycle methods
//0.
//     constructor() {
//         super();
//         this.state = {count: 4, counterName: "First"};
//         console.log('constructor');
//     }

    state = {
        list: [
            {
                id: 1, name: 'First todo', isDisabledUp: true, isDisabledDown: false
            },
            {
                id: 2, name: 'Second todo', isDisabledUp: false, isDisabledDown: false
            },
            {
                id: 3, name: 'Third todo', isDisabledUp: false, isDisabledDown: true
            }
        ],
        todo: ' ',
        confirmCounter: {},
    };
//
// //1.
//     componentWillMount() {
//         console.log('willMount');
//     }
//
//     componentWillUnmount() {
//         //unplug actions
//         console.log('willUnMount');
//     }
//
// //3.
//     componentDidMount() {
//         //fetch
//         console.log('DidMount');
//     }

    addTodo = () => {
        // this.setState({count: this.state.count + 1, counterName: 'Second'}, () => {
        //     console.log('state callback');
        console.log('state=', this.state);
        this.setState((prev) => ({
            list: [
                ...prev.list.slice(0, prev.list.length - 1),
                {...prev.list[prev.list.length - 1], isDisabledDown: false},
                {
                    id: Math.floor(Math.random() * 1000),
                    name: this.state.todo,
                    isDisabledUp: false,
                    isDisabledDown: true
                }],
            todo: ' ',
        }));
    };

    inputTodoChange = (e) => {
        return (
            this.setState({todo: e.target.value})
        )
    };

    confirmRemove = (item) => {
        this.setState({confirmCounter: item});
    };

    removeConfirmedListItem = () => {
        const newList = this.state.list.filter(el => el.id !== this.state.confirmCounter.id);
        this.setState({list: newList, confirmCounter: {}});
    };

    confirmRemoveCancel = () => {
        this.setState({confirmCounter: {}});
    };

    todoListItemUp = (item) => {
        const idx = this.state.list.findIndex(el => el.id === item.id);
        const len = this.state.list.length;
        console.log('index= ', idx);
        let newList;
        if (idx === 1) {
            newList = [{...this.state.list[1], isDisabledUp: true},
                {...this.state.list[0], isDisabledUp: false},
                ...this.state.list.slice(2)];
        } else if (idx === len - 1) {
            newList = [...this.state.list.slice(0, idx - 1),
                {...this.state.list[len - 1], isDisabledDown: false},
                {...this.state.list[len - 2], isDisabledDown: true}];
        } else {
            newList = [...this.state.list.slice(0, idx - 1),
                this.state.list[idx],
                this.state.list[idx - 1],
                ...this.state.list.slice(idx + 1)];
        }

        return (this.setState({list: newList}))
    };


    render() {
        console.log('Render');

        return (

            <div>
                <div className='card-body'>
                    <div className='row align-items-center'>
                        <input className='col- border-info'
                               type='text'
                               value={this.state.todo}
                               onChange={this.inputTodoChange}
                               placeholder='Todo name'/>
                        <button type='button' className='btn btn-primary btn-sm'
                                onClick={this.addTodo}> Add todo
                        </button>
                    </div>
                </div>
                <ul className="list-group ">
                    {
                        this.state.list.map(el =>
                            <TodoListItem
                                key={el.id}
                                item={el}
                                remove={this.confirmRemove}
                                todoListItemUp={this.todoListItemUp}
                            />)
                    }
                </ul>

                <ConfirmationDelete
                    name={this.state.confirmCounter.name}
                    onSuccess={this.removeConfirmedListItem}
                    onCancel={this.confirmRemoveCancel}
                />
            </div>
        );
    }
}

export default App;
