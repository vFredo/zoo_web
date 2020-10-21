import React, {Component} from 'react';
import styles from './AnimalCard.module.css';
import {Link} from 'react-router-dom';
import {setAnimal} from '../actions/animal';
import {connect} from 'react-redux';

class AnimalCard extends Component {
  render() {
    return (
      <div className={"card" + styles.cardContainer}>
        <img
          className="card-img-top"
          src={this.props.animal.img}
          alt={this.props.animal.name}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.animal.name}</h5>
          <p className="card-text">{this.props.animal.description}</p>
          <Link
            onClick={this.onAnimalCardSelect}
            to='/details'
            className='btn btn-primary'
          >
            Ver más
                </Link>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.onAnimalCardSelect = this.onAnimalCardSelect.bind(this);

  }

  onAnimalCardSelect() {
    this.props.setAnimal(this.props.animal);
  }
}

const mapStateToActions = {
  setAnimal
};

export default connect(
  null,
  mapStateToActions
)(AnimalCard);

