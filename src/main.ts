/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter("interviewRoom1").subscribe(() => {
        WA.room.hideLayer("door1Open")
        WA.room.showLayer("door1Closed")
    })
    WA.room.area.onLeave("interviewRoom1").subscribe(() => {
        WA.room.showLayer("door1Open")
        WA.room.hideLayer("door1Closed")
    })
    
    WA.room.area.onEnter("interviewRoom2").subscribe(() => {
        WA.room.hideLayer("door2Open")
        WA.room.showLayer("door2Closed")
    })
    WA.room.area.onLeave("interviewRoom2").subscribe(() => {
        WA.room.showLayer("door2Open")
        WA.room.hideLayer("door2Closed")
    })
    
    WA.room.area.onEnter("interviewRoom3").subscribe(() => {
        WA.room.hideLayer("door3Open")
        WA.room.showLayer("door3Closed")
    })
    WA.room.area.onLeave("interviewRoom3").subscribe(() => {
        WA.room.showLayer("door3Open")
        WA.room.hideLayer("door3Closed")
    })
    
    WA.room.area.onEnter("interviewRoom4").subscribe(() => {
        WA.room.hideLayer("door4Open")
        WA.room.showLayer("door4Closed")
    })
    WA.room.area.onLeave("interviewRoom4").subscribe(() => {
        WA.room.showLayer("door4Open")
        WA.room.hideLayer("door4Closed")
    })
    
    WA.room.area.onEnter("interviewRoom5").subscribe(() => {
        WA.room.hideLayer("door5Open")
        WA.room.showLayer("door5Closed")
    })
    WA.room.area.onLeave("interviewRoom5").subscribe(() => {
        WA.room.showLayer("door5Open")
        WA.room.hideLayer("door5Closed")
    })
    
    WA.room.area.onEnter("interviewRoom6").subscribe(() => {
        WA.room.hideLayer("door6Open")
        WA.room.showLayer("door6Closed")
    })
    WA.room.area.onLeave("interviewRoom6").subscribe(() => {
        WA.room.showLayer("door6Open")
        WA.room.hideLayer("door6Closed")
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
