import React from 'react';


class Product extends React.Component  {
    constructor(props){
        super(props);
        this.state= {

        }
    }
    render(){
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src={"img/"+this.props.img} height="50%" width="50%" alt=""></img>
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>
                            {this.props.price}
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary">Mua hàng</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Product;
