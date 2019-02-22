import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

// Stateless functional component
export default () => {
  return (
    <div>
      <PrivateHeader title="Meteor Boilerplate"/>
      <div className="page-content">
        <NoteList/>
        <Editor/>
      </div>
    </div>
  );
};
