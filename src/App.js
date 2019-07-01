import React from 'react';
import { connect } from "react-redux";
import { changeProvinces, changeDistricts, changeCities } from './store/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleCities = (pid) => {
    return () => {
      this.props.change_cities(pid)
    }
  }
  handleDistricts = (value) => {
    return () => {
      console.log(value)
      switch (value) {

        case 'تهران':
          return this.props.change_districts(1, 2)
        case 'پرند':
          return this.props.change_districts(1, 37)
        case 'کرج':
          return this.props.change_districts(8, 9)
        case 'ساری':
          return this.props.change_districts(16, 17)
        case 'شیراز':
          return this.props.change_districts(18, 19)
        case 'مشهد':
          return this.props.change_districts(20, 21)
        case 'بم':
          return this.props.change_districts(43, 44)
        case 'اراک':
          return this.props.change_districts(50, 51)
        case 'قزوین':
          return this.props.change_districts(57, 58)
        default:

      }
    }
  }
  render(

  ) {
    return (

      <div style={{ flexDirection: 'row', display: 'flex' }} >
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            استان
            </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div onClick={this.handleCities(1)} className="dropdown-item" >تهران</div>
            <div onClick={this.handleCities(8)} className="dropdown-item" >البرز</div>
            <div onClick={this.handleCities(15)} className="dropdown-item" >اصفهان</div>
            <div onClick={this.handleCities(16)} className="dropdown-item" >مازندران</div>
            <div onClick={this.handleCities(18)} className="dropdown-item" >فارس</div>
            <div onClick={this.handleCities(20)} className="dropdown-item" >خراسان</div>
            <div onClick={this.handleCities(43)} className="dropdown-item" >کرمان</div>
            <div onClick={this.handleCities(50)} className="dropdown-item" >مرکزی</div>
            <div onClick={this.handleCities(57)} className="dropdown-item" >قزوین</div>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            شهر
            </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

            <ul className="dropdown-item">
              {this.props.cities.map((value, index) => {
                return <li onClick={this.handleDistricts(value)} key={index}>{value}</li>
              })}
            </ul>

          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            منطقه
            </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul className="dropdown-item">
              {this.props.districts.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>

          </div>
        </div>

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
    change_districts: (id_cit, id_dis) => {
      dispatch(changeDistricts(id_cit, id_dis))
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
