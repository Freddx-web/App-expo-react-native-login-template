import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function TitleH1(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color: "#000"
  },
})
