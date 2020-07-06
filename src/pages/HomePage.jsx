import React, { Fragment } from 'react'
import TopSales from '../components/TopSales/TopSales'
import Catalog from '../components/Catalog/Catalog'

export default function HomePage() {
  return (
    <Fragment>
      <TopSales />
      <Catalog />
    </Fragment>
  )
}
