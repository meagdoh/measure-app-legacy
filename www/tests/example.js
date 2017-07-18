
describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});

describe('string alias arg', function () {
	it('should load module with string alias', function () {
		angular.mock.module('measure');

		// TBC - we will build upon this!
		expect('what?').toBe('what?');
	});
});
