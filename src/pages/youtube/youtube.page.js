import React from 'react';
import CardList from '../../components/card-list/card-list.component';
import SearchBoxBtn from '../../components/search-box-btn/search-box-btn.component';
import youtube from '../../apis/youtube';

export default class YoutubePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoList: []
        };

        // This binding is necessary to make `this` work in the callback
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    render() {
        return (
            <section className='youtube-page'>
                <h3>Youtube video search: {this.state.videoList.length} results</h3>

                <SearchBoxBtn handleClick={this.onSearchChange} />
                <CardList list={this.state.videoList} />
            </section>
        );
    }

    async onSearchChange(searchTerm) {
        const response = await youtube.get('/search', {
            params: { q: searchTerm }
        });

        const itemsPrepared = response.data.items.map((item) => {
            return {
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                imgUrl: item.snippet.thumbnails.medium.url
            };
        });

        this.setState({ videoList: itemsPrepared });
    }

  }
