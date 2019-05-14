import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

class feed extends React.Component{

    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <View style={{flex:1}}>

                <View style={{height: 70, paddingTop: 30, backgroundColor: 'white', borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Feed</Text>
                </View>
                
                <View>
                    <View>
                        <Text>Time Ago</Text>
                        <Text>@LizardBwoi</Text>
                    </View>
                    <View>
                        <Image
                            source={{uri: 'https://source.unsplash.com/random/500x'+Math.floor((Math.random() * 800) + 500)}}
                            style={{resizeMode: 'cover', width: 100%, heightL: 275}}
                            />
                    </View>
                </View>

                
            </View>
        )
    }

}

export default feed;