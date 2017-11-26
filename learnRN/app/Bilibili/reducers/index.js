import { combineReducers } from 'redux'
import video from './reducer/video'
import specialColumn from './reducer/specialColumn'
import { Config } from '../config'


var Reducers = combineReducers({
  video,
  specialColumn,
  mainColor: (state = Config.mainColor, action) => (action.type === 'SET_MAIN_COLOR'? action.color: state)
})

export default Reducers