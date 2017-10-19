import angular from 'angular';

// imports for this component
import template from './header.html';
import './header.css';

class HeaderController {
  constructor(UserService) {
    this.header = 'AwayWeGo';
    this.user = UserService.user;
  }
}
HeaderController.$inject = ['UserService'];

export const HeaderComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: HeaderController
};