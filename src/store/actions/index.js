import { CHANGE_PROVINCES, HAS_CHANGE_CITIES, HAS_CHANGE_PROVINCES, HAS_CHANGE_DISTRICTS } from "./type";
import axios from 'axios'

export const changeProvinces = () => {
  const array1 = []
  axios.get("https://api.tavanito.com/v1/provinces").then(
    (res) => {
      for (var i = 0; i < res.data.data.length; i++) {
        var data = res.data.data[i].slug
        array1.push(data)
      }
    })
  return {
    type: CHANGE_PROVINCES, payload: [...array1]
  }
}
export const changeCities = (parent_id) => {
  var array2 = []
  return dispatch => {
    axios
      .get(`https://api.tavanito.com/v1/provinces/${parent_id}/cities`)
      .then((res) => {
        for (var i = 0; i < res.data.data.length; i++) {
          var ctitle = res.data.data[i].title
          // var cid = res.data.data[i].id
          array2.push(ctitle)
        }
        dispatch(hasChangeCities(array2))
      })

  }



}
export const changeDistricts = (parent_id_cit, parent_id_dis) => {
  const array3 = []
  return dispatch => {
    axios.get(`https://api.tavanito.com/v1/provinces/${parent_id_cit}/cities/${parent_id_dis}/districts`).then(
      (res) => {
        for (var i = 0; i < res.data.data.length; i++) {
          var data = res.data.data[i].title

          array3.push(data)
        }
        dispatch(hasChangeDistricts(array3))

      }
    )
  }


}
export const hasChangeProvinces = () => {

  return {
    type: HAS_CHANGE_PROVINCES
  }
}
export const hasChangeCities = (array2) => {

  return {
    type: HAS_CHANGE_CITIES,
    payload: [...array2]
  }

}
export const hasChangeDistricts = (array3) => {
  return {
    type: HAS_CHANGE_DISTRICTS,
    payload: [...array3]
  }
}