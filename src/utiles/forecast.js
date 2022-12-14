const request=require('request')

const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=4933c5157873609ba987a0b17a382934&query='+latitude+','+longitude+'&units=m'
    request({url,json:true},(error,{body})=>{
        if(error){
           callback('Unable to connect to internet',undefined);
        }else if(body.error){
            console.log(body.error);
            callback('can\'t find location',undefined)
        }else{
            callback(undefined,'The forecast today is '+body.current.temperature+' '+body.current.weather_descriptions[0]+', the humidity today is '+body.current.humidity+'%'+' and the current time is a day: '+body.current.is_day)
        }
    })
}

module.exports=forecast