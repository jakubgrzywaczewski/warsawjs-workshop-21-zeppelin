import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    self: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
};

class ProjectListPage extends PureComponent {
    render() {
        return <div>Project List Page</div>;
    }
}

export default withStyles(styles)(ProjectListPage);
