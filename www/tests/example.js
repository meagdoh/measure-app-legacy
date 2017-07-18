
describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});

describe('string alias arg', function () {
	it('should load module with string alias', function () {
		angular.mock.module('measure');
		expect('what?').toBe('what?');
	});
});

describe('measure service history', function () {
	it('should return expected measurement', function () {
		angular.mock.module('measure'['Measure.services']);

    var service;

    //Get the service form the injector
    angular.mock.inject(function GetDependencies(HistoryService){
      service = HistoryService;
    });

    // call the function on our service instance
    var history = HistoryService.reset()

		expect(history).toEqual(HistoryService);
	});
});
