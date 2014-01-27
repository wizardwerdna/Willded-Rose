'use strict';
describe('GIVEN a Gilded Rose Inventory Application', function(){
  var app, gr;
  beforeEach(function(){
    module('app', 'views/app.html');
    inject(function($compile, $rootScope, gildedRose){
      gr = gildedRose;
      app = $compile(
        '<div ng-controller="AppVM as vm">\
          <div ng-include="\'views/app.html\'"></div>\
        </div>'
      )($rootScope);
      $rootScope.$digest();
    });
  });

  it('should deliver an updatable inventory display', function(){
    THEN_DisplayConformsTo(gr.items);
  });

  function THEN_DisplayConformsTo(list){
    expect(app.find('.item').length).toBe(list.length);
    list.forEach(function(listItem, index){
      var itemItem = app.find('.item').eq(index);
      expect(itemItem.find('.name').text()).toBe(list[index].name);
      expect(itemItem.find('.sell_in').text()).toBe(list[index].sell_in.toString());
      expect(itemItem.find('.quality').text()).toBe(list[index].quality.toString());
    });
  };
});
