import React, { Component } from 'react';
import Homepage from './Homepage';
import '../css/loginform.css'
class LoginForm extends Component {
    checkLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Tài khoản và mật khẩu được xác định trước
        const adminUsername = 'admin';
        const adminPassword = 'thuthaoxinhgai';

        // Kiểm tra tài khoản và mật khẩu
        if (username === adminUsername && password === adminPassword) {
            document.querySelector('.container').style.display = 'flex';
            console.log("Oke");
        } else {

        }
    }
    render() {
        return (
            <div class='super'>
                <form class="form card">
                <div class="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 class="form_heading">Sign in</h1>
                </div>
                <div class="field">
                    <label for="username">Username</label>
                    <input class="input" name="username" type="text" placeholder="Username" id="username"></input>
                </div>
                <div class="field">
                    <label for="password">Password</label>
                    <input class="input" name="user_password" type="password" placeholder="Password" id="password" />
                </div>
                <div class="field">
                    <button class="button">Login</button>
                </div>
            </form>
            </div>
        );
    }
}
export default LoginForm;
