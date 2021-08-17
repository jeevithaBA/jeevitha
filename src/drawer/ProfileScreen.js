import React, {Component} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {CustomHeader} from '../index'

export class ProfileScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Profile" navigation={this.props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Profile Screen!</Text>
            </View>
            </SafeAreaView>
        );
    }
}
export default ProfileScreen