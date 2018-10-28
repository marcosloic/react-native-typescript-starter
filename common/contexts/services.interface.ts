import {YoutubeService} from '../services/youtube.service';

export interface IAPIServices {
    [key: string]: YoutubeService;
}
