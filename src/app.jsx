import React from 'react';
import './css/style.scss';

class App extends React.Component {
    render() {
        return (
            <div className="cc">
                <div className="cc__main-page">
                    <h1>Calories calculator</h1>
                </div>
                <div className="cc__date-input">
                    <input type="text" name="" id="" />
                </div>
                <div className="cc__results">
                    Results:
                </div>
            </div>
        )
    }
}

export default App;