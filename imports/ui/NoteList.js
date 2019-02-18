import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export class NoteList extends React.Component {
  renderNoteListItems() {
    return this.props.notes.map((note) => {
      return <NoteListItem key={note._id} note={note}/>
    });
  }
  render() {
    return (
      <div>
        <NoteListHeader/>
        {this.renderNoteListItems()}
        {this.props.notes.length === 0 ? <NoteListEmptyItem/> : undefined}
        NoteList { this.props.notes.length }
      </div>
    )
  }
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');

  return {
    notes: Notes.find().fetch()
  };
}, NoteList);