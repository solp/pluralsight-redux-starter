import {Link} from 'react-router';
import React,{Component} from 'react';

export default class HomePage extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1>PluralSight Administration</h1>
                <p>PluralSight Párrafo de introdución</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
            </div>
        );
    }
}
