import * as React from 'react';
import {SearchPage} from './common/features/Search/Search.page';
import {services, ServicesContext} from './common/contexts/services.context';


export default class App extends React.Component<{}> {
    public render() {
        return (
            <ServicesContext.Provider value={services}>
                <SearchPage />
            </ServicesContext.Provider>
        );
    }
};
