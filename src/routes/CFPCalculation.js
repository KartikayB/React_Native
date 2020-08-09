import React from 'react'
import {View,Text, StyleSheet, Dimensions} from 'react-native'
import {Button} from "native-base"
import {firebaseApp} from '../../util/Firebase'
import "@firebase/firestore"
import {PieChart} from 'react-native-chart-kit'


const sWidth = Dimensions.get('window').width

class CFPCalculation extends React.Component{

    constructor(props){
        super(props)

        this.state={
            cfpVal: '43'
        }
    }

    
    calculateCFP()
    {
       
        return(
        <Text style={styles.cfpValText}> {this.state.cfpVal} Kg CO2 per year</Text>
        )
    }
    render(){

        const chartConfig ={
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 10, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        }
        
        
        const data = [
            {
              name: "% - Commute",
              cfpfactor: 10,
              color: "#A5D604",
              legendFontColor: "#A5D604",
              legendFontSize: 15
            },
            {
              name: "% - Food",
              cfpfactor: 10,
              color: "#86c656",
              legendFontColor: "#86c656",
              legendFontSize: 15
            },
            {
              name: "% - Electricity",
              cfpfactor: 20,
              color: "#c1d533",
              legendFontColor: "#c1d533",
              legendFontSize: 15
            },
            {
              name: "% - Flight Travel",
              cfpfactor: 60,
              color: "#46ba79",
              legendFontColor: "#46ba79",
              legendFontSize: 15
            }
          ];


        return(
            <View>
                <PieChart
                    data={data}
                    width={sWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="cfpfactor"
                    backgroundColor="transparent"
                    absolute

                />
                <Text style={styles.gText}>C-FootPrint generated, based on your activities</Text>
                <View>
                    {this.calculateCFP()}
                </View>
                
                
                <Button  rounded bordered  success style={styles.btnStyle}
                >
                    <Text style={styles.btnTxtStyle}>Ways to Reduce your C-FootPrint</Text>
                </Button>
            </View>
    
        )
    }
    
}

const styles = StyleSheet.create({
    
    gText:{
        fontSize: 16,
        fontFamily: "Arial",
        textAlign: "center",
        marginVertical: 15
    },
    cfpValText:{
        fontSize: 25,
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "#86c656",
        alignSelf: "center",
        marginVertical: 25
    },
    btnStyle: {
        margin:10, 
        justifyContent: "center",
        borderWidth: 20,
        marginVertical:40
    },
    btnTxtStyle: {
        color: "black",
        fontSize:20,
        fontWeight: "bold",
        fontFamily:"Arial"  
    }
})
export default CFPCalculation;
