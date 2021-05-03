import React, { useEffect, useState, useMemo, memo } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import { Action, MainReducerState } from '../../interfaces'
import CardItem from '../CardItem'
import { ThunkDispatch } from 'redux-thunk'
import { isEqual } from 'lodash'


const PAGE_LIMIT: number = 4

// interface Actions {
//   fetchProductList: () => (dispatch: ThunkDispatch<ReducerState, any, Action>) => Promise<void>
//   setMainState: (payload: any) => Action
// }


// type Props = Partial<MainReducerState> & { fetchProductList: Function } & { setMainState: Function }
interface Actions {
  fetchProductList: () => (dispatch: ThunkDispatch<MainReducerState, any, Action>) => Promise<void>
  setMainState: (payload: any) => Action
}

type Props = MainReducerState & { actions: Actions }

const ProductList = (props: Props) => {
  // const {actions: { fetchProductList, setMainState }, products = [], searchString} = props
  const { actions: { fetchProductList, setMainState }, products = [], searchString, currency, cart = [] } = props
  const cardProps = { currency, setMainState, cart }

  const [activePage, setActivePage] = useState<number>(0)

  useEffect(() => {
    fetchProductList()
  }, [searchString]);

  useEffect(() => {
    setActivePage(0)
  }, [setActivePage, searchString]);



  const { pagItems,  pagStart, pagEnd} = useMemo(() => {
    const pageLimit = Math.ceil(products.length / PAGE_LIMIT)
    let pagItems: JSX.Element[] = []

    for(let i = 0; i < pageLimit; i++) {
      pagItems.push(
        <Pagination.Item
          key={i}
          active={i === activePage}
          onClick={() => setActivePage(i)}
        >
          {i + 1}
        </Pagination.Item>
      )
    }
    const pagStart = activePage * PAGE_LIMIT
    const pagEnd = pagStart + PAGE_LIMIT
    return {
      pagItems,
      pagStart,
      pagEnd
    }
  }, [activePage, products.length])

  return (
    <Container className="pr-0">
      <Row>
        { products.length && products.slice(pagStart, pagEnd).map(item => (
          <Col lg={3} md={6} sm={6} xs={12} key={item.id}>
              <CardItem {...item} {...cardProps} />
            </Col>
        )) }
      </Row>
      <Pagination className="justify-content-center">
          { pagItems }
      </Pagination>
    </Container>
  )
}

const propsAreEquil = (prevProps: Props, nextProps: Props): boolean => {
  return isEqual(prevProps, nextProps)
}

export default memo(ProductList, propsAreEquil)