import React, { Component } from 'react'

export class AddItem extends Component {
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    style={{flex: '10', padding: '5px'}}
                    placeholder='Add New Building...'              
                />
                <input 
                    type='submit' 
                    value='Submit'
                    className='btn'
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddItem