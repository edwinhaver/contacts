import React from 'react';
import PrivateHeader from './PrivateHeader';

// Stateless functional component
export default () => {
  return (
    <div>
      <PrivateHeader title="Meteor Boilerplate"/>
      <div className="page-content">
        Dashboard page content
      </div>
    </div>
  );
};
