import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import {baseurl} from '../Constants';

export default function RedeemQrCode() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isValid, setisValid] = useState(false);



    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async({ type, data }) => {
        setScanned(true);

        var output = JSON.parse(data)

        var redeemUrl = baseurl + '/api/farm-field-tickets/' + output.id + '/redeem'

        var getFarmFieldUrl = baseurl+'/api/farm-fields/' + output.farmFieldId

        const postTicketRequest = axios.post(redeemUrl, output.id,
            {headers:
                    {
                        'Content-Type' : 'application/json'
                    }
            });

        const getFarmFieldNameRequest = axios.get(getFarmFieldUrl);


        axios.all([postTicketRequest, getFarmFieldNameRequest]).then(axios.spread((...responses) => {
            const postTicketResponse = responses[0]
            const getFarmFieldNameResponse = responses[1]

            if(postTicketResponse.status === 200){
                alert(
                    ' Field: ' + getFarmFieldNameResponse.data.name + '\n' +
                    ' Small Buckets: ' + output.smallBucketQty +'\n' +
                    ' Medium Buckets:' + output.mediumBucketQty + '\n ' +
                    'Large Buckets: ' + output.largeBucketQty)
            }
            else if (postTicketResponse.status === 400){
                alert('Ticket has already been redeemed or does not exist!')
            }

            if(getFarmFieldNameResponse.status === 400){
                alert('Ticket has already been redeemed or does not exist!')
            }
        })).catch(errors => {
            alert('Ticket has already been redeemed or does not exist!')
        })
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Another Ticket'} onPress={() => setScanned(false)} />}
        </View>
    );
}