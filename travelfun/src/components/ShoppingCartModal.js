import React from 'react';
import shortid from 'shortid';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert } from 'reactstrap';

const ShoppingCartModal = ({ modal, cart, toggle, deleteCartItem }) => {
  return (
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>購物車</ModalHeader>
    <ModalBody>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>品項</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item, index) => (
              <tr key={shortid.generate()}>
                <th scope="row">{index+1}</th>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Alert color="success" className="text-right">
      總價：{cart.reduce((acc, item) => (acc += item.price), 0)}
      </Alert>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>結帳</Button>{' '}
      <Button color="secondary" onClick={toggle}>取消</Button>
    </ModalFooter>
  </Modal>
)};


export default ShoppingCartModal;