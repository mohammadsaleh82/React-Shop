import React, { useEffect, useState } from 'react'
import agent from '../../App/api/agent';
import { IProduc } from '../../IProduc'
import CatalogList from './CatalogList';

const Catalog = () => {
  const [Producs, setProducs] = useState<IProduc[]>([])
  useEffect(() => {
    agent.Catalog.list().then(prodicts=>setProducs(prodicts))

  }, [])
  return (
   <>
    <CatalogList products={Producs}/>
  </>
  )
}

export default Catalog