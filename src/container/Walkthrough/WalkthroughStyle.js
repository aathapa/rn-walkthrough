import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    walkthroughContainer: {
        backgroundColor: '#fff',
        flex: 1
    },
    pageIndicatorContainer: {
        flex:2,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    indicatorStyle: {
        height: 10,
        width:10,
        borderColor: '#000',
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginLeft: 5
    },
    contentSectionContainer: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSectionContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3498db',
    },
    skipContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        borderWidth: 1,
        borderColor: '#fff'
    },
    nextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonText: {
        color: '#fff'
    }
})