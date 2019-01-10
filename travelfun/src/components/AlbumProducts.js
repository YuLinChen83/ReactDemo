import React from 'react'
import { connect } from 'react-redux';
import shortid from 'shortid';
import Actions from '../actions/albumAction';
import ShoppingCartModal from './ShoppingCartModal'

import {
  Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge
} from 'reactstrap';

const AlbumProducts = ({ albums, cart, modal, toggle, addToCart, deleteCartItem }) => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h1 className="display-3">美客唱片</h1>
            <p className="lead">
              美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
            </p>
            <p className="lead">
              並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
            </p>
            <p className="lead">
              不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
            </p>
            <p className="lead">
              進一步擴大影響力，提昇流行音樂產業的動能
            </p>
            <hr className="my-2" />
            <p className="lead">
              <Button color="primary" onClick={toggle}>購物車({cart.length})</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        {
          albums.map((product, index) => (
            <Col key={shortid.generate()} sm={6} md={4} className="mb-3">
              <Card>
                <CardImg width="100%" src={product.img} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{product.title}</CardTitle>
                  <CardSubtitle>
                    <h4>
                      {
                        product.discount
                          ? <Badge color="danger">特價：{product.price}</Badge>
                          : <Badge color="success">售價：{product.price}</Badge>
                      }
                    </h4>
                  </CardSubtitle>
                  <CardText>{product.desc}</CardText>
                  <Button
                    disabled={cart.find(item => item.id === product.id) ? true : false}
                    color="secondary"
                    onClick={() => addToCart(product)}>購買</Button>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>
      <ShoppingCartModal modal={modal} cart={cart} toggle={toggle} deleteCartItem={deleteCartItem} />
    </Container>
  )
}

const mapStateToProps = state => ({
  albums: state.album.fakeData,
  modal: state.album.modal,
  cart: state.album.cart,
})

const mapDispatchToProps = {
  toggle: () => Actions.toggleShoppingCartModal(),
  addToCart: product => Actions.addToCart(product),
  deleteCartItem: index => Actions.deleteCartItem(index),
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumProducts)