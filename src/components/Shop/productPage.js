import React, {useState} from "react";
import ProductsData from "./ProductsData";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../breadCrumb";


export default function ProductPage(props) {


  const { productId } = useParams();
  const thisProduct = ProductsData.find((prod) => prod.id === productId);
  const thisProductReviews = thisProduct.reviews.map((review) => {
    return(
        <div>{review}</div>
        
    )
  });
  const [currentImg, setCurrentImg] = useState(thisProduct.imageUrl);
  const handleExtraImgClick = (imgUrl) => {
    setCurrentImg(imgUrl);
  };

  return (
    <div>
      <Breadcrumbs />
    <div style={{ display: 'flex', marginTop:"2rem", padding: '1rem'}}>
      <div className="Images" style={{ display: 'flex' }}>
        <div className="extraImg" style={{ display: 'flex', flexDirection: 'column', width:'20%', marginRight: '3rem'}}>
          <img src={thisProduct.imgUrl1} 
          alt="colors" 
          style={{ width: '100%', marginBottom: '10px', borderRadius: '0.5rem' }}
          onClick={() => handleExtraImgClick(thisProduct.imgUrl1)} />
          <img src={thisProduct.imgUrl2} alt="colors" style={{ width: '100%', marginBottom: '10px', borderRadius: '0.5rem'}}
          onClick={() => handleExtraImgClick(thisProduct.imgUrl2)} />
          <img src={thisProduct.imgUrl3} alt="colors" style={{ width: '100%', marginBottom: '10px', borderRadius: '0.5rem'}}
          onClick={() => handleExtraImgClick(thisProduct.imgUrl3)} />
          <img src={thisProduct.imgUrl4} alt="colors" style={{ width: '100%', marginBottom: '10px', borderRadius: '0.5rem'}}
          onClick={() => handleExtraImgClick(thisProduct.imgUrl4)} />
        </div>
        <div className="mainImg" style={{ flex: '1 0 0', width: '8rem', height: '30rem' }}>
          <img src={currentImg} alt="colors" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
        </div>
      </div>
      <div className="written" style={{ display: 'flex', flexDirection: 'column', flex:'1', marginLeft: '1rem' }}>
        <div>
          <h1>{thisProduct.title}</h1>
          <h2>{thisProduct.price}</h2>
          <h3>{thisProduct.rating}</h3>
          <p>{thisProduct.description}</p>
        </div>
        <div>
          <h2>Reviews</h2>
          <div>{thisProductReviews}</div>
        </div>
        
      </div>
    </div>
    </div>
  );
}