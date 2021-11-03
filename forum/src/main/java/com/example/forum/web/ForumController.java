package com.example.forum.web;

import com.example.forum.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.util.Map;
import java.util.Optional;

@RestController
public class ForumController {

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    ForumPostRepository forumPostRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String home() {
        return "Hello World";
    }

    /*
    @GetMapping("/api/forumPosts/{post_id}/comments")
    public Iterable<Comment> getComments(@PathVariable Long post_id) {
        return commentRepository.findAll();
    };
    */

    @PostMapping("/comment/{post_id}")
    public Comment commentOnPost(
            @PathVariable Long post_id,
            @RequestBody Map<String, String> message,
            Principal principal
    ) {

        // https://codeflex.co/java-optional-no-more-nullpointerexception/
        ForumPost post = forumPostRepository.findById(post_id).orElseThrow(
                () -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND
                )
        );

        User user = userRepository.findByName(principal.getName());

        return commentRepository.save(
                new Comment(user, post, message.get("message"))
        );
    };
}
