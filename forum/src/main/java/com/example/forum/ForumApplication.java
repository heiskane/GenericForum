package com.example.forum;

import com.example.forum.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ForumApplication {

	private static final Logger log = LoggerFactory.getLogger(ForumApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ForumApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(
			UserRepository userRepository,
			ForumPostRepository forumRepository,
			CommentRepository commentRepository) {
		return (args) -> {
			log.info("Commandline runner test");
			User user1 = new User("admin", "test1@example.com", "ADMIN", "admin");
			User user2 = new User("guest", "test2@example.com", "GUEST", "guest");

			userRepository.save(user1);
			userRepository.save(user2);

			ForumPost post = new ForumPost("First Post", "The best content", user1);

			forumRepository.save(post);

			Comment comment1 = new Comment(
				user1, post, "Hello world"
			);

			Comment comment2 = new Comment(
					user1, post, "Something interesting"
			);

			commentRepository.save(comment1);
			commentRepository.save(comment2);

			Comment reply1 = new Comment(
					user2, comment1, "Hello Reply1"
			);

			Comment reply2 = new Comment(
					user1, reply1, "Hello Reply2"
			);

			commentRepository.save(reply1);
			commentRepository.save(reply2);

		};
	}

}
