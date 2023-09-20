let count=0;

function decrease(){

  count-=1;
  document.getElementById('labelValue').innerHTML=count;
if(count<0){
  labelValue.style.color='red';

}
}

function reset(){

  count=0;
  document.getElementById('labelValue').innerHTML=count;
if(count==0){
  labelValue.style.color='skyblue';
  
}
}

function increase(){

  count+=1;
  document.getElementById('labelValue').innerHTML=count;
  if(count>0){
    labelValue.style.color='green';
    
  }
}
