import React, { Component } from 'react';
import { withStyles, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from './actions';

import * as urls from './urls';

const styles = {
    form: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center'
    },
    self: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300
    }
};

class LoginPage extends Component {
    state = {
        submitting: false,
        username: '',
        password: ''
    };

    handleChangeUsername = event => {
        this.setState({ username: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };
    handleSubmit = () => {
        const { login } = this.props;
        const { username, password } = this.state;
        this.setState({ submitting: true });
        login({ username, password })
            .then(() => {
                const { history } = this.props;
                history.replace(urls.PROJECT_LIST);
            })
            .catch(error => {
                this.setState({ username: '', password: '', submitting: false });
            });
    };
    render() {
        const { classes } = this.props;
        const { username, password } = this.state;
        return (
            <form className={classes.form}>
                <div className={classes.self}>
                    <TextField label="Username" name="username" value={username} onChange={this.handleChangeUsername} />
                    <TextField label="Password" name="password" value={password} onChange={this.handleChangePassword} />
                    <Button variant="raised" onClick={this.handleSubmit}>
                        Login
                    </Button>
                </div>
            </form>
        );
    }
}
function mapStateToProps(state) {
    return {};
}
const mapDispatchToProps = {
    login: actions.login
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(LoginPage)
);
