import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'
import { IProduc } from '../../IProduc'
interface Props{
    product:IProduc | undefined
}
const DeatailsTable = ({product}:Props) => {
  return (
    <TableContainer>
         <Table>
         <TableBody>
            <TableRow>
              <TableCell>Name :</TableCell>
              <TableCell>{product?.name}</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>Brand :</TableCell>
              <TableCell>{product?.brand}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type :</TableCell>
              <TableCell>{product?.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description:</TableCell>
              <TableCell>{product?.description}</TableCell>
            </TableRow>
          </TableBody>
         </Table>
        </TableContainer>
    
  )
}

export default DeatailsTable