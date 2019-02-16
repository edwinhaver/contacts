import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

// Stateless functional component
export default () => {
  return (
    <div>
      <PrivateHeader title="Meteor Boilerplate"/>
      <div className="page-content">
        <NoteList/>
      </div>
    </div>
  );
};
