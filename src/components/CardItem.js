import React from 'react';

import {View} from 'react-native';


const CardItem = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    )
}

const styles={
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderCOlor: '#ddd',
        position: 'relative'
    }
}


export default CardItem;