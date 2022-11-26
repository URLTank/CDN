/*
0- Universal IFrame
1- xv
2- xha
3- SpankB
4- Video URL
5- Mdisk
*/

//var TagsCatgdiv = document.querySelector(".tags_Categ");
function addArtists(models, Channels,website){
    var Models2Add = "", ModelsDB = "",
        Channel2Add = "", ChannelDB = "", Site2Add = "<b>Embed from: </b>";
    
    ModelsDB = models.split(",");
    ChannelDB = Channels.split(",");

    for (i = 0; i < ModelsDB.length; i+=2)
        Models2Add += "<a href='" + ModelsDB[i + 1].trim() + "'>" + ModelsDB[i].trim() + "</a>";
    console.log(ChannelDB.length)
    for(i=0;i<ChannelDB.length;i+=2)
        Channel2Add += "<a href='" + ChannelDB[i + 1].trim() + "'>" + ChannelDB[i].trim() + "</a>";
    
    for (i = 0; i < website.length; i++)
        Site2Add += "<a href='"+website[i][1]+"'>" + website[i][0] + "</a>";

    document.querySelector(".model_netw .model").innerHTML = Models2Add;
    document.querySelector(".model_netw .model_Channel").innerHTML = Channel2Add;
    document.querySelector(".model_netw .website").innerHTML = Site2Add;
} 

var tagsElement = document.querySelector(".tags_Categ .tags");
var CatgsElement = document.querySelector(".tags_Categ .categ");
function LoadTagsCats(AllTags, AllCatgs) { 
    // var AllTags = Tags.innerHTML.split(',');
    // var AllCatgs = Catgs.innerHTML.split(',');
    
    var tagsContent = "",CatgsContent = "", Alink = "";
    for (i = 0; i < AllTags.length; i++){
        Alink = "<a href='"+"/search/?q="+AllTags[i].trim()+"'>" +AllTags[i].trim()+ "</a>";
        tagsContent += Alink;
    }

    Alink = "";
    for (i = 0; i < AllCatgs.length; i++){
        Alink = "<a href='"+"/search/?q="+AllCatgs[i].trim()+"'>" +AllCatgs[i].trim()+ "</a>";
        CatgsContent += Alink;
    }

    CatgsElement.innerHTML += "<h2>Categories- </h2>" + CatgsContent;
    tagsElement.innerHTML += "<h2>Tags- </h2>"+ tagsContent;
}

var PopUpDwnld = document.querySelector(".actionBtns");
var sites = [
    'https://'+'www'+'.xvdeo'+'s1.com/embedframe/',
    'https://'+'xha'+'mster1'+'8.desi/embed/',
    'https://'+'spa'+'nkbang'+'.com/']

function LoadFrame(siteSelector, Src,LoaderClass) {
    //width="640" height="480"
    var Loader = document.querySelector(LoaderClass);
    var iframeTag1 = '<iframe src="';
    var iframeTag2 = '" scrolling="no" autoplay="true" allowfullscreen="" width="100%" height="100%"  frameborder="0"></iframe>';
    Loader.innerHTML = "";
    if (siteSelector == 0) {
        Loader.innerHTML += Src;
    }
    else if (siteSelector == 1) {
        Loader.innerHTML += iframeTag1 + sites[siteSelector - 1] + Src + iframeTag2;
    }
    else if (siteSelector == 2) {
        Loader.innerHTML += iframeTag1 + sites[siteSelector - 1] + Src + iframeTag2;
    }
    else if (siteSelector == 3) {
        Loader.innerHTML += iframeTag1 + sites[siteSelector - 1] + Src + "/embed" + iframeTag2;
    }
    else if (siteSelector == 4) {
        var VidTag = "<video src='" + Src + "' type='video/mp4'></video>";
        Loader.innerHTML = VidTag;
    }
    else if (siteSelector == 5) { 
        setTimeout(function () {
            PopUpDwnld.style.display = "flex";
            PopUpDwnld.childNodes[1].children[1].setAttribute("href",Src)
        }, 3000)
    }
}

PopUpDwnld.addEventListener('click', function (e) {
    if (e.target !== this)
    return;
    PopUpDwnld.style.display = "none";
})
