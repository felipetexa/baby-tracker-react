import React from 'react'
import { CardWrapper, CardTitle, DataInfo, AddNewData } from './styles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Card({title, data}) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <DataInfo>{data}</DataInfo>
      <AddNewData><AddCircleOutlineIcon fontSize='large' /> </AddNewData>
      
    </CardWrapper>
  )
}

export default Card