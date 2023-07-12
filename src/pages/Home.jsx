import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import Product from '../components/Product';
import SimpleSlider from '../components/SimpleSlider';

function Home() {
  const title = 'React Bootstrap Template';

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-5 my-5 text-center">
         
          <div className="col-lg-6 mx-auto">
           
           
          </div>
        </div>
        {/* <ProductCarousel /> */}
        <SimpleSlider />
        {/* <Product /> */}
      </main>
    </>
  );
}

export default Home;
