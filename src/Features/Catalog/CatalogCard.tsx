import React, { useState } from 'react'
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from '@mui/material'
import { IProduc } from '../../IProduc'
import { Link } from 'react-router-dom'
import agent from '../../App/api/agent'
import { LoadingButton } from '@mui/lab'
interface Props{
    product:IProduc
}
const CatalogCard = ({product}:Props) => {
  const [loding,setLoading]=useState(false)
  const handelAddItem=(productId:number)=>{
    setLoading(true)
    agent.Basket.addItem(productId,1).catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  }
  return (
    <Card sx={{ maxWidth: 345,boxShadow:2}}>
      <CardHeader 
      avatar={<Avatar sx={{bgcolor:'secondary.main'}}>
        {product.name.charAt(0).toUpperCase()}
      </Avatar>}
      title={product.name}
      titleTypographyProps={{
        sx:{fontWeight:'bold',color:'grey.600'}
      }}
      />
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      sx={{backgroundSize:'contain',backgroundColor:'primary.light'}}
      image={`https://localhost:7145${product.pictureUrl}`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography gutterBottom variant="h5" color="secondary">
       ${(product.price/100).toFixed(2)}
      </Typography>
      <Typography variant='body2' color={'text.secondary'}>
        {product.brand} / {product.type}
      </Typography>
    </CardContent>
    <CardActions>
    <LoadingButton loading={loding} onClick={()=>handelAddItem(product.id)} size="small">Add to Card</LoadingButton>
      <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
    </CardActions>
  </Card>
  )
}

export default CatalogCard