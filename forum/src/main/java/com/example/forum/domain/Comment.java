package com.example.forum.domain;

import javax.persistence.*;
import java.util.List;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "post_id")
    private ForumPost post;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    private Comment parentComment;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parentComment")
    private List<Comment> replies;

    private String message;

    public Comment() {}

    // Comment on post
    public Comment(User user, ForumPost post, String message) {
        this.user = user;
        this.post = post;
        this.message = message;
    }

    // Reply to comment
    public Comment(User user, Comment comment, String message) {
        this.user = user;
        this.parentComment = comment;
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public ForumPost getPost() {
        return post;
    }

    public void setPost(ForumPost post) {
        this.post = post;
    }

    public Comment getComment() {
        return parentComment;
    }

    public void setComment(Comment comment) {
        this.parentComment = comment;
    }

    public List<Comment> getReplies() {
        return replies;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", user=" + user +
                ", post=" + post +
                ", comment=" + parentComment +
                ", replies=" + replies +
                ", message='" + message + '\'' +
                '}';
    }
}
