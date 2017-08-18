function validate(){
    var err = 0;
    var elements=['fn','ln','e','p','cp','adds','gender','lang'];
    for(i=0;i<elements.length;i++)
    {
        var success = false;
        if(elements[i] === 'gender' || elements[i] === 'lang')
        {
            success = checkgrouperror(elements[i],'error'+i);
        }
        else{
            success = chkblnk(elements[i], 'error'+i);
        }
        err = (success) ? err : ++err;
    } 
    
    if(err === 0)
    {
        document.Form.submit();
    }
    else{
        alert("form is not ready to submit");
        return false;
    }
}

function chkblnk(eid,errid)
{
    var x=document.getElementById(eid).value;
    if(x=="")
    {
        document.getElementById(errid).innerHTML="please fill this fields";
        return false;
    }
    else
    {
        document.getElementById(errid).innerHTML="";
        return true;
    }
}
function checkgrouperror(name,errid){
    var len= document.Form[name].length ;
    var groupvalue;
    var i;
    for(i =0;i<len;i++){
        if(document.Form[name][i].checked ){
            groupvalue=document.Form[name][i].value;
            break;
        }
    }
    if(!groupvalue){
        document.getElementById(errid).innerHTML="select anyone";
        return false;
    }else{
        document.getElementById(errid).innerHTML="";
        return true;
    }
}
