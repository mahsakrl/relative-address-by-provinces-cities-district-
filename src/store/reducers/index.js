import { CHANGE_PROVINCES, CHANGE_CITIES, CHANGE_DISTRICTS, HAS_CHANGE_CITIES, HAS_CHANGE_DISTRICTS, HAS_CHANGE_PROVINCES } from "../actions/type";


const initialState = {
  provinces: [],
  cities: [],
  districts: [],
  hasChangedProvinces: false,
  hasChangedCities: false,
  hasChangedDistricts: false
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_PROVINCES:

      return {
        ...state,
        // provinces: [...action.payload]

      };
    case CHANGE_CITIES:
     
      return {
        ...state,
        // cities: [...action.payload]

      };
    case CHANGE_DISTRICTS:
      return {
        ...state,
        // districts: [...action.payload]

      };
    case HAS_CHANGE_PROVINCES:
      return {
        ...state,
        hasChangedProvinces: true,
        provinces:[...action.payload]

      };
    case HAS_CHANGE_CITIES:
      return {
        ...state,
        hasChangedCities: true,
        cities:[...action.payload]

      };
    case HAS_CHANGE_DISTRICTS:
      console.log(action)
      return {
        ...state,
        hasChangedDistricts: true,
        districts:[...action.payload]

      };


    default:
      return state;
  }
}

export default rootReducer;