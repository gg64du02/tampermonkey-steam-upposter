// ==UserScript==
// @name        Steam Discussions Enhancements up poster by gg64du02
// @namespace   sde
// @description Steam Discussions Enhancements up poster by gg64du02
// @include   http*://steamcommunity.com/app/*/discussions/*
// @include   http*://steamcommunity.com/id/*/commentnotifications/
// @include   http*://steamcommunity.com/id/*/home/invites/

// @version   0.1
// @grant     none
// @require   http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

//Based on this UserScript:
// https://gist.github.com/revooms/faacbaa3a78b5d33ceb5

this.$ = this.jQuery = jQuery.noConflict(true);

sde_AddUppost();

console.log('Greasemonkey Steam Discussions Enhancements loaded');

// -------------------------------------------
function sde_AddUppost() {

    //console.log(window.location.href);
    //gg64du02
    //putting the up message in the textarea
    //class: forumtopic_reply_entry
    $('.forumtopic_reply_entry .gray_bevel .forumtopic_reply_textarea').val('up');

    console.log(window.location.href);

    right_steam_thread = window.location.href

    stream_thread_to_up = 'https://steamcommunity.com/app/302830/discussions/0/2561864094360371231/'

    if(right_steam_thread==stream_thread_to_up){
        console.log("right thread");


        a = document.getElementsByClassName('commentthread_comment_timestamp');
        b = a[a.length-1];
        c = b.innerText;

        console.log("c:"+c);

        // c='blabla';
        //weird minus is necessary because there is a space character at the end
        is_last_tree_ago = c.substring(c.length-4,c.length-1)
        console.log("is_last_tree_ago:"+is_last_tree_ago);

        if((is_last_tree_ago !== 'ago')&&(is_last_tree_ago !== 'now')){
            console.error("issuing up post");
            //posting the up message
            //btn_green_white_innerfade btn_small
            $('.btn_green_white_innerfade').click();
        }

    }

}

