import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Las Contraseñas no Coinciden");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    handleChange = event => {
        const { name, value } = event.target; 

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">¿No tienes cuenta?</h2>
                <span>Registrate con tu correo electrónico</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Nombre" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Correo Electrónico" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Contraseña" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirmar Contraseña" required />
                    <CustomButton type="submit">Registrarse</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});
  
export default connect(null, mapDispatchToProps)(SignUp);
