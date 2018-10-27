import * as React from 'react';
import {Button} from 'react-native';

interface IPropsTypes {
    onButtonPressed: () => void;
    text: string;
    color: string;
}

export class BasicButton extends React.PureComponent<IPropsTypes, {}> {
    constructor(props: IPropsTypes) {
        super(props);
    }

    public render() {
        return (
            <Button
                onPress={this.props.onButtonPressed}
                title={this.props.text}
                color={this.props.color}
            />
        );
    }
}
