'use strict';
describe('FACTORY gildedRose', function(){
  var gr;
  beforeEach(function(){
    module('app');
    inject(function(gildedRose){
      gr = gildedRose;
    });
  });
  describe('implement new Conjured update', function(){ });
  describe('conform to legacy', function(){
    it ('should expose the legacy initial items', function(){
      expect(JSON.stringify(gr.items)).toBe('[{"name":"+5 Dexterity Vest","sell_in":10,"quality":20},{"name":"Aged Brie","sell_in":2,"quality":0},{"name":"Elixir of the Mongoose","sell_in":5,"quality":7},{"name":"Sulfuras, Hand of Ragnaros","sell_in":0,"quality":80},{"name":"Backstage passes to a TAFKAL80ETC concert","sell_in":15,"quality":20},{"name":"Conjured Mana Cake","sell_in":3,"quality":6}]');
    });
    it ('should expose updateQuality', function(){});
    it ('should expose the legacy values for updateQualilty', function(){});
  });
});
