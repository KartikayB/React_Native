import React from 'react'
import {View, Text, ActivityIndicator} from "react-native"


const Spinner = ({size}) =>{

    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={ size || 'large'} />
        </View>
    )
}

export default Spinner;


const styles = {
    spinnerStyle:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
}