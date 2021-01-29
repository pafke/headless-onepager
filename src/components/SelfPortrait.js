import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import polygonArray from './assets/polygonArray.json';
import Polygon from './Polygon.js';

const SvgImage = styled.svg`
    width: 100%;
    height: auto;
    border-radius: 50%;
    @media (min-width: 640px) {
        width: 320px;
        height: 320px;
    }
`;

function SvgSelf(props) {
    const [gTransform, setGTransform] = useState([]);
    const [polygonsToHTML, setPolygonsToHTML] = useState(polygonArray);
    const [listPolygons, setListPolygons] = useState(false);
    let throttleMousemove;
    let counter = 0;
    let newGTransform;
    const svgContainer = useRef(null);
    useEffect(() => {
        setListPolygons(svgContainer.current.querySelectorAll('polygon'));
    },[]);
    const _mouseoutFunction = () => {
        clearTimeout(throttleMousemove);
        setPolygonsToHTML(polygonArray);
    }
    const _mousemoveFunction = (e) => {
        clearTimeout(throttleMousemove);
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        throttleMousemove = setTimeout(function() {
            var theRangeSquared = 110 * 110;
            var maxOffset = 12;
            let newPolygonArray = [];
            for (var i = 0; i < listPolygons.length; i++) {
                let newPolygon = {
                    "fill": polygonsToHTML[i].fill,
                    "points": polygonsToHTML[i].points
                };
                var position = listPolygons[i].getBoundingClientRect();
                var widthMod = position.width / 2;
                var heightMod = position.height / 2;
                var coordX = position.x + widthMod;
                var coordY = position.y + heightMod + window.scrollY;
                // Distance from mouse
                var dx = coordX - mouseX;
                var dy = coordY - mouseY;
                var distanceSquared = (dx * dx + dy * dy);
                var tx = 0,
                    ty = 0;
                if (distanceSquared < theRangeSquared && distanceSquared !== 0) {
                    // Calculate shift scale (inverse of distance)
                    var shift = maxOffset * (theRangeSquared - distanceSquared) / theRangeSquared;
                    var distance = Math.sqrt(distanceSquared);
                    tx = shift * dx / distance;
                    ty = shift * dy / distance;
                }
                newPolygon.x = tx;
                newPolygon.y = ty;
                newPolygonArray.push(newPolygon);
            }
            setPolygonsToHTML(newPolygonArray);
        }, 5);
    }
    return(
        <SvgImage ref={svgContainer} onMouseLeave={_mouseoutFunction} onMouseMove={_mousemoveFunction} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"  viewBox="0 0 320 320" enable-background="new 0 0 320 320">
            <rect fill="#444444" width="320" height="320"></rect>
            {polygonsToHTML.map((polygon, index) => (
                <Polygon key={index} x={polygon.x} y={polygon.y} fill={polygon.fill} points={polygon.points} />
            ))}
        </SvgImage>
    );
}

export default SvgSelf;