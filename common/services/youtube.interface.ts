export interface IYoutubeService {
    searchVideo: (queryParam: string) => Promise<any> | null;
}

export interface IYoutubeSearchResult {
    etag: string;
    items: IYoutubeSearchResultItem[];
    kind: string;
    nextPageToken: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    }
    regionCode: string;
}

interface IYoutubeSearchResultItem {
    etag: string;
    id: {
        kind: string,
        videoId: string;
    };
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishedAt: string;
        thumbnails: {
            default: IYoutubeSearchItemThumbnail;
            medium: IYoutubeSearchItemThumbnail;
            high: IYoutubeSearchItemThumbnail;
        };
        title: string;
    }
    kind: string;
};

interface IYoutubeSearchItemThumbnail {
    url: string;
    width: number;
    height: number;
}
