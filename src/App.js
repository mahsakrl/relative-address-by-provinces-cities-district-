import React from 'react';
import { connect } from "react-redux";
import './App.css';
import { changeProvinces, changeDistricts, changeCities } from './store/actions';

class App extends React.Component {
componentDidMount() {
  
//  this.props.change_cities(1)
//  this.props.change_cities(15)
//  this.props.change_cities(16)
//  this.props.change_cities(18)
//  this.props.change_cities(20)
//  this.props.change_cities(43)
  this.props.change_cities(50)
 this.props.change_cities(57)
 this.props.change_districts(8,9)
 this.props.change_districts(16,17)
}
  render(
  ) {
    return (
      <div >
        
{/*<button >تهران</button>
           <button onClick={this.props.change_cities(8)}>البرز</button>
          <button onClick={this.props.change_cities(15)}>اصفهان</button>
          <button onClick={this.props.change_cities(16)}>مازندران</button>
          <button onClick={this.props.change_cities(18)}>فارس</button>
          <button onClick={this.props.change_cities(20)}>خراسان رضوی</button>
          <button onClick={this.props.change_cities(43)}>کرمان</button>
          <button onClick={this.props.change_cities(50)}>مرکزی</button>
          <button onClick={this.props.change_cities(57)}>قزوین</button>
        
        <select style={{ margin: 10 }}>
          <option>{this.props.cities}</option>

        </select>
        <select style={{ margin: 10 }}>
          <option>{this.props.districts}</option>

        </select> */}
      </div>


    );
  }
}
const mapStateToProps = state => {
  return {
    provinces: state.provinces,
    cities: state.cities,
    districts: state.districts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    change_provinces: () => {
      dispatch(changeProvinces)
    },
    change_cities: (parent_id) => {
      dispatch(changeCities(parent_id))
    },
    change_districts: (id_cit,id_dis) => {
      dispatch(changeDistricts(id_cit,id_dis))
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
