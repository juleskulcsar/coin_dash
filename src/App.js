import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
//redux
import { Provider } from 'react-redux';
import store from './store';
//components
import SideBar from './components/SideBar';
import Routes from './components/Routes';
import Navbar from './components/Navbar';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    padding-left: 5em;
    top: 4em;
    border-radius: 20px;
    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Wrapper>
                    <SideBar />
                    <Switch>
                        <Route component={Routes} />
                    </Switch>
                </Wrapper>
            </Router>
        </Provider>
    );
};

export default App;
