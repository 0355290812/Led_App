import React, { Component } from 'react';
import '../css/toast.css';
class Toast extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="alert">
                This is an alert box.
            </div>
        );
    }
}
export default Toast;
