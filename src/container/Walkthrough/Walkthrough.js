import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

import styles from './WalkthroughStyle';

export default class Walkthrough extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeContent: 1
        }
    }

    onPressButton() {
        if(this.state.activeContent <=  2 ){
            this.setState({activeContent: this.state.activeContent + 1})
        }
        else {
            this.props.navigation.navigate('MainScreen')
        }
        
    }

    renderContent() {
        switch(this.state.activeContent){
            case 1: 
                return(
                    <View>
                        <Text>Welcome to our product</Text>
                    </View>
                );
            case 2: 
                return(
                    <View>
                        <Text style={{textAlign: 'center'}}>Manage you task quickly and easily from wherever you are!! </Text>
                    </View>
                );
            case 3: 
                return(
                    <View>
                        <Text>Get Started</Text>
                    </View>
                );
        }
    }   

    render() {
        const firstSelect = this.state.activeContent === 1? {backgroundColor: '#2980b9'}: {}
        const secondSelect = this.state.activeContent === 2? {backgroundColor: '#2980b9'}: {}
        const thirdSelect = this.state.activeContent === 3? {backgroundColor: '#2980b9'}: {}
        return(
            <View style={styles.walkthroughContainer}>
                <View style={styles.pageIndicatorContainer}>
                    <View style={[styles.indicatorStyle,firstSelect]} />
                    <View style={[styles.indicatorStyle,secondSelect]} />
                    <View style={[styles.indicatorStyle,thirdSelect]} />
                </View>
                <View style={styles.contentSectionContainer}>
                    {this.renderContent()}
                </View>
                <View style={styles.buttonSectionContainer}>
                    <TouchableOpacity 
                        style={styles.skipContainer}
                        onPress={()=> this.props.navigation.navigate('MainScreen')}
                    >
                        <Text style={styles.buttonText}>SKIP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.nextContainer}
                        onPress={()=> this.onPressButton()}
                    >
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}