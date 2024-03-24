const speed = 140
const speedLimit = 70
const points = ((speed - speedLimit)/5)


if(speed <= speedLimit){
  console.log('OK')
}

else if(points >= 12){
    console.log('License Suspended')
}

else if(speed >= speedLimit){
    console.log('points')
    
    
}
