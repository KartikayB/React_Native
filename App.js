/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// import LoginScreen from './src/routes/LoginScreen'
// import SignUpScreen from './src/routes/SignUpScreen'
// import CFPDisplayScreen from './src/routes/CFPDisplayScreen'
// import RouterComponent from './src/routes/Router';


// const App = () => {
//   return (
//     <>
//       <RouterComponent />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

import React, { Component } from 'react';
import { Router, Scene, StatusBar } from 'react-native-router-flux';
import TravelDetails from '../CFPApp/src/routes/TravelDetails';
import SurveyI from '../CFPApp/src/routes/SurveyI';
import SurveyII from '../CFPApp/src/routes/SurveyII';
import SurveyIII from '../CFPApp/src/routes/SurveyIII';
import SurveyIV from '../CFPApp/src/routes/SurveyIV';
import SurveyVI from '../CFPApp/src/routes/SurveyVI';
import SurveyVII from '../CFPApp/src/routes/SurveyVII';
import SurveyVIII from '../CFPApp/src/routes/SurveyVIII';
import SurveyIX from '../CFPApp/src/routes/SurveyIX';
import SurveyX from '../CFPApp/src/routes/SurveyX';
import SurveyXI from '../CFPApp/src/routes/SurveyXI';
import SurveyXII from '../CFPApp/src/routes/SurveyXII';
import SurveyXIII from '../CFPApp/src/routes/SurveyXIII';
import SurveyXIV from '../CFPApp/src/routes/SurveyXIV';
import SurveyXV from '../CFPApp/src/routes/SurveyXV';
import SurveyXVI from '../CFPApp/src/routes/SurveyXVI';
import SurveyXVII from '../CFPApp/src/routes/SurveyXVII';
import SurveyXVIII from '../CFPApp/src/routes/SurveyXVIII';







export default class App extends Component {
  render() {
    return(
        
        <Router hideNavBar= {true}  >
           
           <Scene key="root" hideNavBar= {true}>
            <Scene key="TravelDetails" component={TravelDetails} title="TravelDetails" hideNavBar= {true} initial={true}/>
            <Scene key="SurveyI" component={SurveyI} title="SurveyI" hideNavBar= {true} />
            {/* <Scene key="Remove" component={Remove} hideNavBar= {true} /> */}
            <Scene key="SurveyII" component={SurveyII} title="SurveyII" hideNavBar= {true} />
            <Scene key="SurveyIII" component={SurveyIII} title="SurveyIII" hideNavBar= {true} />
            <Scene key="SurveyIV" component={SurveyIV} title="SurveyIV" hideNavBar= {true} />
            <Scene key="SurveyVI" component={SurveyVI} title="SurveyVI" hideNavBar= {true} />
            <Scene key="SurveyVII" component={SurveyVII} title="SurveyVII" hideNavBar= {true} />
            <Scene key="SurveyVIII" component={SurveyVIII} title="SurveyVIII" hideNavBar= {true} />
            <Scene key="SurveyIX" component={SurveyIX} title="SurveyIX" hideNavBar= {true} />
            <Scene key="SurveyX" component={SurveyX} title="SurveyX" hideNavBar= {true} />
            <Scene key="SurveyXI" component={SurveyXI} title="SurveyXI" hideNavBar= {true} />
            <Scene key="SurveyXII" component={SurveyXII} title="SurveyXII" hideNavBar= {true} />
            <Scene key="SurveyXIII" component={SurveyXIII} title="SurveyXIII" hideNavBar= {true} />
            <Scene key="SurveyXIV" component={SurveyXIV} title="SurveyXIV" hideNavBar= {true} />
            <Scene key="SurveyXV" component={SurveyXV} title="SurveyXV" hideNavBar= {true} />
            <Scene key="SurveyXVI" component={SurveyXVI} title="SurveyXVI" hideNavBar= {true} />
            <Scene key="SurveyXVII" component={SurveyXVII} title="SurveyXVII" hideNavBar= {true}  />
            <Scene key="SurveyXVIII" component={SurveyXVIII} title="SurveyXVIII" hideNavBar= {true} />

        </Scene>
        </Router>
    )
  }
}
