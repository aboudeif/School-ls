function preLoad(){
    var tab = localStorage.getItem('activeTab');
    if(!tab)
        tab = 'ST';
    openTab('title-'+tab,'open');
}
function keepTab(tab){
    localStorage.setItem('activeTab',tab);
}
function search(tab){
    var box = document.getElementById('searchBox');
    var searchList = document.getElementById('search-col');

    var _tbody = document.getElementById('table-body');  
    var _tfoot = document.getElementById('cell-footer');
    var count = 0;
    _tbody.innerHTML = "";
    var id;
    if(searchList.value == '0'){ 
         
        for (var x = 0; x < localStorage.length; x++){
            id = localStorage.key(x).slice(0,-4);
            if (localStorage.key(x).slice(-4) == 'name' && localStorage.key(x).slice(0,2) == tab && localStorage.key(x).includes(box.value))
            {
                goPrint(tab,x,_tbody,id);
                count++;
            }
            _tfoot.innerHTML = "total of: "+count+" students";  
        }
        return 0;
        }

    if(searchList.value == '1'){ 
         
        for (var x = 0; x < localStorage.length; x++){
            id = localStorage.key(x).slice(0,-4);
            if (localStorage.key(x).slice(-4) == 'name' && localStorage.key(x).slice(0,2) == tab && localStorage.getItem(localStorage.key(x)).includes(box.value))
            {
                goPrint(tab,x,_tbody,id);
                count++;
            }
            _tfoot.innerHTML = "total of: "+count+" students";
        }
        return 0;
    }    
    if(searchList.value == '2'){
         
        for (var x = 0; x < localStorage.length; x++){
            id = localStorage.key(x).slice(0,-3);
            if (localStorage.key(x).slice(-3) == 'nid' && localStorage.key(x).slice(0,2) == tab && localStorage.getItem(localStorage.key(x)).includes(box.value))
            {
                goPrint(tab,x,_tbody,id);
                count++;
            }
            _tfoot.innerHTML = "total of: "+count+" students";
        }
        return 0;
    }   
    if(searchList.value == '3'){
         
        for (var x = 0; x < localStorage.length; x++){
            id = localStorage.key(x).slice(0,-6);
            if (localStorage.key(x).slice(-6) == 'gender' && localStorage.key(x).slice(0,2) == tab && localStorage.getItem(localStorage.key(x)).includes(box.value))
            {
                goPrint(tab,x,_tbody,id);
                count++;
            }
            _tfoot.innerHTML = "total of: "+count+" students";
        }
        return 0;
    }
    if(searchList.value == '4'){ 
         
        for (var x = 0; x < localStorage.length; x++){
            id = localStorage.key(x).slice(0,-5);
            if (localStorage.key(x).slice(-5) == 'email' && localStorage.key(x).slice(0,2) == tab && localStorage.getItem(localStorage.key(x)).includes(box.value))
            {
                goPrint(tab,x,_tbody,id);
                count++;
            }
            _tfoot.innerHTML = "total of: "+count+" students";
        }
        return 0;
    }     
}
function reset(tab){
    if(tab == 'ST'){
    document.getElementById('numId').value = '';
    document.getElementById('nameId').value = '';
    document.getElementById('NIDId').value = '';
    document.getElementById('genderId').value = '';
    document.getElementById('emailId').value = '';
    document.getElementById('stationId').value = '';
    document.getElementById('addressId').value = '';
    document.getElementById('busId').value = '';
    document.getElementById('birthdateId').value = '';
    document.getElementById('classId').value = '';
    document.getElementById('statusId').value = '';
    document.getElementById('infoId').value = '';
    }
    if(tab == 'TC'){
        document.getElementById('TCHnumId').value = '';
        document.getElementById('TCHnameId').value = '';
        document.getElementById('TCHNIDId').value = '';
        document.getElementById('TCHgenderId').value = '';
        document.getElementById('TCHemailId').value = '';
        document.getElementById('TCHaddressId').value = '';
        document.getElementById('TCHbirthdateId').value = '';
        document.getElementById('TCHinfoId').value = '';
    }
    if(tab == 'PR'){
        document.getElementById('PRnumId').value = '';
        document.getElementById('PRnameId').value = '';
        document.getElementById('PRNIDId').value = '';
        document.getElementById('PRgenderId').value = '';
        document.getElementById('PRphoneId').value = '';
        document.getElementById('PRaddressId').value = '';
        document.getElementById('PRinfoId').value = '';
    }
}
function storeValues(tab){
    if(tab == 'ST'){
    var _numId = 'ST' + document.getElementById('numId').value;
    var _nameId = document.getElementById('nameId').value;
    var _NIDId = document.getElementById('NIDId').value;
    var _genderId = document.getElementById('genderId').value;
    var _emailId = document.getElementById('emailId').value;
    var _stationId = document.getElementById('stationId').value;
    var _addressId = document.getElementById('addressId').value;
    var _busId = document.getElementById('busId').value;
    var _birthdateId = document.getElementById('birthdateId').value;
    var _classId = document.getElementById('classId').value;
    var _statusId = document.getElementById('statusId').value;
    var _infoId = document.getElementById('infoId').value;

    localStorage.setItem(_numId +'name', _nameId);
    localStorage.setItem(_numId +'nid',_NIDId);
    localStorage.setItem(_numId +'gender', _genderId);
    localStorage.setItem(_numId +'email',_emailId);
    localStorage.setItem(_numId +'station', _stationId);
    localStorage.setItem(_numId +'address',_addressId);
    localStorage.setItem(_numId +'bus', _busId);
    localStorage.setItem(_numId +'birthdate',_birthdateId);
    localStorage.setItem(_numId +'_class', _classId);
    localStorage.setItem(_numId +'status',_statusId);
    localStorage.setItem(_numId +'info', _infoId);
    }
    if(tab == 'TC'){
        var _numId = 'TC' + document.getElementById('TCHnumId').value;
        var _nameId = document.getElementById('TCHnameId').value;
        var _NIDId = document.getElementById('TCHNIDId').value;
        var _genderId = document.getElementById('TCHgenderId').value;
        var _emailId = document.getElementById('TCHemailId').value;
        var _addressId = document.getElementById('TCHaddressId').value;
        var _birthdateId = document.getElementById('TCHbirthdateId').value;
        var _infoId = document.getElementById('TCHinfoId').value;
    
        localStorage.setItem(_numId +'name', _nameId);
        localStorage.setItem(_numId +'nid',_NIDId);
        localStorage.setItem(_numId +'gender', _genderId);
        localStorage.setItem(_numId +'email',_emailId);
        localStorage.setItem(_numId +'address',_addressId);
        localStorage.setItem(_numId +'birthdate',_birthdateId);
        localStorage.setItem(_numId +'info', _infoId);
        }
    if(tab == 'PR'){
        var _numId = 'PR' + document.getElementById('PRnumId').value;
        var _nameId = document.getElementById('PRnameId').value;
        var _NIDId = document.getElementById('PRNIDId').value;
        var _genderId = document.getElementById('PRgenderId').value;
        var _phoneId = document.getElementById('PRphoneId').value;
        var _addressId = document.getElementById('PRaddressId').value;
        var _infoId = document.getElementById('PRinfoId').value;
    
        localStorage.setItem(_numId +'name', _nameId);
        localStorage.setItem(_numId +'nid',_NIDId);
        localStorage.setItem(_numId +'gender', _genderId);
        localStorage.setItem(_numId +'phone',_phoneId);
        localStorage.setItem(_numId +'address',_addressId);
        localStorage.setItem(_numId +'info', _infoId);
        }
        printValues(tab);
}
function getName(id){
    if (localStorage.getItem(id +'name'))
        return localStorage.getItem(id +'name');
}
function getNid(id){
    if (localStorage.getItem(id +'nid'))
        return localStorage.getItem(id +'nid');
}
function getGender(id){
    var gender = localStorage.getItem(id +'gender');
    return gender;
}
function viewGender(id){
    var gender = localStorage.getItem(id +'gender');
    if (gender)
        if (gender == 'male')
            return 'ذكر';
        else
            return 'أنثي';
}

