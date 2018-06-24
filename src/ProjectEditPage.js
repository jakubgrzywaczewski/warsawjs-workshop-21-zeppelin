import React, { PureComponent } from 'react';

class ProjectEditPage extends PureComponent {
    state = {
        loading: true
    };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const { projectId, readProject } = this.props;
        this.setState({ loading: true });
        readProject(projectId)
            .then(() => {
                this.setState({ loading: false });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        return <div>Project Edit Page</div>;
    }
}

export default ProjectEditPage;
