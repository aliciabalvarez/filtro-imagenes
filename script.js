var nodoTierra = $('.tierra')
var nodoAgua = $('.agua')
var nodoFuego = $('.fuego')
$("#btnTodos").on({
    click:function(){
        nodoAgua.css({"display":"flex"});
        nodoTierra.css({"display":"flex"});
        nodoFuego.css({"display":"flex"});
    }
});
$("#btnTierra").on({
    click:function(){
        nodoAgua.css({"display":"none"});
        nodoTierra.css({"display":"flex"});
        nodoFuego.css({"display":"none"});
    }
});
$("#btnAgua").on({
    click:function(){
        nodoAgua.css({"display":"flex"});
        nodoTierra.css({"display":"none"});
        nodoFuego.css({"display":"none"});
    }
});
$("#btnFuego").on({
    click:function(){
        nodoAgua.css({"display":"none"});
        nodoTierra.css({"display":"none"});
        nodoFuego.css({"display":"flex"});
    }
});
$(".imagen").on({
    click:function(){
        $("#imagengrande").css({"display":"flex",});
        let miSrc =  $(this).find("img").attr("src"); // GET
        $("#imagengrande").find("img").attr("src" , miSrc ) // SET
    },
});
$(".imagengrande").on({
    click:function(){
        $("#imagengrande").css({"display":"none"});
    }
});