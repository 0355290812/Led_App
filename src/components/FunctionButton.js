import React, { Component } from 'react';
import '../css/function.css'
import SetTextPanel from './SetTextPanel';
import WeatherPanel from './WeatherPanel';
import axios from 'axios';
import Toast from './Toast';

class FunctionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lable: this.props.lable
        }
    }
    async onclickGetWeather(location) {
        let alert = document.querySelector('.alert');
        try {
            await axios.put(`https://ledserver.onrender.com/led/1`, {location});
            alert.innerHTML = "Dữ liệu được gửi thành công";
            alert.style.backgroundColor = '#04aa6d';
            alert.style.display = 'block';
            setTimeout(function () {
                alert.style.display = 'none';
            }, 2000);
        } catch (error) {
            alert.innerHTML = "Có lỗi xảy ra vui lòng thử lại";
            alert.style.backgroundColor = 'red';
            alert.style.display = 'block';
            setTimeout(function () {
                alert.style.display = 'none';
            }, 2000);
        }
    }
    onClickDisplay(text_id) {
        let open = document.getElementById(text_id);
        open.style.display = "flex";
    }
    async onclickIcon() {
        let alert = document.querySelector('.alert');
        try {
            await axios.put(`https://ledserver.onrender.com/led/4`, {});
            alert.innerHTML = "Dữ liệu được gửi thành công";
            alert.style.backgroundColor = '#04aa6d';
            alert.style.display = 'block';
            setTimeout(function () {
                alert.style.display = 'none';
            }, 2000);
        } catch (error) {
            alert.innerHTML = "Có lỗi xảy ra vui lòng thử lại";
            alert.style.backgroundColor = 'red';
            alert.style.display = 'block';
            setTimeout(function () {
                alert.style.display = 'none';
            }, 2000);
        }
    }
    render() {
        let { lable } = this.state;
        console.log(this.props);
        return (
            <div className="function">
                <div className='func_lable'>{lable}</div>
                <div className='panel_contain'>
                    <SetTextPanel></SetTextPanel>
                    <WeatherPanel></WeatherPanel>
                    <div className='button' onClick={() => { this.onClickDisplay('panel_weather_btn')}}>Weather Display</div>
                    <div className='button' onClick={() => { this.onClickDisplay('panel_settext_btn') }}>Set Text Display</div>
                    <div className='button' onClick={() => { this.onclickIcon() }}>Icon Display</div>
                </div>
            </div>
        );
    }
}
export default FunctionButton;
