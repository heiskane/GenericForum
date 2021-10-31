package com.example.forum.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface ForumPostRepository extends CrudRepository<ForumPost, Long> {
    ForumPost findByTitle(String title);
}
