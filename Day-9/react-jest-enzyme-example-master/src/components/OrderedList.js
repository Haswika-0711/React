import React from 'react'
function OrderedList(props){
    const {options}=props
    if(!options.length){
        return <span className="empty">NO Option List </span>
    }

    return(
        <ol >
            {options.map(option=><OrderedOptionList key={option} value={option}></OrderedOptionList>)}

        </ol>
    )
}

OrderedList.defaultProps={
    options:[]
}

export default OrderedList;


