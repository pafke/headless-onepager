import React from 'react';
import styled from 'styled-components'

const SvgImage = styled.svg`
    width: 320px;
    height: 320px;
    border-radius: 50%
`;

class SvgSelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseCoordinates: {},
            gTransform: []
        };
        this.throttleMousemove = false;
    }
    _setGTransform = (newGTransform) => {
        this.setState({
            gTransform: newGTransform
        });
    }
    _mouseoutFunction = () => {
        console.log('mouse out');
        clearTimeout(this.throttleMousemove);
        let newGTransform = this.state.gTransform;
        for (var i = 0; i < newGTransform.length; i++) {
            newGTransform[i].x = 0;
            newGTransform[i].y = 0;
        }
        this.setState({
            gTransform: newGTransform
        });
    }
    _mousemoveFunction = (e) => {
        clearTimeout(this.throttleMousemove);
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        const setGTransform = this._setGTransform;
        this.throttleMousemove = setTimeout(function() {
            var listG = document.getElementById('SelfImage').querySelectorAll('polygon');
            var theRangeSquared = 110 * 110;
            var maxOffset = 12;
            let newGTransform = [];
            for (var i = 0; i < listG.length; i++) {
                var position = listG[i].getBoundingClientRect();
                var widthMod = position.width / 2;
                var heightMod = position.height / 2;
                var coordX = position.x + widthMod;
                var coordY = position.y + heightMod + window.scrollY;
                // distance from mouse
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
                newGTransform.push({
                    x: tx,
                    y: ty
                });
            }
            setGTransform(newGTransform);
        }, 5);
    }
    render() {
        let counter = 0;
        function returnTranslate(that) {
            counter++;
            let x = 0;
            if(that.state.gTransform[counter-1]) {
                x = that.state.gTransform[counter-1].x;
            }
            let y = 0;
            if(that.state.gTransform[counter-1]) {
                y = that.state.gTransform[counter-1].y;
            }
            return "translate("+x+" "+y+")";
        }
        return(
            <SvgImage id="SelfImage" onMouseLeave={this._mouseoutFunction} onMouseMove={this._mousemoveFunction} xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"  viewBox="0 0 320 320" enable-background="new 0 0 320 320">
                <rect fill="#444444" width="320" height="320"></rect>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#2DA17E" points="-1,243 -11,250 19,267  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#39AF8F" points="49,260 66,276 68.41,267.176  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#36AA87" points="-1,243 19,267 44,226  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33A986" points="44,226 19,267 49,260  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A986" points="49,260 19,267 58.273,287.441  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#36A886" points="44,226 74,249 78,240  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34AA8A" points="49,260 58.273,287.441 64,282  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FAC8A" points="49,260 64,282 66,276  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2AA77F" points="49,260 71,259 74,249  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#31A784" points="44,226 49,260 74,249  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A885" points="49,260 68.41,267.176 71,259  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A481" points="38,192 -1,243 44,226  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34A885" points="0,162 -1,243 38,192  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AD8A" points="44,226 78,240 83,232  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38B08C" points="44,226 83,232 86,226  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A683" points="44,226 86,226 89,190  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A683" points="38,192 44,226 89,190  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#35A785" points="19,267 -9,300 23,300  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2E9D7C" points="0,320 -12,323 2,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33A583" points="-11,250 -9,300 19,267  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2D9C7B" points="-9,300 0,320 23,300  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34A382" points="0,320 2,327 23,300  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34A480" points="23,300 39,326 42,322  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA67E" points="23,300 42,322 44,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AA89" points="23,300 44,317 51,305  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA380" points="23,300 51,305 58.273,287.441  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#31A582" points="19,267 23,300 58.273,287.441  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2D9F7D" points="23,300 2,327 39,326  "></polygon>
                </g>
                <g datatest="2">
                    <polygon transform={returnTranslate(this)} fill="#34A684" points="49,115 21,124 55,137  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA17F" points="-11,158 0,162 21,124  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#319E7E" points="-13,43 -11,158 21,124  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#36AA87" points="55,137 0,162 61,172  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A986" points="0,162 38,192 61,172  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9E7C" points="21,124 0,162 55,137  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35AB88" points="61,172 38,192 89,190  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#33A583" points="89,190 94,219 100.773,217.41  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35AF8A" points="89,190 86,226 94,219  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A980" points="89,190 100.773,217.41 108,212  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A885" points="89,190 108,212 117.906,205.926  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#39B18D" points="94,158 89,190 117.906,205.926  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#31A985" points="94,158 117.906,205.926 144,170  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#629586" points="137,199 145,187 145,182  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3D977D" points="117.906,205.926 124,206 133,202  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32AC85" points="144,170 117.906,205.926 145,182  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30AC87" points="117.906,205.926 133,202 145,182  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4D9780" points="137,199 143,195 145,187  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37A987" points="133,202 137,199 145,182  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#30A77F" points="55,137 94,158 100,132  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA583" points="55,137 61,172 94,158  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA783" points="61,172 89,190 94,158  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA481" points="49,115 55,137 100,132  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#31A784" points="100,132 94,158 123,136  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AE90" points="123,136 94,158 127,144  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34A883" points="127,144 94,158 133,150  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3DB391" points="133,150 94,158 144,170  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38AC89" points="86,80 49,115 100,132  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30AE88" points="120,107 100,132 120,116  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35AB89" points="86,80 100,132 120,107  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38A683" points="100,132 123,136 124,126  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3AA88B" points="120,116 100,132 124,126  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EB388" points="139,154 133,150 144,170  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#40AC8C" points="143,157 139,154 144,170  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#2F9C7C" points="-13,43 21,124 24,79  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#288D6D" points="0,0 -13,43 10,47  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F9474" points="0,0 10,47 29,27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#298E6E" points="0,0 29,27 79,-26  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2B9274" points="10,47 -13,43 24,79  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2D9C7B" points="24,79 49,115 62,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A9978" points="24,79 21,124 49,115  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#319E7F" points="10,47 24,79 62,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A9676" points="29,27 10,47 62,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#289575" points="29,27 62,59 80,11  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A9173" points="79,-26 29,27 80,11  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2B9D7B" points="62,59 49,115 86,80  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#31A381" points="62,59 116,62 118,51  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F9E7D" points="80,11 121,43 126,31  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A180" points="80,11 62,59 118,51  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9B7A" points="119,9 80,11 126,31  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A481" points="86,80 114,73 116,62  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37A987" points="62,59 86,80 116,62  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F9B7B" points="79,-26 80,11 119,9  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AB88" points="119,94 86,80 120,107  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34A382" points="80,11 118,51 121,43  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37A987" points="114,73 86,80 120,86  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33A784" points="86,80 119,94 120,86  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#2A9777" points="79,-26 119,9 163,1  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9B7A" points="79,-26 163,1 223,-26  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2E9A78" points="119,9 131,26 140,21  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2E9B7B" points="119,9 126,31 131,26  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A180" points="163,1 155,19 167,19  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9B7A" points="140,21 155,19 163,1  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2B9A79" points="119,9 140,21 163,1  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2D9C7B" points="163,1 167,19 181,22  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#349B7D" points="187,26 193,32 195,7  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A07C" points="181,22 187,26 195,7  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#309F7E" points="163,1 181,22 195,7  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#289A78" points="195,7 193,32 203,39  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33A186" points="163,1 195,7 223,-26  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A180" points="195,7 203,39 260,14  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#299676" points="223,-26 195,7 260,14  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#2F9A7E" points="298,39 351,96 364,11  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2E9276" points="320,0 298,39 364,11  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A8B6C" points="307,-18 320,0 364,11  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9979" points="298,39 284,95 351,96  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#238F6D" points="223,-26 260,14 307,-18  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9979" points="261,42 284,95 298,39  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#329D81" points="260,14 261,42 298,39  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#309577" points="307,-18 298,39 320,0  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#319678" points="260,14 298,39 307,-18  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#2B9E77" points="203,39 208,48 260,14  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A9A74" points="260,14 208,48 261,42  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA07E" points="208,48 211,58 261,42  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A785" points="212,69 249,106 261,42  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C9E7C" points="211,58 212,69 261,42  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA07E" points="261,42 249,106 284,95  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EAC87" points="212,86 209,99 249,106  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38AA88" points="209,99 206,110 249,106  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA481" points="212,69 212,78 249,106  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA180" points="212,78 212,86 249,106  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#32A983" points="206,110 204,119 249,106  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A986" points="295,138 251,139 296,175  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2FA582" points="235.109,182.273 248,184 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A683" points="204,147 210,162 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38B08C" points="203,136 204,147 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#30A884" points="227,180 235.109,182.273 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35AD89" points="212.438,167.949 216,173 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32AA86" points="216,173 227,180 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33AB87" points="210,162 212.438,167.949 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AF8B" points="204,119 203,136 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A885" points="249,106 204,119 251,139  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AD8A" points="251,139 248,184 257,187  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A986" points="249,106 251,139 295,138  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA481" points="251,139 257,187 296,175  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#32A483" points="295,138 320,162 351,96  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2D9C7B" points="284,95 295,138 351,96  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#32A888" points="320,162 309,209 345,198  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#36A886" points="284,95 249,106 295,138  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33A986" points="296,175 309,209 320,162  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A785" points="295,138 296,175 320,162  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#35A986" points="306,250 341,294 345,198  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33A986" points="309,209 306,250 345,198  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34AA87" points="296,175 283,208 309,209  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AB88" points="283,208 283,218 309,209  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2DA17E" points="283,218 286,232 309,209  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#31A582" points="286,232 306,250 309,209  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#36A98A" points="275,199 283,208 296,175  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA481" points="257,187 269,197 296,175  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#36AC89" points="269,197 275,199 296,175  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#2DA17E" points="306,250 287.285,270.246 341,294  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2CA27F" points="287.285,270.246 284.98,284.91 341,294  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2CA07D" points="285.66,305.723 294,327 320,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#35A88B" points="284,323 279,325 294,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2DA57F" points="285.66,305.723 283,317 294,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3AA48D" points="283,317 284,323 294,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#33AD86" points="286,261 287.285,270.246 306,250  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#34A684" points="285.66,305.723 320,320 341,294  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#37AB86" points="286,253 286,261 306,250  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#31A582" points="284.98,284.91 285.66,305.723 341,294  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2EA680" points="286,232 287,240 306,250  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2BA37D" points="287,240 286,253 306,250  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#537783" points="84.891,255.102 83.371,266.09 85.086,265.281  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#647682" points="70.141,276.234 77.199,287.59 77.73,273.285  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4B758B" points="85.965,303.867 86.828,306.652 87.039,302.227  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98B4B5" points="44,317 42,322 49,326  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#40A78C" points="39,326 40,329 42,322  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#49B092" points="58.273,287.441 57,298 61.066,288.434  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8CACBB" points="65,304 60,317 67,314  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#579F8B" points="44,317 50,313 51,305  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#648E8A" points="42,322 40,329 49,326  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#70929B" points="44,317 49,326 50,313  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#319E7F" points="51,305 57,298 58.273,287.441  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#88A5AD" points="51,305 50,313 60,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B6C8D4" points="75.684,309.27 67,314 77,321  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#429583" points="58.273,287.441 61.066,288.434 64,282  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6B8793" points="50,313 49,326 60,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#95A5A4" points="49,326 60,320 60,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#82A3B2" points="85.965,303.867 75.684,309.27 86.828,306.652  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A4C1C9" points="51,305 60,317 65,304  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9FB8BF" points="61.066,288.434 57,298 65,304  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C0D2DC" points="57,298 51,305 65,304  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5C8090" points="75.188,264.465 68.41,267.176 75.199,265.855  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0B3AF" points="60,317 60,320 67,314  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#65716D" points="60,320 73,330 77,321  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6D8492" points="68.41,267.176 66,276 70.141,276.234  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#728E91" points="66,276 64,282 70.141,276.234  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A1BABF" points="67,314 60,320 77,321  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B0C4CF" points="61.066,288.434 65,304 72.914,300.043  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F91AA" points="72.914,300.043 65,304 75.684,309.27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#568192" points="75.199,265.855 68.41,267.176 77.73,273.285  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#84A4B9" points="68.41,267.176 70.141,276.234 77.73,273.285  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B5D2DA" points="71,259 68.41,267.176 75.188,264.465  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#587271" points="77.73,273.285 83.695,278.648 84.148,275.914  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#638AAB" points="77,321 84,320 86.828,306.652  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#68838E" points="84.891,255.102 89.145,259.211 90.176,258.215  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7398AA" points="65,304 67,314 75.684,309.27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9EB7BC" points="61.066,288.434 72.914,300.043 77.199,287.59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C3CAD0" points="70.141,276.234 64,282 77.199,287.59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#69859A" points="75.684,309.27 77,321 86.828,306.652  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0B7BF" points="64,282 61.066,288.434 77.199,287.59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#85989E" points="81.535,286.855 77.199,287.59 87.039,302.227  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A5B3B4" points="83.371,266.09 77.73,273.285 84.148,275.914  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#638699" points="77.199,287.59 81.535,286.855 83.695,278.648  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BFCAD0" points="72.914,300.043 75.684,309.27 85.965,303.867  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#56727E" points="75.188,264.465 75.199,265.855 83.371,266.09  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3A4E4D" points="75.199,265.855 77.73,273.285 83.371,266.09  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9FB6BE" points="99.828,275.617 85.797,280.91 102.887,285.008  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#57666D" points="77.73,273.285 77.199,287.59 83.695,278.648  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#587B8E" points="87.039,302.227 86.828,306.652 91.133,301.438  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8295A4" points="77,321 73,330 84,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98ACB7" points="74,249 71,259 84.891,255.102  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#677E8C" points="71,259 75.188,264.465 84.891,255.102  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#91AFB7" points="75.188,264.465 83.371,266.09 84.891,255.102  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A5365" points="83.695,278.648 81.535,286.855 85.797,280.91  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CFDAE0" points="77.199,287.59 72.914,300.043 87.039,302.227  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5A8093" points="84.148,275.914 83.695,278.648 85.797,280.91  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4B6B78" points="72.914,300.043 85.965,303.867 87.039,302.227  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#617C85" points="81.535,286.855 87.039,302.227 91.133,301.438  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#648493" points="85.797,280.91 81.535,286.855 91.133,301.438  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4B6B82" points="84.148,275.914 85.797,280.91 88.879,271.477  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8398A9" points="83.371,266.09 84.148,275.914 88.879,271.477  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5F7B87" points="85.086,265.281 83.371,266.09 88.879,271.477  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#57625C" points="85.797,280.91 91.133,301.438 102.887,285.008  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C5D2DB" points="90.176,258.215 89.145,259.211 93.965,269.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#62808B" points="84.891,255.102 85.086,265.281 89.145,259.211  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#748C90" points="86.828,306.652 84,320 93,312  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7681" points="91.133,301.438 86.828,306.652 93,312  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#628392" points="84.891,255.102 90.176,258.215 91.996,253.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#83949E" points="85.086,265.281 88.879,271.477 93.965,269.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#495760" points="89.145,259.211 85.086,265.281 93.965,269.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#55737B" points="93.965,269.836 88.879,271.477 99.828,275.617  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#637D8A" points="84,320 91,328 98,319  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8DA5A7" points="93,312 84,320 98,319  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F8C9E" points="91.996,253.949 90.176,258.215 99.406,253.32  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E6479" points="90.176,258.215 93.965,269.836 99.406,253.32  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7296A2" points="102.887,285.008 91.133,301.438 106.309,306.168  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#536976" points="88.879,271.477 85.797,280.91 99.828,275.617  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D9D9D" points="91.133,301.438 93,312 106.309,306.168  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#496676" points="98,319 91,328 110,326  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#7C8992" points="137.094,306.84 139,316 147.168,306.727  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#85A3AE" points="128,282 128.742,290.098 137.23,289.887  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#789BAF" points="125.836,299.492 137.094,306.84 137.23,289.887  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9DAFB9" points="128.742,290.098 125.836,299.492 137.23,289.887  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#82918E" points="137.23,289.887 147.168,306.727 154.395,295.504  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#466D7C" points="125.836,299.492 125.016,302.582 137.094,306.84  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#869FB5" points="128,282 137.23,289.887 138.219,273.117  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#60748D" points="125.637,277.137 128,282 138.219,273.117  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#315B71" points="128,329 137,323 139,316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4C718E" points="137.094,306.84 125.016,302.582 139,316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#72878C" points="125.016,302.582 128,329 139,316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#94A1A7" points="147.168,306.727 139,316 152,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#94A6A6" points="139,316 137,323 152,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#394545" points="137.23,289.887 137.094,306.84 147.168,306.727  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#556877" points="147.102,285.949 137.23,289.887 154.395,295.504  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#77898B" points="138.219,273.117 137.23,289.887 147.102,285.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E6E79" points="137,323 128,329 152,327  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98A8A8" points="147.168,306.727 162,320 167.996,300.301  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B6974" points="138.219,273.117 147.102,285.949 155.398,273.027  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7783" points="154.395,295.504 147.168,306.727 167.996,300.301  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#446D89" points="147.168,306.727 152,327 162,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DFE9EB" points="154.395,295.504 167.996,300.301 168.813,284.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7C939B" points="168.402,281.766 147.102,285.949 168.813,284.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7F9193" points="155.398,273.027 147.102,285.949 168.402,281.766  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9BADB1" points="147.102,285.949 154.395,295.504 168.813,284.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DBE5DC" points="98,319 110,326 110,314  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7C9399" points="106.309,306.168 98,319 110,314  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4B5D5F" points="93,312 98,319 106.309,306.168  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D9695" points="99.828,275.617 102.887,285.008 106.898,279.379  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#869696" points="102.887,285.008 106.309,306.168 115.359,292.68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#586A6E" points="106.898,279.379 102.887,285.008 116.012,289.398  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#86A1A8" points="102.887,285.008 115.359,292.68 116.012,289.398  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E9EFEB" points="106.898,279.379 116.012,289.398 124.598,278.008  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D7883" points="115.359,292.68 125.016,302.582 125.836,299.492  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A5B4AD" points="106.309,306.168 110,314 125.016,302.582  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4C5E62" points="115.359,292.68 106.309,306.168 125.016,302.582  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#527281" points="124.598,278.008 116.012,289.398 128,282  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4C6993" points="125.637,277.137 124.598,278.008 128,282  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5A757E" points="125.016,302.582 110,314 128,329  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F4D55" points="110,314 110,326 128,329  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A1B2BA" points="115.359,292.68 125.836,299.492 128.742,290.098  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#627C89" points="116.012,289.398 115.359,292.68 128.742,290.098  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#93A7A5" points="128,282 116.012,289.398 128.742,290.098  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#5F7D97" points="125.637,277.137 138.219,273.117 138.953,270.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7797AE" points="123,260 125.637,277.137 138.953,270.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E6A6E" points="91.996,253.949 99.406,253.32 99.641,245.902  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AADADA" points="78,240 74,249 79.801,244.773  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#989D96" points="99.828,275.617 106.898,279.379 108.16,272.035  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0B6C4" points="79.801,244.773 74,249 84.891,255.102  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A2B5BC" points="81.711,244.57 79.801,244.773 84.891,255.102  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#62788F" points="92.34,241.375 91.996,253.949 99.641,245.902  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#81A5BD" points="88.047,240.523 91.996,253.949 92.34,241.375  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#96B4BE" points="88.047,240.523 81.711,244.57 91.996,253.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#779CAE" points="81.711,244.57 84.891,255.102 91.996,253.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7E9A9B" points="128.297,234.977 119.363,239.895 128.625,247.293  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7E90A6" points="113.93,251.309 102,252.328 117,259  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#89A5B1" points="99.641,245.902 99.406,253.32 102,252.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AAC5D0" points="99.641,245.902 102,252.328 106.594,241.27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#96A9B0" points="93.965,269.836 99.828,275.617 108.16,272.035  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7391A9" points="102,252.328 99.406,253.32 109.645,269.031  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F7D80" points="102,252.328 109.645,269.031 117,259  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#92B5CB" points="99.406,253.32 93.965,269.836 109.645,269.031  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AEC7DB" points="93.965,269.836 108.16,272.035 109.645,269.031  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C1DAF0" points="106.594,241.27 102,252.328 113.93,251.309  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ABC0D1" points="113.93,251.309 117,259 123,260  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B9D6DA" points="106.594,241.27 113.93,251.309 119.363,239.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#81A0B2" points="117,259 109.645,269.031 123,260  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#556C7E" points="108.16,272.035 106.898,279.379 124.598,278.008  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BFD2E1" points="109.645,269.031 108.16,272.035 124.598,278.008  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A5B7C1" points="123,260 109.645,269.031 125.637,277.137  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#88A0AC" points="109.645,269.031 124.598,278.008 125.637,277.137  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A6B8CC" points="119.363,239.895 113.93,251.309 128.625,247.293  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B0C6C4" points="113.93,251.309 123,260 128.625,247.293  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7D90A1" points="123,260 138.953,270.895 139.879,257.52  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8C9FA3" points="128.625,247.293 123,260 139.879,257.52  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CAD3DA" points="83,232 88.047,240.523 88.699,232.105  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#84999E" points="105.984,230.09 97.574,230.648 106.594,241.27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8BAEC2" points="108.207,221.34 113.445,224.352 114.336,213.84  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9ABBC4" points="78,240 79.801,244.773 81.711,244.57  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B5DCD7" points="86,226 83,232 88.699,232.105  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ABC8CE" points="94,219 86,226 97.574,230.648  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#96B6C3" points="78,240 81.711,244.57 88.047,240.523  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#80A1A6" points="83,232 78,240 88.047,240.523  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98B8CD" points="88.699,232.105 92.34,241.375 94.855,240.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BED1E0" points="86,226 88.699,232.105 97.574,230.648  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9FC2D6" points="88.699,232.105 88.047,240.523 92.34,241.375  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B4CFE0" points="88.699,232.105 94.855,240.207 97.574,230.648  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E3F2F7" points="94,219 99.492,228.68 100.773,217.41  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E1EFF8" points="108,212 108.207,221.34 114.336,213.84  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8DBECC" points="94,219 97.574,230.648 99.492,228.68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#597BA0" points="94.855,240.207 92.34,241.375 99.641,245.902  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8FAFBA" points="99.492,228.68 105.984,230.09 108.207,221.34  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#81A9B5" points="108.207,221.34 105.984,230.09 113.445,224.352  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#809CAA" points="99.492,228.68 97.574,230.648 105.984,230.09  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ADD1DF" points="97.574,230.648 94.855,240.207 106.594,241.27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B6DBE3" points="94.855,240.207 99.641,245.902 106.594,241.27  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D1EBF8" points="100.773,217.41 99.492,228.68 108.207,221.34  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BBC8CE" points="108,212 100.773,217.41 108.207,221.34  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#759AB5" points="114.336,213.84 113.445,224.352 118.215,226.727  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#547989" points="105.984,230.09 106.594,241.27 119.363,239.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A1C6E3" points="113.445,224.352 105.984,230.09 118.215,226.727  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6D8C9E" points="114.336,213.84 118.215,226.727 122.398,225.809  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B2CEDC" points="105.984,230.09 119.363,239.895 120.383,232.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E7185" points="118.215,226.727 105.984,230.09 120.383,232.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#74909B" points="114.336,213.84 122.398,225.809 131.316,219.77  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C8DDEE" points="129.078,209.625 114.336,213.84 131.316,219.77  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ABC7D5" points="118.215,226.727 120.383,232.004 122.398,225.809  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9AB2BC" points="122.398,225.809 120.383,232.004 125.082,227.043  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A5C4D8" points="120.383,232.004 119.363,239.895 128.297,234.977  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AAC5CE" points="125.082,227.043 120.383,232.004 128.297,234.977  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AFBEC5" points="122.398,225.809 125.082,227.043 131.316,219.77  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#789599" points="125.082,227.043 128.297,234.977 131.316,219.77  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#77B7A6" points="108,212 114.336,213.84 117.906,205.926  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6AB3AA" points="117.906,205.926 114.336,213.84 124,206  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B1CFDA" points="124,206 114.336,213.84 129.078,209.625  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A3B0A9" points="165.828,211.828 156.395,217.082 174.664,225.703  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DFF1FD" points="129.078,209.625 131.316,219.77 132.684,208.594  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#494A45" points="156.395,217.082 157.625,228.969 174.664,225.703  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9EB1B7" points="129.078,209.625 132.684,208.594 133,202  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C0F2E6" points="124,206 129.078,209.625 133,202  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#443F39" points="153.074,191.074 152.234,201.328 158.984,194.148  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E1ECF2" points="156.395,217.082 144.762,219.316 157.625,228.969  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#86C2C2" points="133,202 132.684,208.594 137,199  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#585B6E" points="143,195 152.234,201.328 153.074,191.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B0CAD9" points="131.316,219.77 128.297,234.977 143.766,229.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#506169" points="145,187 143,195 153.074,191.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B1C9D5" points="131.316,219.77 143.766,229.184 144.762,219.316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A7BFCB" points="132.684,208.594 131.316,219.77 144.762,219.316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5C6369" points="143,195 137,199 152.234,201.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#93B1B9" points="137,199 132.684,208.594 152.234,201.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#828F98" points="132.684,208.594 144.762,219.316 152.234,201.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D6B76" points="144.762,219.316 143.766,229.184 157.625,228.969  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E848F" points="152.234,201.328 165.828,211.828 168.133,209.387  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8A9694" points="152.234,201.328 144.762,219.316 156.395,217.082  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#1E2329" points="158.984,194.148 152.234,201.328 168.133,209.387  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#71645C" points="153.074,191.074 158.984,194.148 164.223,191.879  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#546577" points="152.234,201.328 156.395,217.082 165.828,211.828  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4C4744" points="164.223,191.879 158.984,194.148 168.133,209.387  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#617C8F" points="157.625,228.969 167.766,238.129 174.664,225.703  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#4D7994" points="154.809,271.684 155.398,273.027 164,268  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#718DA3" points="154.809,271.684 138.219,273.117 155.398,273.027  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ADB8BE" points="138.953,270.895 138.219,273.117 154.809,271.684  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#688B91" points="168.402,281.766 168.813,284.941 175.344,279.246  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#738B95" points="164,268 155.398,273.027 168.402,281.766  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#88A0AC" points="175.344,279.246 168.813,284.941 181.469,290.586  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#97ACAD" points="164,268 168.402,281.766 175.344,279.246  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#789593" points="172.809,265.797 164,268 175.344,279.246  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A8AFA8" points="159.195,252.227 154.809,271.684 164,268  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7E94A2" points="128.297,234.977 128.625,247.293 138.227,245.664  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E808C" points="138.227,245.664 128.625,247.293 139.879,257.52  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#748282" points="139.879,257.52 154.809,271.684 156.215,250.867  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D7E3E3" points="139.879,257.52 138.953,270.895 154.809,271.684  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#80949B" points="150.918,240.266 138.227,245.664 156.215,250.867  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D9E1E4" points="138.227,245.664 139.879,257.52 156.215,250.867  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#788990" points="150.918,240.266 156.215,250.867 167.766,238.129  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A5B1A5" points="156.215,250.867 154.809,271.684 159.195,252.227  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E5F79" points="156.215,250.867 159.195,252.227 167.766,238.129  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A3B3B3" points="143.766,229.184 150.918,240.266 157.625,228.969  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B5C2C8" points="128.297,234.977 138.227,245.664 143.766,229.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#607C88" points="159.195,252.227 164,268 164.977,253.859  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5C7079" points="143.766,229.184 138.227,245.664 150.918,240.266  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5A6D74" points="157.625,228.969 150.918,240.266 167.766,238.129  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#567C93" points="159.195,252.227 164.977,253.859 165.789,251.266  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7591A9" points="159.195,252.227 165.789,251.266 167.766,238.129  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D9EEF3" points="164.977,253.859 164,268 172.809,265.797  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#496569" points="165.789,251.266 164.977,253.859 175.023,259.117  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8A9AA7" points="164.977,253.859 172.809,265.797 175.023,259.117  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6B7F7D" points="165.789,251.266 175.023,259.117 181.688,239.395  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#697D84" points="167.766,238.129 165.789,251.266 181.688,239.395  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#526061" points="174.664,225.703 167.766,238.129 181.688,239.395  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#6A8485" points="178.172,303.168 176,320 180,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#546962" points="167.996,300.301 162,320 173.457,303.684  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#486273" points="173.457,303.684 176,320 178.172,303.168  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#415B6C" points="186.945,279.758 185.332,290.82 189.281,290.145  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#517488" points="167.996,300.301 173.457,303.684 175,300.43  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#80978F" points="168.813,284.941 167.996,300.301 175,300.43  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#395877" points="175,300.43 173.457,303.684 178.172,303.168  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E3EAE3" points="168.813,284.941 175,300.43 181.469,290.586  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#587289" points="178.426,277.766 175.344,279.246 181.469,290.586  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7297AA" points="215,316 210,325 225,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#547F8F" points="173.457,303.684 162,320 176,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2C4752" points="196,321 180,320 197,325  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#637A8C" points="175,300.43 178.172,303.168 181.469,290.586  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#637372" points="221.805,285.074 207.801,291.754 224.328,301.602  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#516D7B" points="181.469,290.586 185.332,290.82 186.945,279.758  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F4C5A" points="181.469,290.586 178.172,303.168 185.332,290.82  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C3CED2" points="178.426,277.766 181.469,290.586 186.945,279.758  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#96AEB8" points="186.945,279.758 189.281,290.145 199.371,278.195  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#405654" points="178.172,303.168 180,320 191.902,305.18  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3E5865" points="189.281,290.145 185.332,290.82 191.902,305.18  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#303F44" points="185.332,290.82 178.172,303.168 191.902,305.18  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#27475E" points="191.902,305.18 180,320 196,321  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8A929F" points="191.902,305.18 215,316 216,307  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CCD8D4" points="199.371,278.195 207.801,291.754 215.043,281.574  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7A8B9D" points="196,321 197,325 210,325  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#525A5C" points="189.281,290.145 191.902,305.18 207.801,291.754  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6D98A1" points="199.371,278.195 189.281,290.145 207.801,291.754  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#526F73" points="207.801,291.754 191.902,305.18 216,307  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#608699" points="196,321 210,325 215,316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#434844" points="191.902,305.18 196,321 215,316  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C2D4E0" points="207.801,291.754 216,307 224.328,301.602  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#465D6D" points="215.043,281.574 207.801,291.754 221.805,285.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#64797E" points="225,320 210,325 235,325  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#7DA1B7" points="238.91,281.328 245.426,288.645 245.559,288.137  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#869EAA" points="233.816,296 229.559,309.313 240.895,303.336  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B9C7D0" points="238.91,281.328 230.02,289.887 245.426,288.645  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C9D8DB" points="230.02,289.887 233.816,296 245.426,288.645  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A2BCCB" points="240.895,303.336 229.559,309.313 243,319  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B8D4DF" points="233.816,296 240.895,303.336 245.426,288.645  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5F889E" points="229.559,309.313 235,325 243,319  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3F4952" points="265,320 272,325 276,322  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A7BDD4" points="245.426,288.645 240.895,303.336 251.258,298.273  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C1D5DC" points="238.91,281.328 245.559,288.137 248.461,268.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#90A6B1" points="243,319 235,325 250,325  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#95AFBC" points="256.656,308.762 250,325 265,320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C8DADE" points="251.258,298.273 240.895,303.336 256.656,308.762  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0ABA5" points="240.895,303.336 243,319 256.656,308.762  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#546060" points="243,319 250,325 256.656,308.762  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#607D8F" points="258.223,294.285 256.656,308.762 261.07,293.879  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#97A8B0" points="251.258,298.273 256.656,308.762 258.223,294.285  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7298A1" points="245.559,288.137 245.426,288.645 258.223,294.285  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9DB2AD" points="245.426,288.645 251.258,298.273 258.223,294.285  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3F515D" points="274.457,277.184 264.469,276.039 276.398,290.195  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BCC6C5" points="245.559,288.137 258.223,294.285 264.469,276.039  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#506884" points="258.223,294.285 261.07,293.879 264.469,276.039  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#93B0C0" points="248.461,268.074 245.559,288.137 264.469,276.039  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2B4846" points="282,307 277.766,311.805 283,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F716E" points="277.766,311.805 265,320 278,315  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#596E83" points="264.469,276.039 261.07,293.879 276.398,290.195  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#595D5E" points="265,320 276,322 278,315  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F3F3E" points="276,322 272,325 279,325  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#627883" points="261.07,293.879 256.656,308.762 271.992,303.348  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9CA5AA" points="261.07,293.879 271.992,303.348 276.398,290.195  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#359E7D" points="283,317 276,322 284,323  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#444E4D" points="271.992,303.348 256.656,308.762 277.766,311.805  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F6D70" points="281.344,297.914 271.992,303.348 282,307  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#374248" points="256.656,308.762 265,320 277.766,311.805  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#1D3831" points="277.766,311.805 278,315 283,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5F6064" points="271.992,303.348 277.766,311.805 282,307  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#55595C" points="276.398,290.195 271.992,303.348 281.344,297.914  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E7176" points="274.457,277.184 276.398,290.195 279.414,278.25  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4D5850" points="284.98,284.91 283,291 285.66,305.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#606163" points="276.398,290.195 281.344,297.914 283,291  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4B997F" points="276,322 279,325 284,323  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E9381" points="282,307 283,317 285.66,305.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4F7161" points="278,315 276,322 283,317  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#354542" points="283,291 281.344,297.914 285.66,305.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#55766D" points="281.344,297.914 282,307 285.66,305.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4F5354" points="279.414,278.25 276.398,290.195 284.98,284.91  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#696768" points="276.398,290.195 283,291 284.98,284.91  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7B9397" points="237.348,280.699 230.02,289.887 238.91,281.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#708797" points="229.559,309.313 225,320 235,325  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E8FA2" points="221.805,285.074 224.328,301.602 227.867,289.012  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7396B6" points="221.805,285.074 227.867,289.012 237.348,280.699  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8BACBB" points="227.867,289.012 224.328,301.602 230.02,289.887  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7297B2" points="224.328,301.602 216,307 229.559,309.313  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A4C2CC" points="216,307 215,316 229.559,309.313  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8EAFC2" points="215,316 225,320 229.559,309.313  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4E727E" points="224.328,301.602 229.559,309.313 233.816,296  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C5E1E5" points="230.02,289.887 224.328,301.602 233.816,296  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#769DBE" points="227.867,289.012 230.02,289.887 237.348,280.699  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#232C33" points="239.547,260.945 235.988,272.836 248.461,268.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#92999F" points="235.988,272.836 238.91,281.328 248.461,268.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6D94B5" points="224.746,270.895 235.988,272.836 239.547,260.945  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F8FA8" points="222.609,256.906 224.746,270.895 239.547,260.945  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#81949A" points="234.492,248.859 222.609,256.906 239.547,260.945  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#83A4AB" points="234.492,248.859 239.547,260.945 252.207,250.223  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0AAB4" points="174.523,265.289 172.809,265.797 178.426,277.766  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#637F94" points="172.809,265.797 175.344,279.246 178.426,277.766  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9FADAE" points="178.426,277.766 186.945,279.758 190.035,271.395  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9EB0BC" points="174.523,265.289 178.426,277.766 190.035,271.395  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#93A1A4" points="197.566,271.035 190.035,271.395 199.371,278.195  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9EB0B4" points="190.035,271.395 186.945,279.758 199.371,278.195  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D5C48" points="197.566,271.035 199.371,278.195 205.59,265.48  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#43575E" points="205.59,265.48 199.371,278.195 215.043,281.574  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#1D3138" points="205.59,265.48 215.043,281.574 217.586,277.332  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#161C1C" points="217.586,277.332 221.805,285.074 224.746,270.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#94979E" points="222.16,269.266 217.586,277.332 224.746,270.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#506F83" points="213.469,264.527 205.59,265.48 217.586,277.332  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#132229" points="217.586,277.332 215.043,281.574 221.805,285.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#26424D" points="213.469,264.527 217.586,277.332 222.16,269.266  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#243F52" points="235.988,272.836 224.746,270.895 237.348,280.699  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#798989" points="224.746,270.895 221.805,285.074 237.348,280.699  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C7B78" points="235.988,272.836 237.348,280.699 238.91,281.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#374A59" points="220.914,238.785 215.906,255.594 222.609,256.906  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#608892" points="206.883,250.063 206.934,251.766 215.906,255.594  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F4A5B" points="214.848,262.262 222.16,269.266 222.609,256.906  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#567587" points="204.707,260.918 213.469,264.527 214.848,262.262  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#40515B" points="215.906,255.594 214.848,262.262 222.609,256.906  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#1A3C57" points="214.848,262.262 213.469,264.527 222.16,269.266  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C6D8E6" points="204.199,258.227 204.707,260.918 214.848,262.262  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7880" points="205.754,264.953 205.59,265.48 213.469,264.527  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#74838A" points="204.707,260.918 205.754,264.953 213.469,264.527  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#628694" points="206.934,251.766 204.199,258.227 215.906,255.594  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#95A8B6" points="204.199,258.227 214.848,262.262 215.906,255.594  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#385052" points="222.609,256.906 222.16,269.266 224.746,270.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B8C5CE" points="208.621,237.5 206.883,250.063 220.914,238.785  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#939DA7" points="206.883,250.063 215.906,255.594 220.914,238.785  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7A8682" points="231.297,241.078 222.609,256.906 234.492,248.859  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#919B9D" points="220.914,238.785 222.609,256.906 231.297,241.078  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7E91" points="231.297,241.078 234.492,248.859 236.785,238.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#708C9A" points="236.785,238.184 234.492,248.859 248.32,242.02  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7A8AA1" points="248.32,242.02 234.492,248.859 252.207,250.223  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D7E9F" points="175.023,259.117 172.809,265.797 175.234,262.152  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#728991" points="181.688,239.395 194.047,249.875 196.004,236.211  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6481A1" points="172.809,265.797 174.523,265.289 175.234,262.152  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7F9195" points="181.688,239.395 189.77,253.066 192.117,251.219  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F7FFFF" points="204.707,260.918 205.59,265.48 205.754,264.953  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7592A0" points="175.023,259.117 175.234,262.152 186.965,255.609  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#91ACB3" points="181.688,239.395 175.023,259.117 186.965,255.609  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B1C5CE" points="181.688,239.395 186.965,255.609 189.77,253.066  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#EEF5EE" points="186.965,255.609 175.234,262.152 190.035,271.395  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A4B7BE" points="175.234,262.152 174.523,265.289 190.035,271.395  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E899A" points="186.965,255.609 190.035,271.395 196.789,262.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8198A8" points="189.77,253.066 186.965,255.609 196.789,262.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#96ABB0" points="181.688,239.395 192.117,251.219 194.047,249.875  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#708CA1" points="192.117,251.219 189.77,253.066 196.789,262.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E8A95" points="194.047,249.875 192.117,251.219 196.789,262.328  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C8393" points="196.789,262.328 190.035,271.395 197.566,271.035  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#547F8F" points="206.883,250.063 205.379,251.504 206.934,251.766  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C93A2" points="205.379,251.504 204.199,258.227 206.934,251.766  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BCCACB" points="194.047,249.875 204.199,258.227 205.379,251.504  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B5C4C7" points="194.047,249.875 196.789,262.328 204.199,258.227  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0B7BF" points="204.199,258.227 196.789,262.328 204.707,260.918  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9DABAE" points="196.004,236.211 194.047,249.875 206.883,250.063  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9BADB7" points="204.707,260.918 196.789,262.328 205.59,265.48  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C7878" points="196.789,262.328 197.566,271.035 205.59,265.48  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A4B3B6" points="194.047,249.875 205.379,251.504 206.883,250.063  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BBD0D3" points="196.004,236.211 206.883,250.063 208.621,237.5  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#5C6A73" points="252.207,250.223 256.004,258.797 258.75,256.707  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BFD0E2" points="252.207,250.223 239.547,260.945 256.004,258.797  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#313E37" points="239.547,260.945 248.461,268.074 256.004,258.797  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D6B74" points="258.75,256.707 256.004,258.797 260.168,268.016  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2A3549" points="256.004,258.797 248.461,268.074 260.168,268.016  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#647376" points="258.75,256.707 260.168,268.016 260.695,268.09  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C2CECC" points="260.695,268.09 260.168,268.016 264.469,276.039  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#65777B" points="260.168,268.016 248.461,268.074 264.469,276.039  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7793A8" points="252.207,250.223 258.75,256.707 269.254,242.02  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#515153" points="286,261 282.211,270.785 287.285,270.246  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5C605F" points="279.414,278.25 284.98,284.91 287.285,270.246  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4A728C" points="276.652,249.438 260.695,268.09 277.266,272.559  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#596365" points="282.211,270.785 279.414,278.25 287.285,270.246  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#778284" points="264.469,276.039 274.457,277.184 277.266,272.559  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AEB5BD" points="258.75,256.707 260.695,268.09 276.652,249.438  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7081" points="260.695,268.09 264.469,276.039 277.266,272.559  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F7E85" points="269.254,242.02 258.75,256.707 276.652,249.438  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5A6466" points="277.266,272.559 274.457,277.184 279.414,278.25  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38454B" points="277.266,272.559 279.414,278.25 282.211,270.785  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#798385" points="276.652,249.438 277.266,272.559 286,261  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E6A78" points="286,253 276.652,249.438 286,261  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#635B66" points="277.266,272.559 282.211,270.785 286,261  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#99ADB6" points="248.32,242.02 252.207,250.223 260.215,237.828  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#567A94" points="260.215,237.828 252.207,250.223 269.254,242.02  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A1BBB8" points="271.957,241.555 276.652,249.438 277.668,237.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#899394" points="271.957,241.555 269.254,242.02 276.652,249.438  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#857E85" points="276.652,249.438 286,253 287,240  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8696A3" points="277.668,237.836 276.652,249.438 287,240  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#BCC6C7" points="260.504,192.918 253.602,206.004 264.242,207.453  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CDE5E9" points="253.602,206.004 257.887,211.094 264.242,207.453  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7199B3" points="269.949,207.465 266.922,207.152 270.074,211.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#70858A" points="274.699,229.273 277.668,237.836 278.348,231.68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#394B4F" points="277.582,228.844 274.699,229.273 278.348,231.68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D9AA2" points="275,199 269.949,207.465 283,208  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8797A7" points="258.438,227.625 266.891,233.211 267.918,220.965  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D3DAE2" points="258.195,225.203 258.438,227.625 267.918,220.965  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C3CED2" points="254.238,219.605 258.195,225.203 267.918,220.965  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8FABC0" points="264.242,207.453 266.922,207.152 269,197  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CCD4DF" points="269,197 269.949,207.465 275,199  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CDDAE0" points="257.887,211.094 254.238,219.605 267.918,220.965  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#556773" points="260.504,192.918 264.242,207.453 269,197  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B4C2CD" points="258.438,227.625 260.215,237.828 266.891,233.211  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#839EB1" points="269,197 266.922,207.152 269.949,207.465  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#688299" points="267.918,220.965 266.891,233.211 274.699,229.273  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4A5E67" points="266.891,233.211 260.215,237.828 269.254,242.02  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B7CDE4" points="257.887,211.094 267.918,220.965 270.074,211.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#91ABBA" points="264.242,207.453 257.887,211.094 270.074,211.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#79A3BC" points="266.922,207.152 264.242,207.453 270.074,211.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7D877F" points="266.891,233.211 269.254,242.02 271.957,241.555  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D95A2" points="267.918,220.965 281.445,225.602 283,218  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A4BAB8" points="270.074,211.949 267.918,220.965 283,218  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#394344" points="283,218 281.445,225.602 286,232  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B9298" points="267.918,220.965 274.699,229.273 277.582,228.844  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3F4E51" points="277.582,228.844 278.348,231.68 281.445,225.602  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A5B0AA" points="266.891,233.211 271.957,241.555 277.668,237.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6B7775" points="274.699,229.273 266.891,233.211 277.668,237.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ABB6BA" points="267.918,220.965 277.582,228.844 281.445,225.602  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8793A1" points="270.074,211.949 283,218 283,208  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C1D3D7" points="269.949,207.465 270.074,211.949 283,208  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#40515B" points="278.348,231.68 277.668,237.836 286,232  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#636E72" points="281.445,225.602 278.348,231.68 286,232  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#737A80" points="286,232 277.668,237.836 287,240  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#667E82" points="232.125,224.563 236.348,228.012 237.859,210.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#88A2BD" points="239.273,200.723 241.605,210.207 242.316,198.832  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8AA6B4" points="230.414,195.539 221.766,203.207 230.711,211.066  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#70898D" points="258.438,227.625 250.914,233.219 260.215,237.828  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B6C8D2" points="221.766,203.207 221.656,210.863 230.711,211.066  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#78858B" points="230.711,211.066 237.859,210.941 239.273,200.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#566872" points="230.711,211.066 221.656,210.863 232.125,224.563  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#909FA4" points="228.129,238.297 220.914,238.785 231.297,241.078  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#405D65" points="232.125,224.563 228.129,238.297 234.105,227.398  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#374D5A" points="230.711,211.066 232.125,224.563 234.320,212.031  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E1F3F3" points="221.656,210.863 211.723,226.984 232.125,224.563  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#79888F" points="220.914,238.785 228.129,238.297 232.125,224.563  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98B3BC" points="211.723,226.984 220.914,238.785 232.125,224.563  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#475A68" points="228.129,238.297 231.297,241.078 236.785,238.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B0C1C9" points="241.422,231.508 236.785,238.184 248.32,242.02  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BFD3DE" points="241.605,210.207 249.434,221.895 250.836,221.254  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6A899D" points="236.348,228.012 234.105,227.398 236.785,238.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C8999" points="234.105,227.398 228.129,238.297 236.785,238.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#859BA9" points="234.320,212.031 232.125,224.563 237.859,210.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#274056" points="232.125,224.563 234.105,227.398 236.348,228.012  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#899FAC" points="230.711,211.066 234.320,212.031 237.859,210.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F4FFFF" points="230.414,195.539 230.711,211.066 239.273,200.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#79919D" points="239.273,200.723 237.859,210.941 241.605,210.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#718B9C" points="236.348,228.012 236.785,238.184 241.422,231.508  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#38505C" points="241.605,210.207 237.859,210.941 249.434,221.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#899AA1" points="237.859,210.941 236.348,228.012 249.434,221.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ACBEC8" points="249.434,221.895 241.422,231.508 250.914,233.219  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#758F9C" points="241.422,231.508 248.32,242.02 250.914,233.219  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9DBAC2" points="250.836,221.254 258.066,227.352 258.195,225.203  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A1ADAD" points="236.348,228.012 241.422,231.508 249.434,221.895  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#69889D" points="253.602,206.004 241.605,210.207 254.238,219.605  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C3D8DD" points="253.602,206.004 254.238,219.605 257.887,211.094  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B2CDE0" points="241.605,210.207 250.836,221.254 254.238,219.605  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D4EAF7" points="242.316,198.832 241.605,210.207 253.602,206.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BDD0D6" points="251.605,192.918 242.316,198.832 253.602,206.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F9EB2" points="254.238,219.605 250.836,221.254 258.195,225.203  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7A8F" points="250.914,233.219 248.32,242.02 260.215,237.828  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#76A5C1" points="250.836,221.254 249.434,221.895 258.066,227.352  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ADCDE2" points="249.434,221.895 250.914,233.219 258.066,227.352  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C4D0D0" points="258.195,225.203 258.066,227.352 258.438,227.625  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B2C9D1" points="258.066,227.352 250.914,233.219 258.438,227.625  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ABCBD6" points="251.605,192.918 253.602,206.004 260.504,192.918  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#DFF5FF" points="235.895,191.531 242.316,198.832 244.695,188.676  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DAE4ED" points="241,185 235.895,191.531 244.695,188.676  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98B2C1" points="212.438,167.949 209.719,178.758 216,173  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#566680" points="201.852,189.113 210.93,206.320 215.613,200.293  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#98D0C7" points="235.109,182.273 241,185 248,184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A6B7C1" points="213.57,207.57 221.656,210.863 221.766,203.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C0D1D9" points="215.613,200.293 213.57,207.57 221.766,203.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#789DB0" points="210.93,206.320 206.043,215.133 213.57,207.57  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#82A7BA" points="209.938,186.688 201.852,189.113 215.613,200.293  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7B90" points="210.93,206.320 213.57,207.57 215.613,200.293  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B8D4E2" points="218.086,189.898 215.613,200.293 221.766,203.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#698A9B" points="209.938,186.688 218.086,189.898 220.754,178.988  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#71858C" points="209.938,186.688 215.613,200.293 218.086,189.898  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#667690" points="216,173 209.719,178.758 220.754,178.988  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#596E83" points="209.719,178.758 209.938,186.688 220.754,178.988  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7F96A6" points="206.043,215.133 211.723,226.984 221.656,210.863  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7593AF" points="213.57,207.57 206.043,215.133 221.656,210.863  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9DB1B0" points="216,173 220.754,178.988 227,180  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C3D9F0" points="235.109,182.273 229.367,190.137 235.895,191.531  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B7CDDA" points="220.754,178.988 218.086,189.898 227,180  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AEBFC7" points="229.367,190.137 230.414,195.539 235.895,191.531  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DAF2FE" points="235.895,191.531 230.414,195.539 239.273,200.723  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C3D4DE" points="227,180 218.086,189.898 229.367,190.137  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C9D7D7" points="229.367,190.137 218.086,189.898 230.414,195.539  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D7E6EB" points="249,187 244.695,188.676 251.605,192.918  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9DBDCC" points="218.086,189.898 221.766,203.207 230.414,195.539  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9AB3C9" points="227,180 229.367,190.137 235.109,182.273  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E6F7FF" points="235.109,182.273 235.895,191.531 241,185  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A8C7D9" points="235.895,191.531 239.273,200.723 242.316,198.832  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C7EEEB" points="248,184 244.695,188.676 249,187  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D9E3ED" points="244.695,188.676 242.316,198.832 251.605,192.918  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C4E4E3" points="241,185 244.695,188.676 248,184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BFE7E6" points="249,187 251.605,192.918 257,187  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7CC0B1" points="248,184 249,187 257,187  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E1EAF1" points="257,187 251.605,192.918 260.504,192.918  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E4FAF8" points="257,187 260.504,192.918 269,197  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#192C3B" points="209.719,178.758 200.113,180.949 209.938,186.688  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2D4957" points="200.113,180.949 201.852,189.113 209.938,186.688  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AFBDC8" points="201.852,189.113 195.77,200.199 210.93,206.320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D798F" points="195.77,200.199 206.043,215.133 210.93,206.320  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#686B64" points="210,162 202.047,167.332 212.438,167.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8C9A9B" points="202.047,167.332 200.113,180.949 209.719,178.758  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B9596" points="202.047,167.332 209.719,178.758 212.438,167.949  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#84999E" points="211.723,226.984 208.621,237.5 220.914,238.785  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#203A53" points="168.133,209.387 165.828,211.828 168.953,211.961  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BAC6C6" points="174.664,225.703 181.688,239.395 181.918,225.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#506367" points="185.16,225.941 181.688,239.395 196.004,236.211  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#183135" points="168.133,209.387 168.953,211.961 178.137,201.902  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AAB3AE" points="164.223,191.879 168.133,209.387 178.137,201.902  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#90AAB7" points="168.953,211.961 165.828,211.828 174.664,225.703  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5D8493" points="168.953,211.961 174.664,225.703 181.918,225.207  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8AA2A2" points="181.918,225.207 181.688,239.395 185.16,225.941  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#556F6C" points="178.137,201.902 168.953,211.961 185.266,207.086  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7A98B0" points="168.953,211.961 181.918,225.207 185.266,207.086  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8EA4A2" points="181.918,225.207 185.16,225.941 190.133,213.125  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BACCD0" points="185.266,207.086 181.918,225.207 190.133,213.125  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#81918E" points="185.266,207.086 190.133,213.125 195.77,200.199  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#839DB6" points="198.320,222.582 196.004,236.211 202.652,229.848  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#829DAE" points="190.133,213.125 185.16,225.941 198.320,222.582  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#879598" points="185.16,225.941 196.004,236.211 198.320,222.582  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#82A3B6" points="190.133,213.125 198.320,222.582 206.043,215.133  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#659192" points="195.77,200.199 190.133,213.125 206.043,215.133  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5B7574" points="202.652,229.848 196.004,236.211 208.621,237.5  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A8BDBE" points="198.320,222.582 202.652,229.848 211.723,226.984  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A1B5C0" points="206.043,215.133 198.320,222.582 211.723,226.984  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7898A7" points="202.652,229.848 208.621,237.5 211.723,226.984  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#53686D" points="200.113,180.949 191.535,179.004 201.852,189.113  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#373A3F" points="170,187 164.223,191.879 177.41,189.121  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#677580" points="183.09,191.633 180.246,193.184 185.555,194.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#778588" points="177.41,189.121 178.137,201.902 180.246,193.184  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#2F4455" points="170,187 177.41,189.121 179.539,186.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#727F85" points="177.41,189.121 164.223,191.879 178.137,201.902  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#505F64" points="183.09,191.633 185.555,194.836 185.789,191.414  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4A606E" points="170,187 179.539,186.949 181,178  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#476172" points="191,174 181,178 191.535,179.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#354447" points="179.539,186.949 183.09,191.633 185.789,191.414  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#283B49" points="179.539,186.949 177.41,189.121 183.09,191.633  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#283C43" points="177.41,189.121 180.246,193.184 183.09,191.633  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#22353C" points="180.246,193.184 178.137,201.902 185.555,194.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#49585D" points="178.137,201.902 185.266,207.086 185.555,194.836  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#4C6873" points="181,178 179.539,186.949 191.535,179.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#505B61" points="179.539,186.949 185.789,191.414 191.535,179.004  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#1B2D3B" points="191.535,179.004 185.789,191.414 201.852,189.113  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#546F76" points="185.789,191.414 185.555,194.836 195.77,200.199  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#566868" points="185.555,194.836 185.266,207.086 195.77,200.199  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#44565A" points="191,174 191.535,179.004 200.113,180.949  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#707C7C" points="191,174 200.113,180.949 202.047,167.332  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#3C556B" points="185.789,191.414 195.77,200.199 201.852,189.113  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#4D5353" points="145,182 145,187 153.074,191.074  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#78452A" points="145,182 153.074,191.074 158,170  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B5F3A" points="153,165 144,170 158,170  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#776245" points="143,157 144,170 153,165  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#795A3E" points="147,151 143,157 153,165  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6F4B29" points="147,151 153,165 159,145  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9B5F45" points="144,170 145,182 158,170  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C4023" points="158,170 153.074,191.074 164.223,191.879  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#884C30" points="158,170 164.223,191.879 170,187  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#784526" points="159,145 153,165 175,161  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#77452A" points="153,165 158,170 175,161  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#865034" points="175,161 158,170 181,178  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#865535" points="158,170 170,187 181,178  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#A16646" points="189,156 175,161 191,174  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A46546" points="175,161 181,178 191,174  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A6693C" points="189,156 202.047,167.332 207,159  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8C8185" points="207,159 202.047,167.332 210,162  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9F6744" points="189,156 191,174 202.047,167.332  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#774223" points="181,128 171,136 185,144  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7A3E22" points="171,136 175,161 185,144  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8C5328" points="185,144 175,161 189,156  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#975E33" points="204,147 189,156 207,159  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B4F2D" points="181,128 185,144 203,136  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8C542F" points="203,136 185,144 204,147  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#955D3A" points="185,144 189,156 204,147  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#67A282" points="204,147 207,159 210,162  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#815B46" points="120,116 124,126 124,121  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#5C5A43" points="139,154 143,157 147,151  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D07864" points="124,121 127,125 130,118  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6B3E2B" points="146,130 133,150 147,151  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9E8D6F" points="124,126 123,136 127,125  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BF755C" points="130,118 127,125 135,123  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B8785D" points="124,121 124,126 127,125  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6E5D43" points="133,150 139,154 147,151  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#995A37" points="127,125 123,136 135,123  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CB956F" points="123,136 127,144 135,123  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CA8B62" points="138,118 135,123 146,130  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#976751" points="127,144 133,150 146,130  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DD9F78" points="135,123 127,144 146,130  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B67B51" points="138,118 146,130 155,116  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9F6444" points="169,115 155,116 171,136  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#683B1E" points="146,130 147,151 159,145  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#774626" points="146,130 159,145 171,136  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A96F4A" points="155,116 146,130 171,136  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#6C3B1A" points="171,136 159,145 175,161  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#864622" points="190,107 176,108 190,117  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#814722" points="176,108 181,128 190,117  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7E442E" points="169,115 171,136 181,128  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B512C" points="176,108 169,115 181,128  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#82592D" points="190,117 203,136 204,119  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#843B1B" points="190,107 197,113 197,103  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8A4B2C" points="177,93 176,108 189,100  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D4C2C" points="189,100 176,108 190,107  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D18A6E" points="189,100 190,107 197,103  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#833D1B" points="190,107 190,117 197,113  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B5D3C" points="197,113 204,119 206,110  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#834B26" points="197,113 190,117 204,119  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#894D33" points="197,103 197,113 206,110  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#824621" points="190,117 181,128 203,136  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8F5C47" points="197,103 206,110 209,99  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#DE8D70" points="128,92 133,98 134,92  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B76A4E" points="128,92 127,99 133,98  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#70361E" points="119,94 120,107 121,100  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#854927" points="121,100 120,107 127,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8E3622" points="125,115 124,121 130,118  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A0624B" points="120,116 124,121 125,115  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BA9078" points="120,107 120,116 125,115  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B37451" points="127,99 120,107 133,112  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D18F6C" points="120,107 125,115 133,112  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8F5233" points="119,94 121,100 127,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A16145" points="119,94 127,99 128,92  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8E492A" points="133,98 127,99 133,112  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#95452C" points="125,115 130,118 133,112  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#EAB194" points="141,75 134,92 149,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CD8E6D" points="133,112 138,118 149,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C5795F" points="130,118 135,123 138,118  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7B2E14" points="133,112 130,118 138,118  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F9BA99" points="133,98 133,112 149,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E8A686" points="134,92 133,98 149,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CB8B65" points="149,99 138,118 155,116  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E89C7A" points="127,87 128,92 134,92  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F8B49D" points="127,87 120,86 128,92  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#FADEB9" points="120,86 119,94 128,92  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E6A07C" points="127,83 127,87 134,92  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F0BB99" points="127,83 134,92 141,75  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#F8CCA9" points="120,80 127,83 128,75  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ECB692" points="118,51 137,59 139,51  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9D9177" points="116,62 114,73 117,68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F3C8A6" points="127,83 120,86 127,87  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#79462B" points="121,74 120,80 128,75  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#583925" points="120,80 114,73 120,86  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7B4D2C" points="117,68 114,73 121,74  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#734C2F" points="114,73 120,80 121,74  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C98965" points="116,62 127,70 135,62  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E3BC9D" points="120,80 120,86 127,83  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C38A6F" points="116,62 117,68 127,70  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AA7154" points="117,68 121,74 127,70  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CE9C7B" points="127,70 121,74 128,75  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E2A883" points="118,51 116,62 135,62  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E1A986" points="118,51 135,62 137,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E4AE82" points="121,43 118,51 139,51  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#94532D" points="135,62 127,70 138,68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9E5D3D" points="127,70 128,75 138,68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#ECB18F" points="126,31 121,43 139,51  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E2A785" points="128,75 127,83 141,75  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#804326" points="138,68 128,75 141,75  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F0BEA5" points="126,31 139,51 145,34  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#F4ECE9" points="140,21 145,34 155,19  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F1D1BC" points="140,21 131,26 145,34  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E7D0B0" points="131,26 126,31 145,34  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F1CFB4" points="145,34 139,51 149,58  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#EABEA3" points="145,34 149,58 158,57  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DD9E75" points="145,34 158,57 174,41  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E7DFCC" points="167,19 155,19 174,41  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#EBB390" points="155,19 145,34 174,41  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E7C4AE" points="172,22 167,19 174,41  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#EBC4A5" points="172,22 174,41 181,22  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CE9067" points="174,41 158,57 180,55  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D6F0E5" points="167,19 172,22 181,22  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#EABEA1" points="181,22 174,41 187,26  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CE9C79" points="187,26 174,41 193,32  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CA936C" points="174,41 180,55 193,32  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#A9714C" points="180,55 176,68 191,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9A7A63" points="208,48 199,52 211,58  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A4724F" points="191,59 176,68 192,80  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B28159" points="193,32 199,52 203,39  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B7815B" points="193,32 180,55 199,52  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AC7A57" points="180,55 191,59 199,52  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#946039" points="191,59 192,80 201,74  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A86643" points="208,75 212,78 212,69  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7D452A" points="211,58 201,74 212,69  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#918066" points="203,39 199,52 208,48  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C77D56" points="201,74 208,75 212,69  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#925E36" points="191,59 201,74 211,58  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9C6A45" points="199,52 191,59 211,58  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#915531" points="177,93 189,100 191,87  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#93461C" points="191,87 201,97 201,91  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#904822" points="191,87 189,100 201,97  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D89376" points="189,100 197,103 201,97  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DC8D6C" points="201,91 201,97 209,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E59D84" points="201,97 197,103 209,99  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B96F54" points="201,91 209,99 212,86  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AD3F1A" points="212,78 204,84 212,86  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A73C1A" points="201,74 204,84 208,75  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A74329" points="201,74 198,78 204,84  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D5429" points="177,93 191,87 192,80  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AA7153" points="176,68 177,93 192,80  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9C5131" points="198,78 192,80 199,85  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#933C21" points="198,78 199,85 204,84  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BF7052" points="192,80 198,78 201,74  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#945029" points="192,80 191,87 199,85  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7C2E0A" points="199,85 191,87 201,91  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8F3918" points="199,85 201,91 204,84  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C77550" points="204,84 201,91 212,86  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BB411C" points="208,75 204,84 212,78  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#D79D75" points="141,75 149,99 149,72  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#F1BEA3" points="149,72 149,99 163,87  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#704125" points="142,66 145,69 148,65  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7C5035" points="148,65 145,69 149,72  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#532605" points="142,66 138,68 145,69  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8B5237" points="143,59 142,66 148,65  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#7A4123" points="137,59 142,66 143,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#BA8B6F" points="139,51 137,59 143,59  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#814523" points="135,62 138,68 142,66  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#804525" points="137,59 135,62 142,66  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#522B0A" points="138,68 141,75 145,69  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8A654B" points="145,69 141,75 149,72  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D0A28A" points="139,51 143,59 149,58  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#8D553C" points="143,59 148,65 149,58  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#966044" points="149,58 148,65 153,61  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#743E24" points="148,65 149,72 153,61  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#DDA687" points="149,58 153,61 158,57  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#D08862" points="158,57 153,61 176,68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A2694B" points="153,61 149,72 176,68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#E2AD8B" points="149,72 163,87 176,68  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C47B5B" points="176,68 163,87 177,93  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#C27E57" points="158,57 176,68 180,55  "></polygon>
                </g>
                <g>
                    <polygon transform={returnTranslate(this)} fill="#C27C5A" points="149,99 155,116 162,106  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#CC876A" points="149,99 162,106 163,87  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#A36242" points="162,106 176,108 177,93  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#B87151" points="163,87 162,106 177,93  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#AC6C50" points="162,106 155,116 169,115  "></polygon>
                    <polygon transform={returnTranslate(this)} fill="#9E5F3E" points="162,106 169,115 176,108  "></polygon>
                </g>
            </SvgImage>
        );
    }
}

export default SvgSelf;