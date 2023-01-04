import './App.css';
import PreviewCard from './components/PreviewCard';
import productImg from './images/image-product-desktop.jpg';

function App() {
    const product = {
        image: productImg,
        category: 'Perfume',
        title: 'Gabrielle Essence Eau De Parfum',
        description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
        currentPrice: '$149.99',
        oldPrice: '$169.99',
    }

    return (
        <div className="App">
            <PreviewCard data={product}/>
        </div>
    );
}

export default App;
