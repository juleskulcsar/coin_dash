import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//redux
import { Provider } from 'react-redux';
import store from './store';
import TopChart from './components/TopChart';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <>
                    <Switch>
                        <Route exact path='/' component={TopChart} />
                    </Switch>
                </>
            </Router>
        </Provider>
    );
};

export default App;
