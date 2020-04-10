const xapi = require('xapi');

function log(entry) {
    console.log(entry);
}

log ('VC EX Demo Local Side'); // JG Plus 

// Listen to clicks on buttons: the buttons can either be pressed or released
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "local_equal") {
      console.log ('Video Output Change');
      unsetvalue_local_prominent ();
      switch (event.Value) {
        case '1': // Set Monitor 1 and Quad cam
              log ('Changing Video Output');
            xapi.command('cameras speakertrack activate');
            console.log ('speakertrack Activated Quad!!!');
             xapi.command('Video Matrix Assign', {
              mode: 'replace',
              output: '1',
              sourceId: '1'
             });
            log ('Changed Video Output Equal layout Monitor with Quad');
            break;
        case '2': // Set Monitor 1 and P60 camera
            log ('replacing Video Output 1 source 1');
            xapi.command('Video Matrix Assign', {
              mode: 'replace',
              output: '1',
              sourceId: '3' // P60 
             });
//            log ('adding Video Output 1 source 2');
//            xapi.command('Video Matrix Assign', {
//              mode: 'add',
//              output: '2',
//              sourceId: '2' // PC
//             });
             console.log('Changed Video Output Equal layout Monitor with P60'); 
            break;
        case '3': //Use Monitor 1 with Quad and P60 camera 
           log ('replacing Video Output 1 source 1');
           xapi.command('cameras speakertrack activate');
           xapi.command('video matrix assign', {
               mode: "replace",
               layout: 'equal',
               output: "1",
               sourceid: "1" // Quad
            });
            log ('adding Video Output 1 source 2');
            xapi.command('Video Matrix Assign', {
                mode: 'add',
                output: '1',
                sourceId: '3' // P60
             });
             console.log('Changed Video Output Equal layout Monitor with Quad & P60'); 
            break;
        case '4': //Use Monitor 1 Quad add P60 with No Speakertrack
           log ('replacing Video Output 1 source 1');
           xapi.command('video matrix assign', {
               mode: "replace",
               layout: 'equal',
               output: "1",
               sourceid: "1"
            });
            xapi.command('cameras speakertrack deactivate');
            console.log ('speakertrack De-Activated!!!');            
            log ('adding Video Output 1 source 3');
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60-1 Cam
             });
             console.log('Changed Video Output Equal layout Monitor with Quad & P60 No SpkTrk'); 
            break;
        case '5': //Use Monitor 1 Quad add 2- P60 and the Quad
           log ('replacing Video Output 1 source 1');
           xapi.command('video matrix assign', {
               mode: "replace",
               layout: 'equal',
               output: "1",
               sourceid: "1" // Qaud
            });
            log ('adding Video Output 1 source 3');
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60-1 Cam
             });
            log ('adding Video Output 1 source 3 (second P60');
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60-1 Cam
             });
            log ('adding Video Output 1 source 1 (second quad)');
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             });
             console.log('Changed Video Output Equal layout Monitor with 2- Quad & 2- P60'); 
            break;    
