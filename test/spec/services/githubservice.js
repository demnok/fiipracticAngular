'use strict';

describe('Service: Githubservice', function () {

  // load the service's module
  beforeEach(module('angApp'));

  // instantiate service
  var Githubservice;
  beforeEach(inject(function (_Githubservice_) {
    Githubservice = _Githubservice_;
  }));

  it('should do something', function () {
    expect(!!Githubservice).toBe(true);
  });

});
