package com.example.forum.domain;

import org.springframework.data.repository.CrudRepository;

public interface ForumPostRepository extends CrudRepository<ForumPost, Long> {
    ForumPost findByTitle(String title);
}
