import React, { Component } from 'react'
import propTypes from 'prop-types';
import Item from './Item';

class Table extends Component { 
    render() {
        return (
            <table className='table' style={{padding:'15px 15px'}} >
                <thead >
                    <tr style={{width: '50%'}} >
                        <th style={{width: '10%'}}>ID</th>
                        <th style={{width: '30%'}}>Address</th>
                        <th style={{width: '10%'}}>Company ID</th>
                        <th style={{width: '20%'}}>Building Name</th>
                        <th style={{width: '15%'}}>Phone</th>
                    </tr>
                </thead>
                <tbody style={tBodyStyle} >
                    {this.props.buildings.map((building) => (
                    <Item key={building.id} building={building} delItem={this.props.delItem}/>
                    ))}
                </tbody>
            </table>
        )
    }
}

const tBodyStyle = {
    textAling: 'center',
    fontSize: '12px',
    borderBottom:'1px #ccc dotted'
}

Table.propTypes = {
    buildings: propTypes.array.isRequired
}

export default Table 