//             break;
        default:
        }
    return;
  }        
});
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "local_prominent") {
      console.log ('Video Output Change');
      unsetvalue_local_equal ();
      switch (event.Value) {
        case '1': // Set Monitor 1 and Quad cam
              log ('Changing Video Output');
             xapi.command('Video Matrix Assign', {
              mode: 'replace',
              layout: 'prominent',
              output: '1',
              sourceId: '1'
             });
             xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3'
             });
            log ('Changed Video Output Prominent layout Monitor with Quad');
            break;
        case '2': // Set Monitor 1 and P60 camera
            log ('replacing Video Output 1 source 1');
            xapi.command('Video Matrix Assign', {
              mode: 'replace',
              layout: 'prominent',
              output: '1',
              sourceId: '1' // Quad
             });
           log ('adding Video Output 1 source 3'); //Adding P60
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             });
            log ('adding Video Output 1 source 3'); //Adding P60
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             }); 
             console.log('Changed Video Output Prominent layout Monitor with Quad & 2- P60'); 
            break;
        case '3': //Use Monitor 1 with Quad and P60 camera 
           log ('replacing Video Output 1 source 1');
            xapi.command('Video Matrix Assign', {
              mode: 'replace',
              layout: 'prominent',
              output: '1',
              sourceId: '1' // Quad
             });
           log ('adding Video Output 1 source 3'); //Adding P60 (1)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             });
            log ('adding Video Output 1 source 3'); //Adding P60 (2)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             }); 
           log ('adding Video Output 1 source 3'); //Adding P60 (3)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             });
            log ('adding Video Output 1 source 3'); //Adding P60 (4)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             });
           log ('adding Video Output 1 source 3'); //Adding P60 (5)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             });
            log ('adding Video Output 1 source 3'); //Adding P60 (6)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '3' // P60
             }); 
            log ('Changed Video Output Prominent layout Monitor with Quad & 6 P60');
            break;
        case '4': // Reversing case 3 to One P60 and 6 Quads 
            log ('replacing Video Output 1 source 1');
            xapi.command('Video Matrix Assign', {
              mode: 'replace',
              layout: 'prominent',
              output: '1',
              sourceId: '3' // P60
             });
           log ('adding Video Output 1 source 3'); //Adding Quad (1)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             });
            log ('adding Video Output 1 source 3'); //Adding Quad (2)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             }); 
           log ('adding Video Output 1 source 3'); //Adding Quad (3)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             });
            log ('adding Video Output 1 source 3'); //Adding Quad (4)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             });
           log ('adding Video Output 1 source 3'); //Adding Quad (5)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             });
            log ('adding Video Output 1 source 3'); //Adding Quad (6)
            xapi.command('Video Matrix Assign', {
              mode: 'add',
              output: '1',
              sourceId: '1' // Quad
             }); 
            log ('Changed Video Output Prominent layout Monitor with P60 and 6 Quads');
            console.log('Changed Video Output Prominent layout Monitor with P60 & 6 - Quad 60'); 
            break;
        default:
        }
    return;
  }        
});

// Swapping Monitor outputs 1 --> 2 and 2 --> 1
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "changed" && event.WidgetId == "sw_on_off") {
      console.log ('Video Output Change');
      switch (event.Value) {
        case 'on': // Swapping monitors
              log ('Changing Video Monitors Outputs');
             xapi.command('Video Matrix swap', {
              outputA: '1',
              outputB: '2'
             });
            log ('Changed Video Output 1 to 2');
            break;
        case 'off': // Swapping Monitors back
            log ('replacing Video Output 1 source 1');
            xapi.command('Video Matrix swap', {
              outputA: '2',
              outputB: '1'
             });
            log ('Changing back from 2 to 1');
            break;
        default:
        }
    return;
  }        
});
// Turn off the Video Compositing for the Local side
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "local_vc_off") {
      console.log ('Video Output Change');
      switch (event.Value) {
        case '1':
            log('reset to Default/Idle Screen');
            xapi.command('video selfview set', {
            mode: 'off'
            });                              
            reset_output1_2();
            unsetvalue();
            unsetvalue_local_equal ();
            unsetvalue_local_prominent ();            
            log('reset to output 1 & 2');
            console.log ('reseting to output 1 & 2');
            break;
        case '2': // Leave VC ON
            log ('Do Nothing');
            unsetvalue();
             console.log('Meet the new boss, same as the old boss!!!!'); 
             break;
        default:
        }
    return;
  }        
});

// Cleans up buttons, once touched, they will gray back out on the Touch 10 
function unsetvalue () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "local_vc_off"
    });
}
// Cleans up buttons for local screen, once touched, they will gray back out on the Touch 10 
function unsetvalue_local_equal () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "local_equal"
    });
}
function unsetvalue_local_prominent () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "local_prominent"
    });
}
// Functions to reset Monitor 1 & 2 to main camera 
function reset_output1_2 (){
  xapi.command('video matrix reset', {
            output: 1,
  });
  xapi.command('video matrix reset', {
            output: 2,
});
}

// Code written by Jerry Gavin for VC EX Demo Local Jan 2020


