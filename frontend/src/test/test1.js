const reducer = require('../reducer');
const {createStore} =require('redux');

const store = createStore(reducer);

console.log(store.getState());
store.subscribe(x=>{
    console.log(1);

})


