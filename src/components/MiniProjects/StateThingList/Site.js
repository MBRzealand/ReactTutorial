import React from 'react';
import "./SiteStyle.css"

const Site = () => {

    const [list,setList] = React.useState(["Thing 1", "Thing 2"])


    const addElementToList = () => {
        setList(prevList => [...prevList, "Thing " + (list.length+1)] )
        console.log(list)
    }

    const thingsArraylist = list.map(thing => <p className={"list-item"}>{thing}</p>)

    return (
        <div className={"full-site"}>
            <button onClick={addElementToList} className={"add-button"}>Add Item</button>
            {thingsArraylist}
        </div>
    );

};

export default Site;
