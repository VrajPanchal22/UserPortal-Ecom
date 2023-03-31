import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import "../../css/Order.css"

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <nav class="navbar w-100">
                <Form inline>
                    <Input name="search" 
                    type="search" 
                    value={this.state.value} 
                    className='my-2' id="inputsearch"
                    placeholder="Search Your Orders" 
                    onChange={(e)=>{
                        this.setState({value:e.target.value},
                        this.props.changeSearch(e.target.value))
                    }}
                    />
                    <Button className='btn my-2 my-sm-0 button-search-order' id='button-search-order' type='submit'>Search Orders</Button>
                </Form>
            </nav>
        );
    }
}

