import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});



class TextFields extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleSubmit = (e) => {
        const values = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log(values);

        fetch('http://localhost:7050/signup', {
            method: 'POST',
            body: JSON.stringify(values)
        })
            .then(res => res)
            .then(data => {
                console.log(data);

                    window.location = '/login';
                this.setState({data: data, open: true, mensaje: data.mensaje});
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    };

    handleChange = name => event => {
        event.preventDefault();
        this.setState({
            [name]: event.target.value,
        });
    };



    render() {
        const { classes, mensaje } = this.props;

        return (
            <form  autoComplete="off" onSubmit={this.handleSubmit}>

                <TextField
                    id="search"
                    label="Username"
                    type="search"
                    margin="normal"
                    className={classes.textField}
                    value={this.state.equipo}
                    onChange={this.handleChange('username')}
                    required={true}
                />

                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    className={classes.textField}
                    autoComplete="current-password"
                    margin="normal"
                    value={this.state.equipo}
                    onChange={this.handleChange('password')}
                    required={true}
                />
                <br></br>
                <Button raised color="primary" onClick={this.handleSubmit}>
                    <Done/>
                    {mensaje}
                </Button>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);