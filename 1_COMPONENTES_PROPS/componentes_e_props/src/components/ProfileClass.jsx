import { Component } from 'react';


class ProfileClass extends Component {
    render () {
        const {name, age, job} = this.props;

        return (
            <>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <h3>Job: {job}</h3>
            </>
        )
    }
}

export default ProfileClass;