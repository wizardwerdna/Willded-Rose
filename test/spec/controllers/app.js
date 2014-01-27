'use strict';
describe('View Model AppVM', function(){
  var vm;
  var gr = { items: {mock: 'items'} };
  beforeEach(function(){
    module('app');
    inject(function($controller){
      vm = $controller('AppVM', {gildedRose: gr});
    });
  });
  it('should expose a list of items from gildedRose', function(){
    expect(vm.items).toEqual(gr.items);    
  });
});
