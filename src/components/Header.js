import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="/abc">Trang chủ</a></li>
                <li role="presentation"><a href="/abc">Danh mục sản phẩm</a></li>
                <li role="presentation"><a href="/abc">Messages</a></li>
            </ul>
        )
    }

}

export default Header;
