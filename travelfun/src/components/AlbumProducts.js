import React, {Component} from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import Actions from '../actions/albumAction';
import ShoppingCartModal from './ShoppingCartModal'
import {
  Container, Row, Col, Jumbotron, Button,
  Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge
} from 'reactstrap';

class AlbumProducts extends Component {
  componentDidMount = async () => {
    const data = await fetch('https://demojson.herokuapp.com/cart').then(response => response.json());
    this.props.fetchAlbumApi(data);
  }
  render() {
    const { albums, cart, modal, toggle, addToCart, deleteCartItem } = this.props;
    return (
      <Container>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h1 className="display-3">React Redux Demo</h1>
            <p className="lead">
              將網路 react 練習用 redux 改寫
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
}

const mapStateToProps = state => ({
  albums: state.album.albumData,
  modal: state.album.modal,
  cart: state.album.cart,
})

const mapDispatchToProps = {
  fetchAlbumApi: albumData => Actions.fetchAlbumApi(albumData),
  toggle: () => Actions.toggleShoppingCartModal(),
  addToCart: product => Actions.addToCart(product),
  deleteCartItem: index => Actions.deleteCartItem(index),
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumProducts)