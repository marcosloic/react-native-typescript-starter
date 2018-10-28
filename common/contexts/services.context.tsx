import * as React from 'react';
import {YoutubeService} from '../services/youtube.service';
import {YOUTUBE_API_KEY} from '../../secret';
import {IAPIServices} from './services.interface';

export const services: IAPIServices = {
    youtubeService: new YoutubeService(YOUTUBE_API_KEY),
};

export const ServicesContext = React.createContext(services);

export default function WithServices(serviceType: string): any {

    return (Component: any): any => {
        return class extends React.Component {
            constructor(props: any) {
                super(props);
            };

            public render() {
                const servicesProps = {
                    [serviceType]: services[serviceType]
                };
                const props = {...this.props, ...servicesProps};
                return (
                    <ServicesContext.Consumer>
                        {
                            (apiServices) => (
                                <Component {...props}/>
                            )
                        }
                    </ServicesContext.Consumer>
                );
            }
        };
    };
}
