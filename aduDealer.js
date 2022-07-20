  var Tags = document.querySelector(".tags_Categ .tags");
  var Catgs = document.querySelector(".tags_Categ .categ");
  var Loader = document.querySelector(".Vidloader");
  
  function LoadTagsCats() {
    var AllTags = Tags.innerHTML.split(',');
    var AllCatgs = Catgs.innerHTML.split(',');
    
    var tagsElement = "",CatgsElement = "", Alink = "";
    for (i = 0; i < AllTags.length; i++){
        Alink = "<a href='"+"/search/?q="+AllTags[i]+"'>" +AllTags[i]+ "</a>";
        tagsElement += Alink;
    }

    Alink = "";
    for (i = 0; i < AllCatgs.length; i++){
        Alink = "<a href='"+"/search/?q="+AllCatgs[i]+"'>" +AllCatgs[i]+ "</a>";
        CatgsElement += Alink;
    }

    Catgs.innerHTML = "";Catgs.innerHTML += CatgsElement;
    Tags.innerHTML = "";Tags.innerHTML += tagsElement;
  }
  
  var sites = [
    'https://www.xvdeos1.com/embedframe/',
    'https://xhamster18.desi/embed/',
    'https://spankbang.com/'];
  
  function LoadFrame(siteSelector, Src) {
    //width="640" height="480"
    var iframeTag1 = '<iframe src="';
    var iframeTag2 = '" scrolling="no" autoplay="true" allowfullscreen="" width="100%" height="100%"  frameborder="0"></iframe>';
    Loader.innerHTML = "";
	console.log(sites[siteSelector-1] + Src);
    if (siteSelector == 0) {
        Loader.innerHTML += Src;
    }
    else if (siteSelector == 1) {
		Loader.innerHTML += iframeTag1 + sites[siteSelector-1] + Src + iframeTag2;
    }
    else if (siteSelector == 2) {
        Loader.innerHTML += iframeTag1 + sites[siteSelector-1] + Src + iframeTag2;
    }
    else if (siteSelector == 3) {
        Loader.innerHTML += iframeTag1 +  sites[siteSelector-1]+ Src +"/embed" + iframeTag2;
    }
  }
LoadTagsCats();
	
