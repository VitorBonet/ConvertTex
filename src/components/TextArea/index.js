import React, { useState } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';

import css from './style.css';

class TextArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    convertTex( type ){
        let words;
        let text = '';
        switch (type) {
            case 1:
                text = this.state.text.trim().toLocaleLowerCase();
                this.setState({text: text.substring(0,1).toUpperCase().concat(text.substring(1)) });
                break;
            case 2:
                this.setState({text: this.state.text.toLowerCase()});
                break;
            case 3:
                this.setState({text: this.state.text.toUpperCase()});
                break;
            case 4:
                words = this.state.text.toLowerCase().split(" ");
                for (let a = 0; a < words.length; a++) {
                    let w = words[a];
                    if( words[a] )
                    words[a] = w[0].toUpperCase() + w.slice(1);
                }
                this.setState({text:  words.join(" ")});
                break;
            case 5:
                words = this.state.text.toLowerCase().split(" ");
                for (let a = 0; a < words.length; a++) {
                    let w = words[a];
                    text = '';
                    for (let i = 0; i < w.length; i++) {
                        if( i % 2 == 0 ) {
                            text += w[i].toLowerCase();
                        } else {
                            text += w[i].toUpperCase();
                        }
                    }
                    words[a] = text;
                }
                this.setState({text:  words.join(" ")});
                break;
            case 7:
                words = this.state.text;
                for (let a = 0; a < words.length; a++) {
                    let w = words[a];
                    if( w == w.toUpperCase() ){
                        w = w.toLowerCase();
                    } else{
                        w = w.toUpperCase();
                    }
                    text += w;
                }
                this.setState({text:  text });
                break;
            case 8:
                this.setState({text: ''});
                break;
        }
    }

    render() {
        return (
            <>
            <Nav className="main-nav" variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Conversor</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="main main-raised">
                <div className="section">
                    <div className="container">
                        <form id="noter-save-form" method="POST">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control 
                                        className="noter-text-area"
                                        as="textarea"
                                        placeholder="Digite seu texto aqui" 
                                        rows="5" 
                                        value={this.state.text} 
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Form>
                        </form>
                    </div>
                    <div className="container" className="containerHoriz">
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(2) } >minúscula</Button>
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(3) } >MAIÚSCULA</Button>
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(1) } >Formato frase</Button>
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(4) } >Title Case</Button>
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(5) } >fOrMaTo aLtErNaDo</Button>
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(7) } >InVeRsE CaSe</Button>
                        <Button variant="primary" className="button-textarea" onClick={ () => this.convertTex(8) } >Clear</Button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default TextArea;
