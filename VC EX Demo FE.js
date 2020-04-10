const xapi = require('xapi');

function log(entry) {
    console.log(entry);
}

log ('VC EX Demo Far End Side');

// Listen to clicks on buttons: the buttons can either be pressed or released
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "fr_equal") {
      console.log ('Video FE Equal Change');
      unsetvalue_fr_pip(); // grays out PIP & Equal Buttons
      unsetvalue_fr_prom(); //Grays out the Layout buttons
      xapi.command('cameras speakertrack activate');
      console.log ('speakertrack Activated Quad!!!');
      switch (event.Value) {
        case '1':  // Connector 1 only
              log ('Changing Layout to Conn 1'); // using the whole string
              xapi.command('Video Input SetMainVideoSource', {
                ConnectorId: [1]  // the max connectorid's is up to 4. originally connectorid: ['1']
            });
            console.log ('Equal layout Quad'); 
             break;
        case '2':      // P60, originally connectorid: ['3']
             log ('Changing Layout Conn 3'); // using connectorid's 
             xapi.command('video input setmainvideosource', {
               Connectorid: [3], 
             });
            console.log ('Equal layout P60');
            break;
        case '3':      // Quad & P60 CAM
             log ('Changing Layout Conn 1 & Conn 3'); // using connectorid's, originally connectorid: ['1','3']
             xapi.command('video input setmainvideosource', {
               connectorid: [1,3],
             });
            console.log ('Equal Layout Quad & P60');
            break;  
        case '4':  // Three Inputs: Quad & P60 and P60 originally connectorid: ['1','3','3']
            log('Changing Conn 1 & Conn 3 X 2');
            xapi.command('video input setmainvideosource', {
            connectorid: [1,3,3],
            layout: 'equal'
            });
            console.log ('Equal Layout Quad & 2 P60');
            break;
        case '5':  // Four Inputs Quad, P60, P60 and Quad, originally connectorid: ['1','3','3','1']
            log('Changing Conn 1 & Conn 3 no spktrk');
            xapi.command('video input setmainvideosource', {
            connectorid: [1,3,3,1], // 
            layout: 'equal'
            });
            console.log ('Equal Layout 4 Cams 2- Quad & 2- P60');
            break;    
        default:
        }
    return;
  }        
});
// PIP Layout
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "fr_pip") {
      console.log ('Video FE PIP Change');
      xapi.command('cameras speakertrack activate');
      console.log ('speakertrack Activated Quad!!!');
      unsetvalue_fr_equal(); //Grays out the Layout buttons
      unsetvalue_fr_prom(); //Grays out the Layout buttons
      switch (event.Value) {
        case '1':  // PIP Auto with Quad & P60
              log ('PIP with Quad & PC');
              xapi.command('Video Input SetMainVideoSource', {
                ConnectorId: [1,3],                
                layout: 'pip',
                PIPSize:'auto',
            });
            console.log ('Quad & P60 = PIP Auto');
             break;
        case '2':      // PIP with P60 and Quad
             log ('PIP Auto with P60 and Quad'); 
             xapi.command('video input setmainvideosource', {
               connectorid: [3,1],
               layout: 'pip',
               PIPSize: 'auto'
             });
            console.log ('P60 & Quad = PIP Auto');
            break;
        case '3':      // PIP Large with Quad & P60 CAM
             log ('PIP Large with Quad & P60');
             xapi.command('video input setmainvideosource', {
               connectorid: [1,3],
               layout: 'pip',
               PIPSize: 'Large'
             });
             console.log ('Quad & P60 Cam = PIP Large');
            break;  
        case '4':  // PIP Large with P60 Cam & Quad
            log('PIP with 2nd Cam & Quad');
            xapi.command('video input setmainvideosource', {
            connectorid: [3,1],
            layout: 'pip',
            PIPSize: 'Large'
            });
             console.log ('P60 & Quad  = PIP Large');
            break;
        case '5':  // PIP Auto UL with Quad & P60
              log ('PIP with Quad & P60');
              xapi.command('Video Input SetMainVideoSource', {
                ConnectorId: [1,3],
                layout: 'pip',
                PIPSize:'auto',
                PIPPosition:'UpperLeft' //UpperRight, LowerLeft, LowerRight (Defualt)
            });
            console.log ('Quad & PC = PIP Auto UL ');
             break;
        case '6':      // PIP Large UL with P60 and Quad
             log ('PIP Large UL with P60 and Quad'); 
             xapi.command('video input setmainvideosource', {
               connectorid: [3,1],
               layout: 'pip',
               PIPSize: 'large',
               PIPPosition: 'Upperright'
             });
            console.log ('P60 & Quad = PIP large UL');
            break;
        default:
        }
    return;
  }        
});
// Prominent Layout
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "fr_prom") {
      console.log ('Video FE Change');
      unsetvalue_fr_equal(); //Grays out the Layout buttons
      unsetvalue_fr_pip(); //Grays out the Layout buttons
      switch (event.Value) {
        case '1':  // Prominent with Quad & P60
              log ('Prominent with Quad & P60');
              xapi.command('Video Input SetMainVideoSource', {
                ConnectorId: [1,3],
                layout: 'prominent' 
            });
            console.log ('Quad & P60 = Prominent');
             break;
        case '2':      // Prominent with P60 and Quad
             log ('Prominent with P60 and Quad'); 
             xapi.command('video input setmainvideosource', {
               connectorid: [3,1],
               layout: 'prominent'
             });
            console.log ('P60 & Quad = Prominent');
            break;
        default:
        }
    return;
  }        
});
// Turn off the Video Compositing to the Far side
xapi.event.on('UserInterface Extensions Widget Action', (event) => {
  if (event.Type == "released" && event.WidgetId == "fr_vc_off") {
      console.log ('Video Output Change');
      switch (event.Value) {
        case '1': // Turn off VC and reset all buttons on the Touch 10, except for default Layout Equal Quad.  
            log('reset to Default/Idle Screen');
            setmainvideosource(); 
            unsetvalue_fr_equal(); 
            unsetvalue_fr_pip();
            unsetvalue_fr_prom();
            unsetvalue_fr_vc_off();
            setvalue2quad();
            log('reset to output 1');
            console.log ('reseting to output 1');
            break;
        case '2': // Leave VC ON
            log ('Do Nothing');
            unsetvalue_fr_vc_off();
             console.log('Meet the new boss, same as the old boss!!!!'); 
             break;
        default:
        }
    return;
  }        
});

// Cleans up buttons, once touched, they will gray back out on the Touch 10 
function unsetvalue_fr_vc_off () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "fr_vc_off"
    });
}
// gray out the Layout Buttons
function unsetvalue_fr_equal () {
   xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "fr_prom"
    });
}
// gray out the PIP & Equal Buttons
function unsetvalue_fr_pip () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "fr_pip"
    });
}
function unsetvalue_fr_prom () {
  xapi.command ('userinterface extensions widget unsetvalue', {
    widgetId: "fr_equal"
    });
}
// Highlight the Quad Button in Layout section
function setvalue2quad(){
  xapi.command ('userinterface extensions widget setvalue', {
    widgetId: "fr_equal",
    value: '1'
   });
}

// Function to set the main input source = Quad
function setmainvideosource (){
  xapi.command('video input setmainvideosource', {
            connectorid: 1 // 
  });
}

// Code written by Jerry Gavin for VC EX Demo FE Jan 2020
