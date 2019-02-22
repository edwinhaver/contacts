import React from 'react';
import { Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import { createContainer, withTracker } from 'meteor/react-meteor-data';

// export default class PrivateHeader extends React.Component {
//   onLogout() {
//     Accounts.logout();
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Log out</button>
//       </div>
//     );
//   }
// }

export const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => props.handleLogout()}>Log out</button>
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout()
  };
}, PrivateHeader);
