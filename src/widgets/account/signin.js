
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SigninForm extends Component {
    render() {
        return (
            <>
                <div>
                    <h2 class="text-center mb-3">Sign In</h2>
                    <form id="contact-form" method="post" action="https://themeht.com/template/bootsland/html/php/contact.php">
                        <div class="messages"></div>
                        <div class="form-group">
                            <label>User Name</label>
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="User name" required="required" data-error="Username is required." />
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input id="form_password" type="password" name="password" class="form-control" placeholder="Password" required="required" data-error="password is required." />
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group mt-4 mb-5">
                            <div class="remember-checkbox d-flex align-items-center justify-content-between">
                                <div class="form-check mb-0">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label mb-0" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <Link src="#">Forgot Password?</Link>
                            </div>
                        </div> <Link src="#" class="btn btn-primary btn-block">Login Now</Link>


                    </form>
                    <div class="d-flex align-items-center text-center justify-content-center mt-4">
                        <span class="text-muted me-1">Don't have an account?</span>
                        <Link src="/signup">Sign Up</Link>
                    </div>
                </div>
            </>
        );
    }
}

export default SigninForm;