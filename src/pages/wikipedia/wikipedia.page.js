import React from 'react';
import CardList from '../../components/card-list/card-list.component';
import SearchBoxBtn from '../../components/search-box-btn/search-box-btn.component';
import wikipediaApi from '../../apis/wikipedia.api';

export default class WikipediaPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemList: []
        };

        // This binding is necessary to make `this` work in the callback
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    render() {
        return (
            <section className='wikipedia-page'>
                <h3>Wikipedia search: {this.state.itemList.length} results</h3>

                <SearchBoxBtn handleClick={this.onSearchChange} />
                <CardList list={this.state.itemList} />
            </section>
        );
    }

    async onSearchChange(searchTerm) {
        const response = await wikipediaApi.get('', {
            params: { srsearch: searchTerm }
        });

        const itemsPrepared = response.data?.query?.search?.map((item) => {
            return {
                id: item?.pageid,
                title: item?.title,
                // strip HTML tags; Alt version: replace(/(<([^>]+)>)/gi, '')
                description: item?.snippet.replace(/<\/?[^>]+(>|$)/g, '')
            };
        });

        this.setState({ itemList: itemsPrepared });
    }

  }
