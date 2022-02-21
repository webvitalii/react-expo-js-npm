import React from 'react';
import './post-list.component.css';
import PostCard from '../post-card/post-card.component';

export default class PostList extends React.Component {
    render() {
        // console.log(this.props);
        // console.log(this.props.children);
        return (
            <section className='post-list'>
                {this.props.posts.map(post => (
                    <PostCard key={post.id} post={post}></PostCard>
                ))}
            </section>
        );
    }
  }