import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SigninForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            remember_me: ""
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
        console.log('Set value..', this.setState.remember_me)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // You can perform form submission logic here
        console.log("**********Form submitted:********", this.state);

        const apiUrl = 'http://localhost:3000/signin';

        const postData = {
            email: this.state.email,
            password: this.state.password,
            remember_me: this.state.remember_me
        };
        axios.post(apiUrl, postData)
            .then((response) => {
                if (response.data.code === 500) {
                    toast.error(response.data.error);
                } else if (response.data.code === 200) {
                    if (response.data.status === 'success') {
                        toast.success(response.data.message);
                    } else if (response.data.status === "error") {
                        toast.error(response.data.message);
                    }
                    // Reset form fields if needed
                    this.setState({
                        email: "",
                        password: "",
                        remember_me: false
                    });
                }
            })
            .catch((error) => {
                console.error('Error making POST request:', error);
                // Handle errors appropriately
                toast.error('An error occurred.');
            });
    };

    render() {
        return (
            <>
                <div>
                    <h2 class="text-center mb-3">Sign In</h2>
                    <form id="signin-form" method="post" onSubmit={this.handleSubmit}>
                        <div class="messages"></div>
                        <div class="form-group">
                            <label>Email</label>
                            <input id="form_name"
                                   type="text"
                                   name="email"
                                   class="form-control"
                                   placeholder="Email"
                                   required="required"
                                   data-error="Email is required."
                                   onChange={this.handleInputChange}
                                   value={this.state.email}
                            />
                            <div class=" help-block with-errors"></div>
                        </div>
                        <div class=" form-group">
                            <label>Password</label>
                            <input id="form_password"
                                   type="password"
                                   name="password"
                                   class="form-control"
                                   placeholder="Password"
                                   required="required"
                                   data-error="password is required."
                                   onChange={this.handleInputChange}
                                   value={this.state.password}
                            />
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group mt-4 mb-5">
                            <div class="remember-checkbox d-flex align-items-center justify-content-between">
                                <div class="form-check mb-0">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           id="remember_me"
                                           name="remember_me"
                                           value={this.state.remember_me}
                                           onChange={this.handleInputChange}
                                    />
                                    <label class="form-check-label mb-0" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <Link src="#">Forgot Password?
                                </Link>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>


                    </form>
                    <div class="d-flex align-items-center text-center justify-content-center mt-4">
                        <span class="text-muted me-1">Don't have an account?</span>
                        <Link to="/sign-up">Sign Up</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default SigninForm;