import { Grid} from '@mui/material'
import React from 'react'
import { IProduc } from '../../IProduc'
import CatalogCard from './CatalogCard'
interface Props{
    products:IProduc[]
}
const CatalogList = ({products}:Props) => {
  return (
   
      <Grid container spacing={4} >
      {products.map(product=>(
           <Grid sx={{borderRadius:5}} item xs={12} md={3} sm={6} key={product.id}>
             <CatalogCard  product={product}/>
           </Grid>
        ))}
      </Grid>
      
  
  )
}

export default CatalogList