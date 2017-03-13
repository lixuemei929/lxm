/**
 * Created by lenovo on 2017/3/12.
 */
var add=document.getElementById('add'),
    selected=document.getElementById('selected'),
    spans=selected.getElementsByTagName('span'),
    lis=selected.getElementsByTagName('li'),
    edit=document.getElementById('edit');


add.onclick=function(){
    var newLi=document.createElement('li');
        newLi.innerHTML=lis[0].innerHTML;
    var newSpan=document.createElement('span');
        newSpan.innerHTML=spans[0].innerHTML;
        newLi.appendChild(newSpan)
        selected.appendChild(newLi);
        newSpan.onclick=function(){
            selected.removeChild(newLi);
        }

}

edit.onclick=function(){
    for(var i=0;i<spans.length;i++){
        spans[i].style.display='block';
    }
};



