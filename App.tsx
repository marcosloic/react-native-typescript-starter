import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LoginButton} from './common/LoginButton/LoginButton';

export default class App extends React.Component<{}> {
    private onPressed(): void {
        alert('pressed');
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>Test test</Text>
                <LoginButton
                    onPressed={this.onPressed}
                    text={'text'}
                />
            </View>
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
