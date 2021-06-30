  import {useParams} from 'react-router-dom';

const Products = () => {

    const {id} = useParams();

    return ( 
        <div>
            
            <h1>Product Id: {id} </h1>

        </div>

    );

}
 
export default Products;