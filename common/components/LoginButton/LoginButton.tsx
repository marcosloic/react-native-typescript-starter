import {Button} from 'react-native';
import * as React from 'react';
import {string} from 'prop-types';
import {ServicesContext} from '../../../App';
import {YoutubeService} from '../../services/youtube.service';
import {IYoutubeSearchResult} from '../../services/youtube.interface';

interface IPropsTypes {
    onResult: (results: IYoutubeSearchResult) => void;
    text: string;
}

export class LoginButton extends React.Component<IPropsTypes, {}> {
    constructor(props: IPropsTypes) {
        super(props);
    }

    public render(): React.ReactNode {
        console.log(this);
        return (
            <ServicesContext.Consumer>
                {({youtubeService}) => (
                    <Button
                        onPress={() => this.searchYoutube(youtubeService)}
                        title={this.props.text}
                        color='blue'
                    />
                )}
            </ServicesContext.Consumer>
        );
    }

    private async searchYoutube(service: YoutubeService): Promise<void> {
        try {
            const result = await service.searchVideo('football');
            const data: IYoutubeSearchResult = await result.json();
            this.props.onResult(data);
        } catch (e) {
            LoginButton.handleError(e);
        }
    }

    private static handleError(error: ExceptionInformation): void {
        console.log(error);
    }
}
