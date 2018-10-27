import * as React from 'react';
import {YoutubeService} from './common/services/youtube.service';
import {YOUTUBE_API_KEY} from './secret';
import {SearchPage} from './common/features/Search/Search.page';

const services = {
    youtubeService: new YoutubeService(YOUTUBE_API_KEY),
};

export const ServicesContext = React.createContext(services);

export default class App extends React.Component<{}> {
    public render() {
        return (
            <ServicesContext.Provider value={services}>
                <ServicesContext.Consumer>
                    {
                        ({youtubeService}) => (
                            <SearchPage service={youtubeService} />
                        )
                    }
                </ServicesContext.Consumer>
            </ServicesContext.Provider>
        );
    }
};
