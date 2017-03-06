window.onload=function(){
    XiaoLong();
};
function XiaoLong(){
    var _addBtn,_addCancel,_editBtn,_deleteBtn,_popup,_editCancel,_deleteCancel,_table;
    (function initializer(){
        _popup=document.getElementById("popup");
        _addBtn=document.getElementById("add-button");
        _editBtn=document.getElementsByClassName("edit-button");
        _deleteBtn=document.getElementsByClassName("delete-button");
        _addCancel=document.getElementById("manage-add-cancel");
        _editCancel=document.getElementById("manage-edit-cancel");
        _deleteCancel=document.getElementById("manage-delete-cancel");
        _table=document.getElementById("inf-table");
        eventListener();
    }());
    function eventListener(){
        console.log();
        for(var i=0,n=_editBtn.length;i<n;i++){
            _editBtn[i].onclick=clickToShow;
            _deleteBtn[i].onclick=clickToShow;
        }
        _addBtn.onclick=clickToShow;
        _addCancel.onclick=clickToHide;
        _editCancel.onclick=clickToHide;
        _deleteCancel.onclick=clickToHide;
    }
    function clickToShow(){
        var ids=this.id.split("-");
        var key=ids[0];
        if(key!="add"){
            var index=ids[2];
        }
        var face=document.getElementById("popup-"+key);
        if(key=="edit"){
            var instructorID=document.getElementById("instructor-id");
            var instructorName=document.getElementById("instructor-name");
            instructorID.value=_table.rows[index].cells[0].innerHTML;
            instructorName.value=_table.rows[index].cells[1].innerHTML;
        }
        else if(key=="delete"){
            var inf=document.getElementById("delete-inf");
            inf.innerHTML="ID "+_table.rows[index].cells[0].innerHTML+" - 姓名 "+_table.rows[index].cells[1].innerHTML;
            var hidden=document.getElementById("manage-"+key+"-hidden");
            hidden.value=_table.rows[index].cells[0].innerHTML;
        }
        _popup.className+=" popup-showed";
        face.className+=(" "+face.className+"-showed");
    }
    function clickToHide(){
        var ids=this.id.split("-");
        var key=ids[1];
        var face=document.getElementById("popup-"+key);
        if(key=="edit"){
            var instructorID=document.getElementById("instructor-id");
            var instructorName=document.getElementById("instructor-name");
            instructorID.value="";
            instructorName.value="";
        }
        else if(key=="delete"){
            var hidden=document.getElementById("manage-"+key+"-hidden");
            hidden.value="";
        }
        _popup.className="popup";
        face.className=face.className.split(" ")[0];
    }
}