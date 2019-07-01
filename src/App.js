import React from 'react';
import { connect } from "react-redux";
import { Select } from 'antd';
import 'antd/dist/antd.css';

import { changeProvinces, changeDistricts, changeCities } from './store/actions';
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class App extends React.Component {
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
      <div>
        <Select defaultValue="استان" style={{ width: 120, margin: 10 }} onChange={handleChange}>
          <Option onClick={this.handleCities(1)} value="تهران">تهران</Option>
          <Option onClick={this.handleCities(8)} value="البرز">البرز</Option>
          <Option onClick={this.handleCities(15)} value="اصفهان" >اصفهان</Option>
          <Option onClick={this.handleCities(16)} value="مازندران" >مازندران</Option>
          <Option onClick={this.handleCities(18)} value="فارس" >فارس</Option>
          <Option onClick={this.handleCities(20)} value="خراسان" >خراسان</Option>
          <Option onClick={this.handleCities(43)} value="کرمان" >کرمان</Option>
          <Option onClick={this.handleCities(50)} value="مرکزی" >مرکزی</Option>
          <Option onClick={this.handleCities(57)} value="قزوین" >قزوین</Option>
        </Select>


        <Select defaultValue="شهر" style={{ width: 120, margin: 10 }}>

          {this.props.cities.map((value, index) => {
            return <Option value={value} onClick={this.handleDistricts(value)} key={index}>{value}</Option>
          })}

        </Select>
        <Select defaultValue="منطقه" style={{ width: 120, margin: 10 }} >

          {this.props.districts.map((value, index) => {
            return <Option value={value} key={index}>{value}</Option>
          })}
        </Select>
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
