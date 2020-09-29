import React from "react";

function CounterList(props){
    const {id,value,color} = props
    return (
        <div>
            <span>{color}</span>
            <button>-</button>
            {value}
            <button>+</button>

        </div>
    )
}
export default CounterList;