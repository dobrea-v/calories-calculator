import React from 'react';
import './css/style.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.renderResults = this.renderResults.bind(this);
        this.showResults = this.showResults.bind(this);
        this.renderMainPage = this.renderMainPage.bind(this);

        this.state = {
            showResult: false,
        }
    }

    renderResults() {
        return (
            <div className="cc__results">
                Results:
            </div>
        )
    }

    renderMainPage() {
        return (
            <div className="cc__main-page">
                <div className="cc__main-page__title">
                    <span>Calories</span>
                </div>
                <div className="cc__main-page__title">
                    <span>Calculator</span>
                </div>
            </div>
        )
    }

    showResults() {
        console.log('show results');
        this.setState({
            ...this.state,
            showResult: true,
        })
    }

    render() {
        return (
            <div className="cc">
                <ReactCSSTransitionGroup
                    component="div"
                    className={`cc__main-page`}
                    transitionName="main-page"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <div className={`cc__main-page__title`}>
                        <span>Calories</span>
                    </div>
                    <div className="cc__main-page__title">
                        <span>Calculator</span>
                    </div>
                </ReactCSSTransitionGroup>
                <div className="cc__date-input">
                    <input type="text" name="" id="" />
                    <button onClick={() => this.showResults()}>Calculate</button>
                </div>
                <div className="cc__results">
                    Results:
                </div>
            </div>
        )
    }
}

export default App;