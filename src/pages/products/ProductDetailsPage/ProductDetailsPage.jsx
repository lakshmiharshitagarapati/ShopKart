import {Link,useParams} from 'react-router-dom';
import {useProduct} from '../../../features/products/hooks/useProducts';
import styles from "./ProductDetailsPage.module.css";

const ProductDetailsPage = () => {
    const {productId }=useParams();
    // useparms hook helps me access the url path parameters in the 
    return (
        <>
        
        </>
    )
}

export default ProductDetailsPage;