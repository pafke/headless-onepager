import React, {useState, useEffect} from 'react';

function Polygon(props) {
    return(
        <polygon transform={"translate("+props.x+" "+props.y+")"} fill={props.fill} points={props.points}></polygon>
    );
}

export default Polygon;