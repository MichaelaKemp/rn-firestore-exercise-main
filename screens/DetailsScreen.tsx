import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = () => {

  return (
    
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Bucket List Title Here</Text>
      <Text>Description Here</Text>
      <Text>Due date: Tomorrow?</Text>
      <Text>Priority: Yes</Text>

      <Button
        title='mark completed / already done'
        color="red"
        disabled={false}
      />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 20,
    }
})