function getEmail(id){
    if (localStorage.getItem(id +'email'))
        return localStorage.getItem(id +'email');
    else
        return '';
}
function getPhone(id){
    if (localStorage.getItem(id +'phone'))
        return localStorage.getItem(id +'phone');
    else
        return '';
}
function getStation(id){
    if (localStorage.getItem(id +'station'))
        return localStorage.getItem(id +'station');
    else
        return '';
}
function getAddress(id){
    if (localStorage.getItem(id +'address'))
        return localStorage.getItem(id +'address');
    else
        return '';
}
function getBus(id){
    if (localStorage.getItem(id +'bus'))
        return localStorage.getItem(id +'bus');
    else
        return '';
}
function getBirthdate(id){
    if (localStorage.getItem(id +'birthdate'))
        return localStorage.getItem(id +'birthdate');
    else
        return '';
}
function getClass(id){
    if (localStorage.getItem(id +'_class'))
        return localStorage.getItem(id +'_class');
    else
        return '';
}
function getStatus(id){
    var status = localStorage.getItem(id +'status');
    return status;
}
function viewStatus(id){
    var status = localStorage.getItem(id +'status');
    if (status == 'new')
            return 'جديد';
        if (status == 'moved')
            return 'منقول';
        if (status == 'tirm')
            return 'مفصول';
        else
            return '';
}
function getInfo(id){
    if (localStorage.getItem(id +'info'))
        return localStorage.getItem(id +'info');
    else
        return '';
}
function getValues(id){
    var tab = id.slice(0,2);
    reset(tab);
    if(tab == 'ST'){
    
    document.getElementById('numId').value = id.slice(2);
    document.getElementById('nameId').value = getName(id);
    document.getElementById('NIDId').value = getNid(id);
    document.getElementById('genderId').value = getGender(id);
    document.getElementById('emailId').value = getEmail(id);
    document.getElementById('stationId').value = getStation(id);
    document.getElementById('addressId').value = getAddress(id);
    document.getElementById('busId').value = getBus(id);
    document.getElementById('birthdateId').value = getBirthdate(id);
    document.getElementById('classId').value = getClass(id);
    document.getElementById('statusId').value = getStatus(id);
    document.getElementById('infoId').value = getInfo(id);
    }
    if(tab == 'TC'){
    
    document.getElementById('TCHnumId').value = id.slice(2);
    document.getElementById('TCHnameId').value = getName(id);
    document.getElementById('TCHNIDId').value = getNid(id);
    document.getElementById('TCHgenderId').value = getGender(id);
    document.getElementById('TCHemailId').value = getEmail(id);
    document.getElementById('TCHaddressId').value = getAddress(id);
    document.getElementById('TCHbirthdateId').value = getBirthdate(id);
    document.getElementById('TCHinfoId').value = getInfo(id);
    }
    if(tab == 'PR'){
    
    document.getElementById('PRnumId').value = id.slice(2);
    document.getElementById('PRnameId').value = getName(id);
    document.getElementById('PRNIDId').value = getNid(id);
    document.getElementById('PRgenderId').value = getGender(id);
    document.getElementById('PRphoneId').value = getPhone(id);
    document.getElementById('PRaddressId').value = getAddress(id);
    document.getElementById('PRinfoId').value = getInfo(id);
    }
    if(tab == 'SP'){
    var i, newOption, list;
    list = document.getElementById('SPList');
    newOption = document.createElement('option');
    newOption.value = id.slice(2);
    for(i=0; i<list.childElementCount; i++){
        if(list.children[i].value == id.slice(2)){
        list.removeChild(list.children[i]);
        return 0;
        }
    }
    list.appendChild(newOption);
    
    for(i=0; i<list.childElementCount; i++)
        console.log(list.children[i].value);
    }
    
}
function printValues(tab){
    var x,_tbody = document.getElementById(tab+"Table").getElementsByTagName('tbody')[1];
    _tbody.innerHTML = "";
    
    if(tab == 'a1'){
        var list = document.getElementById('SPList');
        for (x = 0; x < list.childElementCount; x++){
            var id = 'PR'+list.children[x].value;//localStorage.key(x).slice(0,-4);
           
            goPrint(tab,_tbody,id,x);
                    
            
        }
        var _row = _tbody.insertRow(0);
        var _cell = [];
        //_tbody = _tbody.insertRow(0);
         for(var i = 0; i<5; i++)
             _cell[i] = _row.insertCell(i);
            
            _cell[0].innerHTML = "";
            _cell[1].innerHTML = "";
            _cell[2].innerHTML = "";
            _cell[3].innerHTML = "";
            _cell[4].innerHTML = "";//<input class='addBtn sbtn' type='button' value='إضافة' onclick='printValues("+'SP'+"); document.getElementById('show-SP').style.display='block';'>";
    }
   
    else{
    for (x = 0; x < localStorage.length; x++){
        var id = localStorage.key(x).slice(0,-4);
        if (localStorage.key(x).slice(-4) == 'name' )
            goPrint(tab,_tbody,id,x);
                
        
    }
    }    
        
}
function goPrint(tab,_tbody,id,x){

    
            var _row = _tbody.insertRow(0);
            _row.setAttribute("onclick","getValues('"+id+"');select(event);");
            _row.setAttribute("ondblclick","document.getElementById('show-"+tab+"').style.display = 'block';");
            var _cell = [];

            if(tab == 'ST' && localStorage.key(x).slice(0,2) == tab){
            for(var i = 0; i<12; i++)
                _cell[i] = _row.insertCell(i);
            
            _cell[0].innerHTML = id.slice(2);
            _cell[1].innerHTML = getName(id);
            _cell[2].innerHTML = getNid(id);
            _cell[3].innerHTML = viewGender(id);
            _cell[4].innerHTML = getEmail(id);
            _cell[5].innerHTML = getStation(id);
            _cell[6].innerHTML = getAddress(id);
            _cell[7].innerHTML = getBus(id);
            _cell[8].innerHTML = getBirthdate(id);
            _cell[9].innerHTML = getClass(id);
            _cell[10].innerHTML = viewStatus(id);
            _cell[11].innerHTML = getInfo(id);
            }
            
            if(tab == 'TC' && localStorage.key(x).slice(0,2) == tab){
            for(var i = 0; i<8; i++)
                _cell[i] = _row.insertCell(i);

            _cell[0].innerHTML = id.slice(2);
            _cell[1].innerHTML = getName(id);
            _cell[2].innerHTML = getNid(id);
            _cell[3].innerHTML = viewGender(id);
            _cell[4].innerHTML = getEmail(id);
            _cell[5].innerHTML = getAddress(id);
            _cell[6].innerHTML = getBirthdate(id);
            _cell[7].innerHTML = getInfo(id);
            
            }
            if(tab == 'PR' && localStorage.key(x).slice(0,2) == tab){
            for(var i = 0; i<7; i++)
                _cell[i] = _row.insertCell(i);

            _cell[0].innerHTML = id.slice(2);
            _cell[1].innerHTML = getName(id);
            _cell[2].innerHTML = getNid(id);
            _cell[3].innerHTML = viewGender(id);
            _cell[4].innerHTML = getPhone(id);
            _cell[5].innerHTML = getAddress(id);
            _cell[6].innerHTML = getInfo(id);
            }
            
            if(tab == 'a1'){
                for(var i = 0; i<4; i++)
                    _cell[i] = _row.insertCell(i);
    
                _cell[0].innerHTML = id.slice(2);
                _cell[1].innerHTML = getName(id);
                _cell[2].innerHTML = getNid(id);
                _cell[3].innerHTML = getPhone(id);

                }
            if(tab == 'SP' && localStorage.key(x).slice(0,2) == 'PR'){
            for(var i = 0; i<4; i++)
            _cell[i] = _row.insertCell(i);
            
            //console.log(document.getElementById('ch'+id.slice(2)).id);
            _cell[0].innerHTML= '<input type="checkbox" class="choose" onchange="getValues('+"'SP'"+'+'+id.slice(2)+');">';
            
            _cell[1].innerHTML = id.slice(2);
            _cell[2].innerHTML = getName('PR'+id.slice(2));
            _cell[3].innerHTML = getNid('PR'+id.slice(2));

            //_row.setAttribute("ondblclick","+_row+".getElementsByTagName("'+input+'").checked=true'");
            }
            
}

