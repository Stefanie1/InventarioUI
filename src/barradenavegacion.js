/*import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import logo from './unam7.png';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class barradenavegacion extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
           {/!* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>*!/}
            <img type='image/svg' className="nav-bar-img" src={logo} alt="logo"/>
            <Typography type="title" color="inherit" className={classes.flex}>
              Inventarios Nuevo León 
            </Typography>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                      <Link to={}Registrarse</MenuItem>

                  <MenuItem onClick={this.handleClose}>Mi cuenta </MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

barradenavegacion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(barradenavegacion);*/


import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, {MenuItem} from 'material-ui/Menu';
import {Link, Redirect} from 'react-router-dom';
import logo from './unam7.png';

const styles = theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class barradenavegacion extends React.Component {

    getUser = () => {
        var getCookieValues = function (cookie) {
            var cookieArray = cookie.split('=');
            return cookieArray[1].trim();
        };

        var getCookieNames = function (cookie) {
            var cookieArray = cookie.split('=');
            return cookieArray[0].trim();
        };

        var cookies = document.cookie.split(';');
        var cookieValue = cookies.map(getCookieValues)[cookies.map(getCookieNames).indexOf('user')];

        return (cookieValue === undefined) ? null : cookieValue;
    }

    state = {
        auth: true,
        anchorEl: null,
        user: this.getUser(),
        logout: null,
    };

    handleChange = (event, checked) => {
        this.setState({auth: checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        var user = this.getUser();
        console.log('Useer: '+user);

        if (this.state.logout === 'logout')
            this.setState({anchorEl: null, user: user, logout: null});
        else
            this.setState({anchorEl: null, user: user});
    };


    handleLogout = () => {
        document.cookie = 'JSESSIONID' + '=; Max-Age=0';
        document.cookie = 'user' + '=; Max-Age=0';
        document.cookie = 'timestamp' + '=; Max-Age=0';
        this.setState({logout: 'logout', user: ''});
    };


    render() {
        const {classes} = this.props;
        const {auth, anchorEl, logout} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                            <MenuIcon/>
                        </IconButton>
                        <img type='image/svg' className="nav-bar-img" src={logo} alt="logo"/>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            Inventarios Nuevo León
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="contrast"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleRequestClose}
                                >
                                    {this.state.logout && (
                                        <Redirect to='/'/>
                                    )}


                                    {this.state.user !== null && (
                                        <MenuItem onClick={this.handleRequestClose}>
                                            <a onClick={this.handleLogout}>Logout</a>
                                        </MenuItem>
                                    )}
                                    {this.state.user === null && (
                                        <MenuItem onClick={this.handleRequestClose}>
                                            <Link to="/login">Login</Link></MenuItem>

                                    )}
                                    {this.state.user === null && (
                                        <MenuItem onClick={this.handleRequestClose}>
                                            <Link to="/registro">Sign Up</Link></MenuItem>
                                    )}
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

barradenavegacion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(barradenavegacion);