var assert = require('assert')
var colors = require('colors')
var expect = require('chai').expect

describe('#you have following onboard devices'.yellow, function(){
	it('list onboard devices compleate', function(done){
		dev$.select('id=*').listResources().then(function(Resp){
			console.log(Object.keys(Resp))
			console.log(Object.keys(Resp).length)
			done()
			//console.log('<------------------------------------------------------------------------->'.rainbow)
		})
	})
})
describe('#facades of each device'.yellow, function(){
	it('facades of each device', function(done){
		dev$.select('id=*').listResources().then(function(Resp){
			len = Object.keys(Resp).length 
			for(var i = 0; i < len; i++){
				//dev$.select('id=*').listResources().then(function(Resp){
				var Resources = Object.keys(Resp)[i]
				var resourcesTyp = Resp[Resources].type
				console.log(Resources)
				console.log(resourcesTyp)
			
				//})
			}
			done()
			//console.log('<------------------------------------------------------------------------->'.rainbow)
		})
	})
})
