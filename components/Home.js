import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {

    const [countryImg, setCountryImg] = useState();
    const [data, setData] = useState();
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('Global');
    const [stats, setStats] = useState({});


    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        let getData = await fetch('https://api.covid19api.com/summary')
        let res = await getData.json();
        setData(res);
        setStats({
            ActiveCases: res.Global.TotalConfirmed,
            NewCases: res.Global.NewConfirmed,
            Deaths: res.Global.NewDeaths,
            Recovered: res.Global.NewRecovered,
        })
        setCountry('Global')
    }


    function showResult() {
        data.Countries.map((item, index) => {
            const { Country, CountryCode } = item;
            if (search == Country) {
                setStats({
                    ActiveCases: item.TotalConfirmed,
                    NewCases: item.NewConfirmed,
                    Deaths: item.NewDeaths,
                    Recovered: item.NewRecovered,
                })
                setCountry(search)
                setCountryImg(CountryCode.toLowerCase());
            }
        })
        Keyboard.dismiss()
        setSearch('')
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Search Country...'
                        placeholderTextColor='lightgrey'
                        value={search}
                        onChangeText={(text) => {
                            setSearch(text);
                        }}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={() => showResult()}>
                        <Ionicons name="search" size={24}></Ionicons>
                    </TouchableOpacity>
                </View>

                <View style={styles.headingContainer}>
                    <View style={styles.headings}>
                        <Text style={styles.headingText}>Stay Home</Text>
                        <Text style={styles.headingText}>Stay Safe</Text>
                    </View>
                    <Image style={styles.headingImage} source={require('../assets/dose1.png')}></Image>
                </View>

                <View style={styles.divider}></View>

                <View>
                    <View style={[styles.countryHeading, { flexDirection: 'row' }]}>
                        <Image style={{ width: 20, height: 20, marginRight: 10, borderRadius: 5 }}
                            source={country == 'Global' ? require('../assets/global.png') : { uri: `https://countryflagsapi.com/png/${countryImg}` }} />
                        <Text style={styles.countryName} > {country}</Text>
                    </View>

                    <View style={styles.cards}>

                        <View style={[styles.card, { borderLeftColor: 'yellow' }]}>
                            <Text style={styles.cardText}>Active Cases</Text>
                            <Text style={[styles.text, { color: 'yellow' }]}>{stats.ActiveCases}</Text>
                        </View>

                        <View style={[styles.card, { borderLeftColor: 'orange' }]}>
                            <Text style={styles.cardText}>New Cases</Text>
                            <Text style={[styles.text, { color: 'orange' }]}>{stats.NewCases}</Text>
                        </View>

                        <View style={[styles.card, { borderLeftColor: 'red' }]}>
                            <Text style={styles.cardText}>Deaths</Text>
                            <Text style={[styles.text, { color: 'red' }]}>{stats.Deaths}</Text>
                        </View>

                        <View style={[styles.card, { borderLeftColor: 'lightgreen' }]}>
                            <Text style={styles.cardText}>Recovered</Text>
                            <Text style={[styles.text, { color: 'lightgreen' }]}>{stats.Recovered}</Text>
                        </View>
                    </View>
                </View>
                <Image style={styles.preventionImage} source={require('../assets/prevention.png')}></Image>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Home

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#160e59'
    },
    searchContainer: {
        flexDirection: 'row',
        marginTop: 50
    },
    input: {
        backgroundColor: "#3E4F7A",
        height: 50,
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 18,
        width: '80%',
        marginRight: 10,
        color: 'lightgrey',
    },
    searchButton: {
        backgroundColor: "#3E4F7A",
        borderRadius: 15,
        paddingTop: 12,
        width: 50,
        height: 50,
        alignItems: 'center',
    },
    headingContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headings: {},
    headingText: {
        color: 'white',
        fontSize: 35,
        fontWeight: '700'
    },
    headingImage: {
        width: 150,
        height: 110,
        borderRadius: 15,
    },
    divider: {
        width: '100%',
        backgroundColor: '#3E4F7A',
        height: 3,
        marginTop: 15
    },

    countryHeading: {
        backgroundColor: '#3E4F7A',
        marginTop: 10,
        alignItems: 'center',
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        flexdirection: 'row',
    },
    countryName: {
        fontSize: 25,
        color: 'white',
        fontWeight: '700',
    },

    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    },
    card: {
        backgroundColor: '#3E4F7A',
        width: 178,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
        padding: 10,
        borderLeftWidth: 15,
        borderLeftColor: 'white'
    },
    cardText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    text: {
        fontSize: 23,
        fontWeight: '700',
        marginTop: 20
    },
    preventionImage: {
        width: '100%',
        height: 190,
        borderRadius: 15,
        // marginTop:5,
    }
})