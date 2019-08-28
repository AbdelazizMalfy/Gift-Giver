import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

class Gift extends Component {
    state= {
        person:'',
        present:''
    }

    onPersonInputChange = (e) => {
        this.setState({person:e.target.value})
    }
    
    onPresentInputChange = (e) => {
        this.setState({present:e.target.value})
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl className='input-person' onChange={this.onPersonInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl className='input-present' onChange={this.onPresentInputChange} />
                    </FormGroup>
                </Form>
                <Button className='btn-remove' onClick={() => this.props.removeGift(this.props.gift.id)}>Remove Gift</Button>
            </div>
        )
    }
}

export default Gift;
