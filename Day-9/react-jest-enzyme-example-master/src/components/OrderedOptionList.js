import React from 'react'
function OrderedOptionList(props){
    const {value}=props
    return (<li className="value">
        {value}
    </li>)
}

export default OrderedOptionList;