function openTab(tabT,act){
    var i,tabs, tabContent, tabTitle, thisTabContent;
    var tab = tabT.slice(-2);
    tabTitle = document.getElementById(tabT);
    if(act == "open" && tabTitle.style.display == "none")
        return 0;
    if(act == "show" && tabTitle.style.display == "block")
        return 0;
    thisTabContent = document.getElementById(tab);
    if (tabTitle.style.display != "block")
        tabTitle.style.display = "block";
    
    tabContent = document.getElementsByClassName("tabcontent");
    for( i = 0; i<tabContent.length; i++)
        tabContent[i].style.display = "none";

    tabs = document.getElementsByClassName("tab-title");
    for( i = 0; i<tabs.length; i++)
        tabs[i].className = tabs[i].className.replace(" active","");
    
    thisTabContent.style.display = "block";
    tabTitle.className += " active";

    
    var searchList = document.getElementById(tab+"search-col");
    if(searchList.length > 0)
        return 0;
    var tablecols = document.getElementById(tab+"Table").getElementsByTagName('th');
    for(var i = 0; i<tablecols.length; i++){
    var  opt =  document.createElement ('option');
    opt.value = i;
    opt.innerHTML = tablecols[i].innerHTML;
    searchList.appendChild(opt);
    }
    printValues(tab);
}
function openSubTab(evt,tab,tabC){
var i, tabTitle,tabParent, tabContent,tabContentParent;
tabTitle = evt.currentTarget;
tabParent = tabTitle.parentElement.getElementsByTagName('button');
tabContent = document.getElementById(tab);
tabContentParent = tabContent.parentElement.getElementsByTagName('table');


for(i=0; i<tabParent.length; i++)
    tabParent[i].className = "";
tabTitle.className = "active";

for(i=0; i<tabContentParent.length; i++)
    tabContentParent[i].className = "subTab";
tabContent.className = "active";
}

