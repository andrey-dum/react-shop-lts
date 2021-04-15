import React, { useEffect } from 'react'
import { MainReducerState } from '../../interfaces'

type Props = Partial<MainReducerState> & { fetchProductList: Function }

export const ProductList = (props: Props) => {
  const {fetchProductList, products} = props

  useEffect(() => {
    fetchProductList()
  }, []);

  return (
    <div>
      { products?.map(product => (
        <div key={product.id}>{product.title} - {product.price}</div>
      )) }
    </div>
  )
}
