$(document).ready(function(){


    // 메뉴 토글
    $('.menu .menu-bt').click(function(){
        $('.menu').toggleClass('on');
    });
    
    // 메뉴
    $('.gnb li').click(function(){
        $('.gnb li').removeClass();
        $(this).addClass('on');
        
        $('.pop').hide();
    });
    
    // 버튼
    $('.lnb li button').click(function(){
        $(this).toggleClass('on')
    });
    
    //3d에셋 팝업창
    $('.asset').click(function(){
        $('.list-box1').fadeIn();
    });
    $('.list-box1 .close').click(function(){
        $('.list-box1').fadeOut();
    });
    
    // 3d에셋 드롭다운
    $('.list-box1 .list-wrap .box .title i').click(function(){
    $('.list-box1 .list-wrap .box .title i').parents('.title').siblings('ul').slideUp();
        $(this).parents('.title').siblings('ul').slideDown();
    })
    
    //360vr 팝업창
    $('.vr').click(function(){
        $('.list-box2').fadeIn();
    });
    $('.list-box2 .close').click(function(){
        $('.list-box2').fadeOut();
    });
    
    // 360vr 드롭다운
    $('.list-box2 .list-wrap .box .title i').click(function(){
        $('.list-box2 .list-wrap .box .title i').parents('.title').siblings('ul').slideUp();
        $(this).parents('.title').siblings('ul').slideDown();
    })
    
    // 페이지네이션 버튼
    $('.page-nav.mo ul li').click(function(){
    
        $('.page-nav.mo ul li').removeAttr('id', 'on');
        $('.page-nav.mo ul li div').removeAttr('id', 'on');
        $('.page-nav.mo ul li p').removeAttr('id', 'on');
    
        //눌렀을때 계속 보이게 하는거
        $(this).attr('id', 'on');
        $(this).find('div').attr('id', 'on');
        $(this).find('p').attr('id', 'on');
    });

    // 페이지네이션 버튼
    // $('.page-nav.mo ul li').click(function(){
    
    //     $('.page-nav.mo ul li').removeClass('on');
    //     $('.page-nav.mo ul li div').removeClass('on');
    //     $('.page-nav.mo ul li p').removeClass('on');
    
    //     //눌렀을때 계속 보이게 하는거
    //     $(this).addClass('on');
    //     $(this).find('div').addClass('on');
    //     $(this).find('p').addClass('on');
    // });
    
    
    
    // video-pop
    $('.pop .list-wrap .box ul li').click(function(){
        $('.video-pop-bg').fadeIn();
    });
    
    $('.video-pop-bg i').click(function(){
        $('.video-pop-bg').fadeOut();
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });


    
});//요기까지 제이쿼리

    
function cssbutton(num) {
     gameInstance.SendMessage('MouseWheelMove', 'CSSButton', num);
     console.log("버튼클릭");
}

var PageNav = document.getElementsByClassName("pagenav");
var PageNavDiv = document.getElementsByClassName("pagenavdiv");
var PageNavP = document.getElementsByClassName("pagenavp");

function CamPositionToPageNav(x){
        console.log("CamPositionToPageNav : " + x);
        selectPagNav(x);
}

function selectPagNav(num)
{
        console.log("selectPagNav");
        
        for(let i=0;i < PageNav.length;i++)
        {
               if(i == num) 
               { 
                       PageNav[i].classList.add('on');
                       PageNavDiv[i].classList.add('on');
                       PageNavP[i].classList.add('on');

                }
               else 
               {
                       PageNav[i].classList.remove('on');
                       PageNavDiv[i].classList.remove('on');
                       PageNavP[i].classList.remove('on');
               }
        }
        
}


const boxbg = document.getElementsByClassName("conbutton-bg");
var box = document.getElementsByClassName("url2");
//con 버튼
function Asset3DButtonJs(str){ //3D Asset버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("Asset3DButtonJs : " + str);
        switch(str)
        {
            case "택견":
                box[0].src = "https://sketchfab.com/models/04158af4fcdb4d6db43fd6ca4e575779/embed";

                break;
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        //console.log("Asset3DButtonJs isImmersive 아님");
        //console.log("Asset3DButtonJs In VR :" + str);
        switch(str)
        {
            //무형
            case "택견":
                var url = "tak/scene.gltf";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','Model3DViewer');
                console.log(url);
                break;
            //유형
            case "6.25":
                var url = "jang/scene.gltf";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
                break;    
            default:
                console.log("default");
                break;    
        }
        
    }
}

function VR360ButtonJs(str){ //360VR 버튼
    //console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("VR360ButtonJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        //console.log("VR360ButtonJs isImmersive 아님");
        //console.log("VR360ButtonJs In VR :" + str);
        switch(str)
        {
            case "택견":
                var url = "택견.mp4";
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
                break;
            default:
                console.log("default");
                break;    
        }
        
    }

}

function ThreeFaceVideoJs(str){ //3면 버튼
    //console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("ThreeFaceVideoJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        //console.log("ThreeFaceVideoJs isImmersive 아님");
        //console.log("ThreeFaceVideoJs In VR :" + str);
        switch(str)
        {

            //자연
            case "설악산 꽃자리":
                var url = "설악산.mp4";
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
                gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
                break;
            default:
                console.log("default");
                break;   


        }
    }

}

function MediaArtJs(str){//미디어아트 버튼
    console.log("MediaArtJs : " + str);

}

function VideoJs(str){//동영상버튼
    //console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("VideoJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        //console.log("VideoJs isImmersive 아님");
        //console.log("VideoJs In VR :" + str);
        switch(str)
        {
            //유형
            case "6.25":
                var url = "625video.mp4";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene','Video');
                break;

            default:
                console.log("default");
                break;    
        }
        
    }

}

function ASMRJs(str){//디지털병풍버튼
    console.log("ASMRJs : " + str);
}

function ARJs(str){//디지털병풍버튼
    console.log("ARUnityJs : " + str);
}
function RealVRJs(str){//디지털병풍버튼
    //console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("RealVRUnityJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("RealVRUnityJs isImmersive 아님");
        console.log("RealVRUnityJs In VR :" + str);
        switch(str)
        {
            //유형
            case "6.25":
                var url = "625360.mp4";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', '360Video');
                break;
            default:
                console.log("default");
                break;   
        }
        
    }
}

function closeConButton(){
    boxbg[0].style.display="none";
    box[0].src ="";
    console.log("close")
}



//메뉴버튼
function IntangibleButtonJs(){
    location.href= "intangible.html";
}

function NaturalButtonJs(){
    location.href= "natural.html";

}
function TangibleButtonJs(){
    location.href= "tangible.html";
}
function Menu3DAssetButtonJs(){ //향후 예정
    
}
function Menu360VRButtonJs(){ //향후 예정
    
}
function MainLobbyButtonJs(){
    location.href= "index.html";

}
function SoundButtonJs(){//향후 예정
    
}
function VoiceButtonJs(){//향후 예정
    
}
function CCButtonJs(){//향후 예정
    
}
function VROffButtonJs(){
    console.log("vr off button");
    window.xrManager.toggleVR();
}
function KRButtonJs(){//향후 예정
    
}
function ENButtonJs(){//향후 예정
    
}



