var oldContent;
var swfContainer;

function hideSWF(idCont)
{
     swfContainer = document.getElementById('swfContainer'+idCont);
     swfContainer.innerHTML = oldContent;
}


function putSWF(swfName, idCont)
{
    swfContainer = document.getElementById('swfContainer'+idCont);
    oldContent = swfContainer.innerHTML;
    var extension = swfName.split('.')[1];
    var sizes = (extension == 'gig') ? '' : 'width="800" height="700"';
	console.log(sizes);
    swfContainer.innerHTML =  '<div align="center"><embed src="../swf/' + swfName + '" ' + sizes + '></div><p><a href="javascript:hideSWF('+idCont+')">Убрать</a></p>';
   
    // '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="800" height="700" id="'+swfName+'" align="middle">    <param name="movie"     value="../swf/'+swfName+'" />    <param name="quality"   value="high" />    <param name="bgcolor"   value="#ffffff" />    </object><p><a href="javascript:hideSWF('+idCont+')">Убрать</a></p>';
}