// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(drvier,key,value){
return Object.assign({},drvier,{[key]: value})

}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
driver[key]= value
return driver
}
function deleteFromDriverByKey(driver, key){
 const newObj = {...driver};

return newobj
}
