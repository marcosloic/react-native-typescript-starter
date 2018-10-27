import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoginButton} from './common/components/LoginButton/LoginButton';
import {YoutubeService} from './common/services/youtube.service';
import {YOUTUBE_API_KEY} from './secret';

const services = {
    youtubeService: new YoutubeService(YOUTUBE_API_KEY),
};

export const ServicesContext = React.createContext(services);

export default class App extends React.Component<{}> {
    private onResult(results: any): void {
        console.log(results);
    }
    public render() {
        return (
            <ServicesContext.Provider value={services}>
                <View style={styles.container}>
                    <Text>Test test</Text>
                    <LoginButton
                        text={'Search youtube'}
                        onResult={this.onResult}
                    />
                </View>
            </ServicesContext.Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
