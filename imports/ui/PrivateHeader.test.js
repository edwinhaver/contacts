import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
//import jest from 'jest';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import { PrivateHeader } from './PrivateHeader';

if (Meteor.isClient) {
  describe('PrivateHeader', function () {
    it('should set button text to logout', function () {
      const wrapper = mount( <PrivateHeader title="Test title" handleLogout={() => {}}/> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Log out');
    });

    it('should use title prop as H1 text', function () {
      const title = 'Test title';
      const wrapper = mount( <PrivateHeader title={title}/> );
      const h1Text = wrapper.find('h1').text();

      expect(h1Text).toBe(title);
    });

    // it('should call the function', function () {
    //   const spy = expect.createSpy();
    //   spy(3,4);
    //   spy('Edwin');
    //   expect(spy).toHaveBeenCalledWith(3);
    // });

    it('should call handleLogout on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount( <PrivateHeader title="Title" handleLogout={spy}/> );

      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    })
  });
}