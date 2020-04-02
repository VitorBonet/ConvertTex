import React from 'react';

import css from './style.css';

class Header extends React.Component {
    state = {
        scrollHeadNav: 'navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent',
    };

    handleChange(){

    }

    handleScroll() { 
        if (document.documentElement.scrollTop > 430) {
            this.setState({
                scrollHeadNav: 'navbar navbar-color-on-scroll fixed-top navbar-expand-lg scrolledNav',
            })
        } 
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
    }

    render() {
        return (
            <header id="main-header">
                <nav className={ this.state.scrollHeadNav } color-on-scroll="100" id="sectionsNav">
                    <div className="container">
                        <div className="navbar-translate">
                            <a className="navbar-brand" href="#">Convert Tex </a>
                        </div>
                        <div className="collapse navbar-collapse">
                        {/* <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="https://twitter.com/CreativeTim" target="_blank" class="nav-link sharrre"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li class="nav-item">
                                <a href="https://www.creative-tim.com/product/material-kit-pro-react-native/?ref=mkprn-landing-nav" target="_blank" class="btn btn-rose btn-round">
                                    Buy now
                                </a>
                            </li>
                        </ul> */}

                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;