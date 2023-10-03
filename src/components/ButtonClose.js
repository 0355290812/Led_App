import React, { Component }  from 'react';
import Close from '../img/close.png';
class ButtonClose extends Component {
    constructor(props){
        super(props)
        this.state = {
            status : this.props.value
        }
        this.onClick = this.onClick.bind(this)
    }
    onClick(){ 
        let close = document.getElementById(this.state.status);
        close.style.display = "none";
    }
    render() {
        return (
            <div onClick={()=>{this.onClick()}}>
                <img id="close" src={Close}></img>
            </div>
        );
    }
}
export default ButtonClose;
