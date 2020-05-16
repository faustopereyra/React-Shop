import React from "react";

import FormImput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.style.scss"

class SingIn extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sing-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormImput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required
                    />

                    <FormImput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />

                    <CustomButton type="submit"> Sing in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sing in with Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SingIn;