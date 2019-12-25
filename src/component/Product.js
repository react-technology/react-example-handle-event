import React, { Component } from 'react'

/* 
    - Có 2 cách Handling Events 
    - Bắt sự kiện các button, input, select: onClick()...
    - Khai báo function CS6
        + Gọi thông qua tên function và không có ()
        + Gọi thông qua arrow function: { () => this.onClick(params)}
        + Gọi và sử dụng props:
            * cách 1:
                - Tạo constructor có tham số props và gọi super(props)
                    constructor(props) {
                        super(props)
                        this.onAddToCard = this.onAddToCard.bind(this);
                    }
                - Để truy cập this tại function: this.tên_function 
                    onClick={this.onAddToCard}
            * cách 2:
                - Tên function = () => {}
                    onAddToCard = () => {
                        alert(this.props.children + " - " + this.props.price)
                    }


 */

class Product extends Component {

    // onAddToCard(text) {
    //     alert(text)
    //     console.log(text)
    // }

    // onAddToCard() {
    //     alert(this.props.children + " - " + this.props.price)
    // }

    onAddToCard = () => {
        alert(this.props.children + " - " + this.props.price)
    }

    // constructor(props) {
    //     super(props)
    //     console.log(props)
    //     this.onAddToCard = this.onAddToCard.bind(this);
    // }

    render() {
        return (
            <div>

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class="thumbnail">
                        <img src={this.props.image} alt={this.props.children} />
                        <div class="caption">
                            <h3>{this.props.children}</h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                {/* <a href="#" class="btn btn-primary" onClick={this.onAddToCard('Mua Hàng Thành Công')}>Action</a> */}
                                {/* <a href="#" class="btn btn-primary" onClick={() => this.onAddToCard(this.props.children)}>Action</a> */}
                                {/* <a href="#" class="btn btn-primary" onClick={this.onAddToCard}>Action</a> */}
                                <a href="#" class="btn btn-primary" onClick={this.onAddToCard}>Action</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Product;