import React from 'react'
import Banner from '../Banner'
import Product from '../Product/Product'
import FeatureCard from '../FeatureCard/FeatureCard'

const Home = ({products}) => {
  return (
    <>
<Banner/>
<Product products={products}/>
<FeatureCard/>
    </>
  )
}

export default Home