import { Divider, Grid,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import agent from '../../App/api/agent'
import { IProduc } from '../../IProduc'
import DeatailsTable from './DeatailsTable'


const Deatails = () => {
  const [product, setProduct] = useState<IProduc | undefined>(undefined)
  const [loding, setLoding] = useState<boolean>(true)
  const { id } = useParams<{id:string}>()
  useEffect(() => {
    setLoding(true)
    agent.Catalog.deatails(id? parseInt(id):0).then(res =>
      setProduct(res)).catch(err => console.log(err)).finally(() => setLoding(false))

  }, [id])
  if (loding) return <h1>Loding.....</h1>
  if (product===undefined) return <h1>Not Found</h1>
  return (
    <Grid container spacing={6}>
      <Grid item sm={6} xs={12}>
        <img src={`https://localhost:7145${product?.pictureUrl}`} alt={product?.name} style={{ width: '100%' }} />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography variant='h3'>{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant='h4'>{product && (product?.price / 100).toFixed(2)}</Typography>
        <DeatailsTable product={product}/>
      </Grid>
    </Grid>
  )
}

export default Deatails