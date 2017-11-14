import { combineReducers } from 'redux'
import video from './reducer/video'
import specialColumn from './reducer/specialColumn'

var Reducers = combineReducers({
  video,
  specialColumn
})

export default Reducers