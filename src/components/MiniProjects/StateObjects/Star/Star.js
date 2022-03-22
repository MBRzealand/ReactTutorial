import React from 'react';


const Star = (props) => {
    let starIcon = props.isFilled ? props.filled : props.empty
    return (
        <div>
            <img
                src={props.starIcon}
                className="card--favorite"
                onClick={props.handleClick}
            />
        </div>
    );
};

export default Star;
