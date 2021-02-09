import styled, { css, keyframes } from 'styled-components';

const rotateSpinner = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

const Spinner = styled.div`
    height: 90px;
    width: 90px;
    border: 6px solid #f16350;
    border-radius: 50%;
    border-top: none;
    border-right: none;
    /* visibility: ${props => (props.isVisible ? 'visible' : 'hidden')}; */
    position: relative;
    top: 15rem;
    left: 5rem;
    width: 100px;
    height: 100px;
    margin-right: 2rem;
    margin-left: 2rem;
    animation: ${rotateSpinner} 1s linear infinite;
`;

export { Spinner };