function closeTab(evt, tabC){

    var parentTab;
    parentTab = evt.currentTarget.parentElement;
    parentTab.className = parentTab.className.replace(" active","");
    hideItem(tabC);
    hideItem(parentTab.id);
    
}
function hideItem(tabC){

    var thisTabContent;
    thisTabContent = document.getElementById(tabC);
    thisTabContent.style.display = "none";
    
}
function deleteValue(tab){
    var _numId;
    if(tab == 'ST'){
    _numId = tab + document.getElementById('numId').value;
    localStorage.removeItem(_numId);
    localStorage.removeItem(_numId +'name');
    localStorage.removeItem(_numId +'nid');
    localStorage.removeItem(_numId +'gender');
    localStorage.removeItem(_numId +'email');
    localStorage.removeItem(_numId +'station');
    localStorage.removeItem(_numId +'address');
    localStorage.removeItem(_numId +'bus');
    localStorage.removeItem(_numId +'birthdate');
    localStorage.removeItem(_numId +'_class');
    localStorage.removeItem(_numId +'status');
    localStorage.removeItem(_numId +'info');
    }
    if(tab == 'TC'){
    _numId = tab + document.getElementById('TCHnumId').value;
    localStorage.removeItem(_numId);
    localStorage.removeItem(_numId +'name');
    localStorage.removeItem(_numId +'nid');
    localStorage.removeItem(_numId +'gender');
    localStorage.removeItem(_numId +'email');
    localStorage.removeItem(_numId +'address');
    localStorage.removeItem(_numId +'birthdate');
    localStorage.removeItem(_numId +'info');
    }
    if(tab == 'PR'){
    _numId = tab + document.getElementById('TCHnumId').value;
    localStorage.removeItem(_numId);
    localStorage.removeItem(_numId +'name');
    localStorage.removeItem(_numId +'nid');
    localStorage.removeItem(_numId +'gender');
    localStorage.removeItem(_numId +'phone');
    localStorage.removeItem(_numId +'address');
    localStorage.removeItem(_numId +'info');
    }
}
function select(evt){
    var trid, tbody;
    tbody = evt.currentTarget.parentElement;
    trid = tbody.getElementsByTagName('tr');
    for(var i=0;i<trid.length;i++)
        tbody.getElementsByTagName('tr')[i].className = "";
    evt.currentTarget.className += " selected";
}
function clear(item){
    console.log('hello');
    var ele = document.getElementsByName(item);for(var i=0; i<ele.length; i++){ele[i].value = '';}
}