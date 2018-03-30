import React from 'react';
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    mediumIcon: {
        width: 48,
        height: 48,
    },
    medium: {
        width: 96,
        height: 96,
        padding: 24,
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <Link to='/' ><IconButton
                    iconStyle={styles.mediumIcon}
                    style={styles.medium}
                >
                    <ActionHome />
                </IconButton></Link>
                <hr />
            </div>
        )
    }
}

export default Header;
