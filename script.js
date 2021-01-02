$( function() {
    $( "#accordion" ).accordion();
  } );
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
$(document).ready(
    function() {
        swal("Привет!!! Ты на сайте фанов лучшего существа на этой планете...");
        $("#fan").hide();
        var Switch=0;
        $("h1").on( {
            click: function() {
                $(this).css("color", "#ffffff");
                if (Switch==0) {
                    $("h1").prepend("<p>SOMEBODY ONCE TOLD ME...</p>");
                    $("h1").append("<p>THE WORLD IS GONNA ROLL ME</p>");
                    Switch++;
                }
            },
            mouseleave: function() {
                $(this).css("color", "black");
            }
        })
        $(".name").hover(
            function() {
                $(".name").css("background-color", "black");
            }
        )
        $("textarea").focus(function(){
            $(this).css("background-color", "#cccccc");
        });
        $("textarea").blur(function(){
            $(this).css("background-color", "#ffffff");
        });
        $("#hater").click(
            function() {
                $(".info").hide();
                $("#hater").hide();
                $("#fan").show();
            }
        )
        $("#fan").click(
            function() {
                $(".info").show();
                $("#fan").hide();
                $("#hater").show();
            }
        )
        $(".name").click(
            function () {
                $(".name").html("<b class='name' id='shrek'>SHREK</b>");
            }
        )
        $(".kol1").click(
            function() {
                $(this).toggleClass("highlight");
            }
        )
        $("#hideimg").click(
            function() {
                $(".mem").slideUp(2000).slideDown(2000);
            }
        )
    }
)