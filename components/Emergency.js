import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Emergency = () => {
  return (
    <View style={styles.container}>
      <View style={style.emergency}>
        <Text style={style.text}>What to Do if you are sick?</Text>
        <View style={style.call}>
          <TouchableOpacity onPress={() => {
            Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cdx-in-action.html')
              .catch(err => console.log('Error', err))

          }}>
            <Ionicons name="call" size={30} color='white'></Ionicons>
          </TouchableOpacity>
          <Text style={style.callText}>call 911 immediately if you are having an medical emergency</Text>
        </View>
      </View>
      <View style={{ marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: '700' }}>Resources</Text>
        <View style={{ backgroundColor: 'white', width: 200, height: 3 }}></View>
      </View>

      <View style={style.resources}>

        <View style={[style.card, { borderLeftColor: 'lightgreen', borderLeftWidth: 18 }]}>
          <Text style={style.cardText}>CDC in Action</Text>
          <TouchableOpacity onPress={() => {
            Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cdx-in-action.html')
              .catch(err => console.log('Error', err))

          }}><Ionicons name="arrow-forward" size={30} color='white'></Ionicons></TouchableOpacity>
        </View>

        <View style={[style.card, { borderLeftColor: 'lightgreen', borderLeftWidth: 18 }]}>
          <Text style={style.cardText}>Communication Resources</Text>

          <TouchableOpacity onPress={() => {
            Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/communication/index.html')
              .catch(err => console.log('Error', err))

          }}><Ionicons name="arrow-forward" size={30} color='white'></Ionicons></TouchableOpacity>
        </View>

        <View style={[style.card, { borderLeftColor: 'lightgreen', borderLeftWidth: 18 }]}>
          <Text style={style.cardText}>Global COVID-19</Text>

          <TouchableOpacity onPress={() => {
            Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html')
              .catch(err => console.log('Error', err))

          }}><Ionicons name="arrow-forward" size={30} color='white'></Ionicons></TouchableOpacity>
        </View>

        <View style={[style.card, { borderLeftColor: 'lightgreen', borderLeftWidth: 18 }]}>
          <Text style={style.cardText}>Guidance for COVID-19</Text>

          <TouchableOpacity onPress={() => {
            Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/lab/index.html')
              .catch(err => console.log('Error', err))

          }}><Ionicons name="arrow-forward" size={30} color='white'></Ionicons></TouchableOpacity>
        </View>

        <View style={[style.card, { borderLeftColor: 'lightgreen', borderLeftWidth: 18 }]}>
          <Text style={style.cardText}>Laboratories</Text>

          <TouchableOpacity onPress={() => {
            Linking
              .openURL('https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/cdx-in-action.html')
              .catch(err => console.log('Error', err))

          }}><Ionicons name="arrow-forward" size={30} color='white'></Ionicons></TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Emergency

const style = StyleSheet.create({
  emergency: {
    backgroundColor: '#3E4F7A',
    marginTop: 60,
    height: 170,
    borderRadius: 15,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    paddingTop: 20,
  },
  call: {
    backgroundColor: 'brown',
    width: '100%',
    borderRadius: 15,
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 18,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  callText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  },
  cardText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600'
  },
  card: {
    backgroundColor: '#3E4F7A',
    marginVertical: 10,
    height: 65,
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
})