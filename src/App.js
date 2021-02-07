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
    padding-left: 3em;
    margin: 0 auto;
    top: 4em;
    border-radius: 20px;
    /* height: 98vh; */
    width: 100%;
    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

const Container = styled.div`
    height: 98vh;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Container>
                    <Navbar />
                    <Wrapper>
                        <SideBar />
                        <Switch>
                            <Route component={Routes} />
                        </Switch>
                    </Wrapper>
                </Container>
            </Router>
        </Provider>
    );
};

export default App;
