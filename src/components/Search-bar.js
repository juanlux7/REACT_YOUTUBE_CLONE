import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    render(){

        return (

            <div className="row main-nav">

                <div className="col-md-2 col-sm-2">
                    <i className="fa fa-bars"></i>
                    <img src="/img/youtube-own-icon.png" className="youtube-icon" />
                </div>

                <nav className="col-md-8 col-sm-8">


                    <div className="search-container">
                        <input placeholder="Search"
                        value={this.state.term} 
                        onChange={event => this.onInputChange(event)}
                        onKeyUp={event => this.onInputChange(event)} /><button><i className="fa fa-search"></i></button>
                    </div>
                </nav>

                <div className="col-md-2 col-sm-2 icon-section">
                    <i className="fa fa-video"></i>
                    <i className="fa fa-th"></i>
                    <i className="fa fa-comment"></i>
                    <i className="fa fa-bell"></i>
                </div>

            </div>
        );
    }

    onInputChange(event){

        const term = event.target.value;

        this.setState({
            term: term      // with ES6 you can use one term var only
        })

        if(event.keyCode == 13){

            this.props.onSearchTerm(term);

        }
    }

}

export default SearchBar;