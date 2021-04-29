import React, { useState, useMemo, SetStateAction, Dispatch, ChangeEventHandler } from 'react'
import { Navbar, Form, FormControl, Button, Badge, Container, Row, Col } from 'react-bootstrap'
import { MainReducerState } from '../../interfaces'
import { debounce } from 'lodash'



type Props = Partial<MainReducerState> & { setMainState: (payload: Partial<MainReducerState>) => void }

export const AppNavbar = (props: Props) => {
  const { cart, products, currency, setMainState } = props

  const onSearch = ({ target }: any): void => {
    setMainState({
      searchString: target.value
    })
  }

  const onSelectChange = (sortKey: string) => (e: any): void => {
    setMainState({
      [sortKey]: e.target.value
    })
  }

  return (
     <Navbar bg="dark" variant="dark" className="mb-4">
       <Navbar.Brand href="/">React Shop</Navbar.Brand>
      <div className="d-flex">
        <Form inline>
          <FormControl onChange={debounce(onSearch, 1000)} type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Button
          variant="danger pl-4 pr-4"
          // onClick={triggerState(setModalVisible, true)}
        >
          <i className="fas fa-shopping-cart"></i>
          <small>
            <Badge variant="light ml-1">{cart?.length}</Badge>
          </small>
        </Button>
        <Form inline>
          <Form.Control
            as="select"
            className="ml-2"
            custom
            onChange={onSelectChange('currency')}
          >
            <option value="USD">USD Dollar</option>
            <option value="EUR">EUR Euro</option>
          </Form.Control>
          <Form.Label className="my-1 mr-2 ml-2 text-light">
            Sort by:
          </Form.Label>
          <Form.Control
            as="select"
            className="ml-0"
            custom
            onChange={onSelectChange('sortBy')}
          >
            <option value="LOW">Price: Low to High</option>
            <option value="HIGH">Price: High to Low</option>
          </Form.Control>
        </Form>
      </div>
       </Navbar>
  )
}
