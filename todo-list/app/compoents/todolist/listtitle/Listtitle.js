import React from 'react';
import css from './Listtitle.css';

/**
 * @props
 *  dropDownClick {function}
 *  resetDropDown {function} 重置按钮状态
 */

class Listtitle extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      dropDown: this.props.dropDown
    };

    this.dropDownClick=this.dropDownClick.bind(this);
  }

  dropDownClick(){

    this.props.dropDownClick();

    this.setState({
      dropDown: !this.state.dropDown
    })
  }

  render() {

    return (
      <ol className={ "breadcrumb " + css.title } onClick={this.dropDownClick}>
        <li>{ this.props.title }</li>
        <span className={css.button }>
          {
            this.state.dropDown
              ?(<i className="glyphicon glyphicon-menu-down"></i>)
              :(<i className="glyphicon glyphicon-menu-up"></i>)
          }
        </span>
      </ol>
    );

  }
}

export default Listtitle;