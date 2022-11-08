import React from 'react';
import './card-list.component.css';
import CardItem from '../card-item/card-item.component';

export default class CardList extends React.Component {
    render() {
        return (
            <section className='card-list'>
                {this.props.list.map((listItem) => (
                    <CardItem key={listItem.id} 
                        listItem={listItem}></CardItem>
                ))}
            </section>
        );
    }
  }