function getURL(text)
{
     switch(text)
         {
            case "Start":
                console.log("getURL : Start");   
                break;
            case "무형유산":
                console.log("getURL : 무형유산");   
                // window.location = '../intangible.html';
                location.href= "intangible.html";
                break;
            case "자연유산":
                console.log("getURL : 자연유산");   
                // window.location = '../NaturalHeritageBuild/index.html';
                location.href= "natural.html";
                break;
            case "유형유산":
                console.log("getURL : 유형유산");   
                // window.location = '../TangibleHeritageBuild/index.html';
                location.href= "tangible.html";
                break;
        }
        
}


