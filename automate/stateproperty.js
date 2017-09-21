
module.exports = function(stateproperty,setvalue,rs){
	describe('function for setting the device state',function(){
		it('test compleate',function(done){
			dev$.selectByID(rs).set(stateproperty, setvalue).then(function(setResp) {
				if(setResp && setResp[rs] && setResp[rs].receivedResponse && setResp[rs].response.error === null) {
					//Successfuly set the power to 'on'
					dev$.selectByID(rs).get(stateproperty).then(function(getResp) {
						if(getResp && getResp[rs] && getResp[rs].response && typeof getResp[rs].response.result !== 'undefined') {
							if(getResp[rs].response.result == setvalue) {
								console.log(getResp)
								done()
								//Previous set successfully set the power value to 'on'
							}
						} else {
							console.log('something is undefined')
							done()
							
						}
						}, function(err) {
						console.log('Error!')
						done()
						//Failed to get response
						
					});
				} else {
				console.log('some issue while state setting on')
				done()
				//Failed to set the power to 'on'
				
				}
				}, function(err) {
				console.log('Error!')
				done()
				//Failed to set the power to 'on'
			});
		})
	})
}

