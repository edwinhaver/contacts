import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import { Signup } from './Signup';

if (Meteor.isClient) {
  describe('Signup', function () {
    it('should show error messages', function () {
      const error = 'This is not working';
      const wrapper = mount( <Signup createUser={() => {}}/>);

      wrapper.setState({ error });
      expect(wrapper.find('p').text()).toBe(error);

      wrapper.setState({ error: '' });
      expect(wrapper.find('p').length).toBe(0);
    });

    it('should call Signup with the form data', function () {
      const email = 'edwin@gmail.com';
      const password = 'password123';
      const spy = expect.createSpy();
      const wrapper = mount( <Signup createUser={spy}/> );

      wrapper.find({type: 'email'}).instance().value = email;
      wrapper.find({type: 'password'}).instance().value = password;
      wrapper.find('form').simulate('submit');

      expect(spy.calls[0].arguments[0]).toEqual({ email, password });
    });

    it('should set error if short password', function () {
      const email = 'edwin@gmail.com';
      const password = '123';
      const spy = expect.createSpy();
      const wrapper = mount( <Signup createUser={spy}/> );

      wrapper.find({type: 'email'}).instance().value = email;
      wrapper.find({type: 'password'}).instance().value = password;
      wrapper.find('form').simulate('submit');

      expect(wrapper.state('error')).toNotBe('');
    });

    it('should set createUser callback errors', function () {
      const password = 'password123';
      const reason = 'This why it failed';
      const spy = expect.createSpy();
      const wrapper = mount( <Signup createUser={spy}/> );

      wrapper.find({type: 'password'}).instance().value = password;
      wrapper.find('form').simulate('submit');

      spy.calls[0].arguments[1]({ reason });
      expect(wrapper.state('error')).toBe(reason);

      spy.calls[0].arguments[1]();
      expect(wrapper.state('error')).toBe('');
    });

    it('test outline');

  });
}