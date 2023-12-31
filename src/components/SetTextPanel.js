import React, { Component } from 'react';
import '../css/panel.css'
import ButtonClose from '../components/ButtonClose';
import axios from 'axios'

class SetTextPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            color: [
                { name: 'Đỏ', data: { r: 7, g: 0, b: 0, rw: 255, gw: 0, bw: 0 } },
                { name: 'Xanh Lá Cây', data: { r: 0, g: 7, b: 0, rw: 0, gw: 255, bw: 0 } },
                { name: 'Xanh Dương', data: { r: 0, g: 0, b: 7, rw: 0, gw: 0, bw: 255 } },
                { name: 'Trắng', data: { r: 7, g: 7, b: 7, rw: 255, gw: 255, bw: 255 } },
                { name: 'Vàng', data: { r: 7, g: 7, b: 0, rw: 255, gw: 255, bw: 0 } },
                { name: 'Xanh Lam', data: { r: 0, g: 7, b: 7, rw: 0, gw: 255, bw: 255 } },
                { name: "Hồng Đào", data: { r: 7, g: 0, b: 7, rw: 255, gw: 0, bw: 255 } },
                { name: "Tím purple", data: { r: 4, g: 0, b: 7, rw: 127, gw: 0, bw: 255 } },
                { name: "Hồng", data: { r: 7, g: 0, b: 4, rw: 255, gw: 0, bw: 127 } },
            ],
            text: "",

        }
        this.onClickLeft = this.onClickLeft.bind(this);
        this.onClickRight = this.onClickRight.bind(this);
        this.onChange = this.onChange.bind(this);
        this.PostData = this.PostData.bind(this);
    }
    onClickLeft() {
        let i_old = this.state.index;
        i_old--;
        if (i_old < 0) {
            i_old = 8;
        }
        this.setState({ index: i_old });
    }
    onClickRight() {
        let i_old = this.state.index;
        i_old++;
        if (i_old > 8) {
            i_old = 0;
        }
        this.setState({ index: i_old });
    }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.text)
    }
    async PostData() {
        let alert = document.querySelector('.alert');
        try {
            let { index, color, text } = this.state;
            let scroll_cb = document.getElementById('check-apple');
            if (text === "") {
                let program = 2;
                if (scroll_cb.checked) {
                    program = 3
                } else {
                    program = 2
                }
                await axios.put(`https://ledserver.onrender.com/led/${program}`,{});
                alert.innerHTML = "Dữ liệu được gửi thành công";
                alert.style.backgroundColor = '#04aa6d';
                alert.style.display = 'block';
                setTimeout(function () {
                    alert.style.display = 'none';
                }, 2000);

            } else {
                let data = {
                    program: 2,
                    text: text,
                    color: {
                        r: color[index].data.r,
                        g: color[index].data.g,
                        b: color[index].data.b
                    }
                }
                if (scroll_cb.checked) {
                    data.program = 3;
                } else {
                    if (text.length > 10) {
                        alert.innerHTML = "Chữ quá dài, vui lòng nhập lại! (Tối đa 10 ký tự)";
                        alert.style.backgroundColor = 'orange';
                        alert.style.display = 'block';
                        setTimeout(function () {
                            alert.style.display = 'none';
                        }, 2000);
                        return;
                    }
                }
                await axios.put(`https://ledserver.onrender.com/led/${data.program}`,data);
                alert.innerHTML = "Dữ liệu được gửi thành công";
                alert.style.backgroundColor = '#04aa6d';
                alert.style.display = 'block';
                setTimeout(function () {
                    alert.style.display = 'none';
                }, 2000);
                this.setState({ text: "" });
            }

        } catch (error) {
            alert.innerHTML = "Có lỗi, vui lòng thử lại";
            alert.style.backgroundColor = 'red';
            alert.style.display = 'block';
            setTimeout(function () {
                alert.style.display = 'none';
            }, 2000);
        }

    }
    render() {
        let { index, color } = this.state;
        return (
            <div className="panel">
                <div id="panel_settext_btn" className="aside-overlay">
                    <div className="panel_settext">
                        <p>Choose Your Color</p>
                        <div className='img_color'>
                            <div className='btn_control' onClick={() => { this.onClickLeft() }}>{'<'}</div>
                            <div>
                                <div className='test_color' style={{ width: '108px', height: '108px', backgroundColor: `rgb(${color[index].data.rw},${color[index].data.gw},${color[index].data.bw})` }}></div>
                            </div>
                            <div className='btn_control' onClick={() => { this.onClickRight() }}>{'>'}</div>
                        </div>
                        <div className='color_name' style={{ color: `rgb(${color[index].data.rw},${color[index].data.gw},${color[index].data.bw})` }} >{color[index].name}</div>
                        <input id='input_text' type="text" name="text" placeholder='input text here!' value={this.state.text} onChange={this.onChange}></input>
                        <p class='scroll_label'>Scroll</p>
                        <div class="checkbox-apple">
                            <p>Scroll</p>
                            <input class="yep" id="check-apple" type="checkbox"></input>
                                <label for="check-apple"></label>
                        </div>
                        <div className='btn_setcolor' onClick={() => { this.PostData();}}>Submit</div>
                        <ButtonClose value="panel_settext_btn"></ButtonClose>
                    </div>
                </div>
            </div>
        );
    }
}
export default SetTextPanel;
