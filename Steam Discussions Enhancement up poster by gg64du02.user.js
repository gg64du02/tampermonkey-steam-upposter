// ==UserScript==
// @name        Steam Discussions Enhancement up poster by gg64du02
// @namespace   sde
// @description Steam Discussions Enhancement up poster by gg64du02
// @include   http*://steamcommunity.com/app/*/discussions/*
// @include   http*://steamcommunity.com/id/*/commentnotifications/
// @include   http*://steamcommunity.com/id/*/home/invites/

// @version   0.1
// @grant     none
// @require   http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

//Based on this UserScript:
// https://gist.github.com/revooms/faacbaa3a78b5d33ceb5



//PLEASE SET THOSE VARIABLES
//thread to up post
window.stream_thread_to_up = 'https://steamcommunity.com/app/302830/discussions/0/1741103267301554430/';
//minimum number of hours between posts
window.hours_timer_for_upposting = 2;
//number of minutes between page refresh
window.time_in_min_for_refresh = 31;



this.$ = this.jQuery = jQuery.noConflict(true);

sde_AddUppost(stream_thread_to_up,hours_timer_for_upposting);

timerReloadSetUp(time_in_min_for_refresh);

console.log('Greasemonkey Steam Discussions Enhancements loaded');


function timerReloadSetUp(time_in_min){
    console.log("timerReload:start");
    console.log("time_in_min:"+time_in_min);
    // +"00" -> *100
    //time_in_ms = time_in_min * 60 * 100000 *100;
    var time_in_ms = parseInt(time_in_min) * 100000 ;
    console.log("time_in_ms:"+time_in_ms);
    //10 * 1000 ms
//     window.setInterval(reload, 10000);
    //time_in_min * 60 * 1000 ms
    window.setInterval(reload, parseInt(time_in_min * 60 * 1000));

}

function reload(){
    console.log("reload:start");
    location.reload();
}


// -------------------------------------------
function sde_AddUppost(stream_thread_to_up,hours_timer) {


    //gg64du02

    //console.log(window.location.href);
    console.log(window.location.href);

    var right_steam_thread = window.location.href

    if(right_steam_thread==stream_thread_to_up){
        console.log("right thread");


        var a = document.getElementsByClassName('commentthread_comment_timestamp');
        var b = a[a.length-1];


        var last_message_timestamp = b.getAttribute('data-timestamp');

        last_message_timestamp = last_message_timestamp + "00000";

//         console.log("last_message_timestamp:"+last_message_timestamp);


        var current_time = new Date();

        var current_time_in_ms = current_time.getTime();

        //add two missing zero to compare them
        current_time_in_ms = current_time_in_ms + "00";

//         console.log("current_time_in_ms    :"+current_time_in_ms);


        var current_time_in_ms_int = parseInt(current_time_in_ms);

        var last_message_timestamp_int = parseInt(last_message_timestamp);


        var diff  =  current_time_in_ms_int - last_message_timestamp_int;

//         console.log("diff:"+diff);


        var hours_since_last_message = (diff / 3600) / 100000;

//         console.log("hours_since_last_message:"+hours_since_last_message);

        if(hours_since_last_message>hours_timer){

            //clicking on the bin button on the last message posted by myself
            e = document.getElementsByClassName('forum_comment_action');
            f = e[e.length-3]
            f.click()

            //confirming the deletion of the message
            g = document.getElementsByClassName('btn_green_white_innerfade btn_medium')
            g[g.length-1].click()

            //putting the up message in the textarea
            //class: forumtopic_reply_entry
            $('.forumtopic_reply_entry .gray_bevel .forumtopic_reply_textarea').val('up');
            console.log("timer triggered");

            //posting the up message
            //btn_green_white_innerfade btn_small
            $('.btn_green_white_innerfade').click();
        }

    }

}
