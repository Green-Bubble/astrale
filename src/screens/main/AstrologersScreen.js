import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { BlurView } from 'expo-blur';

const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

function AstrologersScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>adiooooooooooo adioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadioooooooooooadiooooooooooo</Text>

                {/* Adjust the tint and intensity */}
                <BlurView intensity={100} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <Text>Hello! I am bluring contents underneath</Text>
                </BlurView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blurredImage: {
        width: 192,
        height: 192,
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AstrologersScreen;