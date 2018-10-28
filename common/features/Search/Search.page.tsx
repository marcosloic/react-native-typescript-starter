import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';
import {BasicButton} from '../../components/BasicButton/BasicButton';
import {COLOURS} from '../../styles';
import {IYoutubeSearchResult, IYoutubeSearchResultItem, IYoutubeService} from '../../services/youtube.interface';
import WithServices from '../../contexts/services.context';

interface IPropTypes {
    youtubeService: IYoutubeService;
}

interface IState {
    textValue: string;
    inputBackgroundColor: string;
    resultList?: IYoutubeSearchResultItem[];
}

@WithServices('youtubeService')
export class SearchPage extends React.Component<IPropTypes, IState> {

    constructor(props: IPropTypes) {
        super(props);
        this.state = {
            textValue: '',
            inputBackgroundColor: COLOURS.PALE_WHITE,
        };
    }

    public render() {
        const inputStyle = Object.assign(
            {},
            styles.textInput,
            {
                backgroundColor: this.state.inputBackgroundColor
            });
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>
                        Youtube service search
                    </Text>

                    <Text style={styles.bodyText}>
                        Type a keyword to search on youtube
                    </Text>

                    <TextInput
                        caretHidden={true}
                        onFocus={this.onInputFocus.bind(this)}
                        style={inputStyle}
                        onChangeText={(text) => this.onTextChanged(text)}
                        value={this.state.textValue}
                    />

                    {this.renderButton()}

                    {this.renderResultText()}

                    {this.renderResultList()}
                </ScrollView>
            </SafeAreaView>
        );
    }

    private renderResultText() {
        if (this.state.resultList && this.state.resultList.length) {
            return (
                <Text style={styles.bodyText}>
                    {this.state.resultList.length} items found for the term {this.state.textValue}
                </Text>
            );
        }
        return null;
    }

    private renderResultList() {
        if (!this.state.resultList || !this.state.resultList.length) {
            return null;
        }
        return this.state.resultList.map(result => (
            <Text style={styles.bodyText} key={result.id.videoId}>
                {result.snippet.title}
            </Text>
        ));
    }

    private renderButton() {
        if (this.state.textValue.length < 4) {
            return;
        }
        return (
            <BasicButton
                onButtonPressed={this.onSubmit.bind(this)}
                text={'Submit'}
                color={COLOURS.SALMON}
            />
        );
    }

    private onInputFocus() {
        this.setState({inputBackgroundColor: COLOURS.PLUM});
    }

    private onTextChanged(text: string) {
        this.setState({textValue: text});
    }

    private async onSubmit() {
        const {youtubeService} = this.props;

        if (this.state.textValue.length > 4) {
            try {
                const result = await youtubeService.searchVideo(this.state.textValue);
                const data: IYoutubeSearchResult = await result.json();
                this.setState({resultList: data.items});
            } catch (e) {

            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.PLUM,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: COLOURS.PALE_WHITE,
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
        marginTop: 30,
        marginBottom: 10,
    },
    bodyText: {
        color: COLOURS.BRIGHT_RED,
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
    textInput: {
        height: 30,
        width: 180,
        borderColor: COLOURS.PALE_WHITE,
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
        fontSize: 18,
        color: COLOURS.PALE_WHITE,
    }
});
