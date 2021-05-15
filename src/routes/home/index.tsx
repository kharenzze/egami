import { FunctionalComponent, h } from 'preact';
import { jsx } from "../../style/styled";

const Title = jsx('h1', {
    color: 'red'
})

const Home: FunctionalComponent = () => {
    return (
        <div>
            <Title>Home</Title>
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;
