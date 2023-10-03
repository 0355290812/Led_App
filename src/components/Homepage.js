import React, { Component }  from 'react';
import '../css/homepage.css'
import FunctionButton from './FunctionButton';
import Toast from './Toast';
class Homepage extends Component {
    render() {
        return (
            <div className="container">
                <div className="info">Group XVI</div>
                <FunctionButton></FunctionButton>
                <Toast></Toast>
            </div>
        );
    }
}
export default Homepage;
