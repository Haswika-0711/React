import React from 'react'
import PropsTypes from 'props-types'

function List(props) {
    const { items } = props
    if (!items.length) {
        return <span className = "Empty-message" > NO Items in list </span>;
    }

    return(
        <ul>
            {items.map(item=><li key={item}>{item}</li>)}
        </ul>
    )
}

List.prototype={
    items:PropsTypes.array,
};


List.defaultProps={
    items:[]
}


export default List;
