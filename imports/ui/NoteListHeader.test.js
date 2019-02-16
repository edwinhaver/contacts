import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import { NoteListHeader } from './NoteListHeader';

if (Meteor.isClient) {
  describe('NoteListHeader', function () {

    it('should call meteorCall on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount( <NoteListHeader meteorCall={spy}/> );

      wrapper.find('button').simulate('click');

      expect(spy.calls[0].arguments[0]).toBe('notes.insert');
      expect(spy).toHaveBeenCalledWith('notes.insert');
    });

  });
}
