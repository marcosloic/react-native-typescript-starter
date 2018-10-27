import {IYoutubeService} from './youtube.interface';

export class YoutubeService implements IYoutubeService{
    private readonly apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public searchVideo(term: string): Promise<any> | null {
        if (!term) {
            return null;
        }
        const base = `https://www.googleapis.com/youtube/v3/search?q=${term}&maxResults=25&part=snippet&key=${this.apiKey}`;
        return fetch(base);
    }

}
