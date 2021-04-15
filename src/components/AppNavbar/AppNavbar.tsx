import React, { useState, useMemo, SetStateAction, Dispatch } from 'react'
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

  return (
     <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">React Shop</Navbar.Brand>
      <div className="d-flex">
        <Form inline>
          <FormControl onChange={debounce(onSearch, 1000)} type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        </div>
       </Navbar>
  )
}
