import React from 'react'
import {View, Text, Image, TouchableHighlight} from 'react-native'

export default ({color,text,text2,img,someFunction,id,email})=>(
    
    <TouchableHighlight onPress={someFunction(text)} style={{ flexDirection: 'row', width:'90%',height:'70%'}}>
        <View style={{flex:1}}>
            <View style={{ flexDirection: 'column', flex: 6 , backgroundColor: 'white'}} >
                <View style={{flex: 5, marginTop: 20, marginRight: 20, marginLeft:20, marginBottom: 10}}>
                    <Image style={{ width:'100%',height:'100%', resizeMode:'contain', borderRadius: 50}} 
                    source={img}></Image>
                </View>
                <View style={{flex: 1, marginRight: 20, marginLeft:20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 24}}>{text} {text2}</Text>
                </View>
                <View style={{flex: 1, marginRight: 20, marginLeft:20, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 18}}>
                    <Text style={{fontWeight: 'bold'}}>ID:</Text> {id} 
                    <Text style={{fontWeight: 'bold'}}> Email:</Text> {email}</Text>
                </View>
            </View>
        </View>
    </TouchableHighlight>
    
)