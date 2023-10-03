import React, { Component } from 'react';
import ButtonClose from './ButtonClose';
import '../css/panel.css'
import axios from 'axios';

class WeatherPanel extends Component {
    constructor(props) {
        super(props);
    }
    async putWeather() {
        let location = document.querySelector('.select_location').value;
        let data = {
            location
        }
        let alert = document.querySelector('.alert');
        try {
            await axios.put(`https://ledserver.onrender.com/led/1`, data);
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
        return (
            <div className="panel">
                <div id="panel_weather_btn" className="aside-overlay">
                    <div className="panel_weather">
                        <p class='text_location'>Chọn địa điểm hiển thị</p>
                        <select class='select_location'>
                            <option value="HaNoi">Hà Nội</option>
                            <option value="SaiGon">Hồ Chí Minh</option>
                            <option value="HaiPhong">Hải Phòng</option>
                        </select>
                        <div className='btn_setcolor' onClick={() => this.putWeather() }>Submit</div>
                        <ButtonClose value="panel_weather_btn"></ButtonClose>
                    </div>
                </div>
            </div>
        );
    }
}
export default WeatherPanel;
