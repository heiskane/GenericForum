package com.example.forum;

import com.example.forum.domain.ForumPost;
import com.example.forum.domain.ForumPostRepository;
import com.example.forum.domain.User;
import com.example.forum.domain.UserRepository;
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
	public CommandLineRunner demo(UserRepository userRepository, ForumPostRepository forumRepository) {
		return (args) -> {
			log.info("Commandline runner test");
			User user1 = new User("admin", "test1@example.com", "ADMIN", "$2a$12$k/mfM5H1FD9pwckLeV3Hy.q3RcoN8YHVDrGAZkyJmLl5eRkTTJxmC");
			User user2 = new User("Test2", "test2@example.com", "USER", "hash_this_later");

			userRepository.save(user1);
			userRepository.save(user2);

			forumRepository.save(new ForumPost("First Post", "The best content", user1));
		};
	}

}
