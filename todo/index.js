const rootDom = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDom);


function App(){    
    let [items, setItem]  =   React.useState([]);
    const [inputVal, preInptVal]  =   React.useState('');
    const [srchValue, srchFunc]     =   React.useState('');

    const submitHandler =   () => {
        if(inputVal !== ''){
            let trimed = inputVal.trim();
            if(trimed === '' || items.includes(trimed)){
                return;
            }
            setItem([...items, trimed]);
            preInptVal('');
        }else{
            preInptVal('');
        }
    };



    function removeTodo(element){
        const todoNode     =    element.target.parentElement.parentElement;
        const textContent  =    todoNode.textContent;
        const matchedText   =   items.indexOf(textContent);
        if(matchedText > -1){
            items.splice(matchedText, 1);
            setItem([...items])
        }else{
            return;
        }
    }

    function editTodo(element){
        const todoSetngs    =   element.target.parentElement;
        const todoNode     =    todoSetngs.parentElement.firstElementChild;
        todoNode.classList.toggle("togStrike")
        todoSetngs.firstElementChild.classList.toggle("togCheck")
    }

    const reference     =   '.*';
    let reg           =   `${reference}${srchValue.toLowerCase()}${reference}`;
    reg = new RegExp(reg, "g")

    if(srchValue !== ''){
        const matchedValues    =   items.filter(value => value.toLowerCase() == value.toLowerCase().match(reg)) // convert to lowercase for avoid of the matching problems.
        if(matchedValues){
            items    =   matchedValues;
        }else{
            items  =   items;
        }
    }
    return (
        <div className="app">
            <input className="data" onChange={(e) => {
                preInptVal(e.target.value);
            }} onKeyDown={(e) => {
                if(e.keyCode === 13) {
                    submitHandler()
                }
            }} type="text" value={inputVal} tabIndex="1"/>
            <input className="search" onChange={(e) => {
                srchFunc(e.target.value)
            }} type="text" placeholder="search" value={srchValue} tabIndex="3"/>
            <input className="submit" onClick={ () => submitHandler()} type="submit" value="Add"
              tabIndex="2"/>
            <ul className="list">{items.map(value => <li key={value}><span className="todo-name">{value}</span><div><div className="todo-edit" onClick={editTodo}></div><div className="todo-remove" onClick={removeTodo}></div></div></li>)}</ul>
        </div>
    )
}


root.render(
    <App />
)