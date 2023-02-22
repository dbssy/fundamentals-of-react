import React from 'react';

import { Container } from './styles';

import posts from './posts';

import Post from './Post';

export default function PostsList() {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  );
}
