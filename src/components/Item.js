import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Item extends Component {
    render() {
        const {id} = this.props.building;
        return (
                <tr>
                    <td>{this.props.building.id}</td>
                    <td>{this.props.building.address}</td>
                    <td>{this.props.building.companyId}</td>
                    <td>{this.props.building.fullname}</td>
                    <td>{this.props.building.phone}</td>
                    <td>
                        <button onClick={this.props.delItem.bind(this,id)} style={btnStyle} > 
                            X 
                        </button>
                    </td>
                    <td> 
                        <button > 
                            EDIT
                        </button>
                    </td>
                </tr>
        )
    }
}

Item.propTypes = {
    building: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 5px',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '10px'
}

export default Item;