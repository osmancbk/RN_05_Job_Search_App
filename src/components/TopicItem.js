import React from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { topicItem } from '../styles'

// color: "fb5607"
// id: 0
// name: "Java"



const TopicItem = (props) => {

  return (
    <TouchableOpacity
      style={[topicItem.container, { backgroundColor: `#${props.item.color}` }]}
      onPress={props.onSelect}
    >

      <Text style={topicItem.text}>{props.item.name}</Text>

    </TouchableOpacity>
  )
}
export { TopicItem };