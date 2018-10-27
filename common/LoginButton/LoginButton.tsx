import {Button} from 'react-native';
import * as React from 'react';
import {string} from 'prop-types';

interface IPropsTypes {
    onPressed: () => void;
    text: string;
}

export class LoginButton extends React.Component<IPropsTypes, {}> {
    constructor(props: IPropsTypes) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <Button
                onPress={this.props.onPressed}
                title={this.props.text}
                color='green'
                accessibilityLabel='Learn more about this purple button'
            />
        );
    }
}
