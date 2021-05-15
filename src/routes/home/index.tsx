import { FunctionalComponent, h } from 'preact';
import { jsx } from "../../style/styled";

const Title = jsx('h1', {
    color: 'red'
})

const Upload = jsx('button', {})

const Home: FunctionalComponent = () => {
    const onClick: () => void = () => {
        console.log('click')
    }
    return (
        <div>
            <Title>Home</Title>
            <p>This is the Home component.</p>
            <Upload onClick={onClick}>Upload</Upload>
        </div>
    );
};

export default Home;
