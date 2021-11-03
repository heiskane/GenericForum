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

			ForumPost post1 = new ForumPost("First Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id tempus sapien. Sed sit amet lacinia sapien. Maecenas placerat risus commodo felis sodales, vel cursus justo luctus. Morbi pulvinar libero pharetra nulla dapibus, in aliquam massa eleifend. Morbi mattis diam ac urna rhoncus, quis scelerisque tortor aliquet. Sed quis fringilla purus. Aliquam dictum, massa vel pretium pretium, metus libero placerat erat, sit amet sollicitudin diam ligula non ipsum. Nunc non consectetur massa. Nullam dignissim sit amet justo tincidunt interdum. Cras rutrum eleifend nisi quis eleifend. Nunc varius felis a porta feugiat.\n" +
					"\n" +
					"Vivamus eget varius nisl. Pellentesque velit sem, auctor sed mauris id, tincidunt tempor dui. Sed vel nulla ipsum. Sed bibendum ac metus scelerisque pretium. Vestibulum nec tempor mauris. Etiam bibendum, nulla a pulvinar facilisis, sem libero sodales odio, sed accumsan justo leo vestibulum tellus. Nunc mollis, lacus et gravida pharetra, metus nulla luctus sapien, id tincidunt nunc tortor ut nisl.\n" +
					"\n" +
					"Etiam dictum leo non risus euismod porttitor. Proin eget ultrices velit, eu ornare turpis. Phasellus elementum dictum porta. Nullam id velit posuere eros sodales sodales. Aliquam nulla elit, varius id urna non, aliquam viverra mi. In hac habitasse platea dictumst. Aliquam quis scelerisque nunc, eu placerat lacus. Nunc est augue, faucibus at faucibus vel, tempus at dui. Nullam vehicula massa quis eros facilisis dictum. Nulla dolor urna, condimentum elementum velit nec, sagittis pulvinar diam. Nulla vitae eros sed justo iaculis molestie. Curabitur ornare porttitor placerat. Nunc mauris lorem, euismod nec ligula sed, volutpat fringilla velit. Duis porttitor faucibus aliquam.\n" +
					"\n" +
					"Nulla placerat ex non lacus scelerisque, sed condimentum ligula dignissim. Aliquam sagittis justo sem, vitae viverra arcu commodo id. Vestibulum congue, elit id bibendum bibendum, lorem risus fermentum odio, facilisis placerat ante erat eget metus. Sed vel risus mattis magna pretium dictum. Duis suscipit mi nisl, id scelerisque nulla faucibus sit amet. Proin faucibus aliquam orci, nec vehicula elit tempor et. In a vulputate tortor, quis egestas orci. Aliquam in ligula pretium, tincidunt mauris eleifend, volutpat odio. Fusce nec nibh mollis, mattis libero non, tincidunt arcu. Aliquam ex lectus, porta in placerat sed, maximus in mi. Cras id lacus odio. Pellentesque molestie hendrerit magna, vel eleifend metus gravida ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur lacus arcu, hendrerit sollicitudin nibh ut, eleifend iaculis mauris. In fermentum feugiat ligula, sed cursus nulla lobortis vitae. Suspendisse dui ligula, feugiat vel dolor vitae, fermentum hendrerit purus.\n" +
					"\n" +
					"Vivamus velit sem, euismod sed leo id, placerat rhoncus est. Sed et sollicitudin nisl. Phasellus in est consequat, rutrum ligula eu, faucibus nibh. Vivamus rhoncus augue eget fringilla fermentum. Donec vitae est eleifend, auctor ante id, hendrerit lorem. Proin facilisis pellentesque ex, at lacinia est. Integer tristique, erat eget tempus ullamcorper, tortor arcu porttitor sem, ornare blandit metus sapien vel lorem. Sed dapibus libero facilisis ligula venenatis mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur placerat, velit ac dapibus pretium, ante dui tempor velit, ut sodales justo sem sodales purus.", user1);

			ForumPost post2 = new ForumPost("Second Post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id tempus sapien. Sed sit amet lacinia sapien. Maecenas placerat risus commodo felis sodales, vel cursus justo luctus. Morbi pulvinar libero pharetra nulla dapibus, in aliquam massa eleifend. Morbi mattis diam ac urna rhoncus, quis scelerisque tortor aliquet. Sed quis fringilla purus. Aliquam dictum, massa vel pretium pretium, metus libero placerat erat, sit amet sollicitudin diam ligula non ipsum. Nunc non consectetur massa. Nullam dignissim sit amet justo tincidunt interdum. Cras rutrum eleifend nisi quis eleifend. Nunc varius felis a porta feugiat.\n" +
					"\n" +
					"Vivamus eget varius nisl. Pellentesque velit sem, auctor sed mauris id, tincidunt tempor dui. Sed vel nulla ipsum. Sed bibendum ac metus scelerisque pretium. Vestibulum nec tempor mauris. Etiam bibendum, nulla a pulvinar facilisis, sem libero sodales odio, sed accumsan justo leo vestibulum tellus. Nunc mollis, lacus et gravida pharetra, metus nulla luctus sapien, id tincidunt nunc tortor ut nisl.\n" +
					"\n" +
					"Etiam dictum leo non risus euismod porttitor. Proin eget ultrices velit, eu ornare turpis. Phasellus elementum dictum porta. Nullam id velit posuere eros sodales sodales. Aliquam nulla elit, varius id urna non, aliquam viverra mi. In hac habitasse platea dictumst. Aliquam quis scelerisque nunc, eu placerat lacus. Nunc est augue, faucibus at faucibus vel, tempus at dui. Nullam vehicula massa quis eros facilisis dictum. Nulla dolor urna, condimentum elementum velit nec, sagittis pulvinar diam. Nulla vitae eros sed justo iaculis molestie. Curabitur ornare porttitor placerat. Nunc mauris lorem, euismod nec ligula sed, volutpat fringilla velit. Duis porttitor faucibus aliquam.\n" +
					"\n" +
					"Nulla placerat ex non lacus scelerisque, sed condimentum ligula dignissim. Aliquam sagittis justo sem, vitae viverra arcu commodo id. Vestibulum congue, elit id bibendum bibendum, lorem risus fermentum odio, facilisis placerat ante erat eget metus. Sed vel risus mattis magna pretium dictum. Duis suscipit mi nisl, id scelerisque nulla faucibus sit amet. Proin faucibus aliquam orci, nec vehicula elit tempor et. In a vulputate tortor, quis egestas orci. Aliquam in ligula pretium, tincidunt mauris eleifend, volutpat odio. Fusce nec nibh mollis, mattis libero non, tincidunt arcu. Aliquam ex lectus, porta in placerat sed, maximus in mi. Cras id lacus odio. Pellentesque molestie hendrerit magna, vel eleifend metus gravida ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur lacus arcu, hendrerit sollicitudin nibh ut, eleifend iaculis mauris. In fermentum feugiat ligula, sed cursus nulla lobortis vitae. Suspendisse dui ligula, feugiat vel dolor vitae, fermentum hendrerit purus.\n" +
					"\n" +
					"Vivamus velit sem, euismod sed leo id, placerat rhoncus est. Sed et sollicitudin nisl. Phasellus in est consequat, rutrum ligula eu, faucibus nibh. Vivamus rhoncus augue eget fringilla fermentum. Donec vitae est eleifend, auctor ante id, hendrerit lorem. Proin facilisis pellentesque ex, at lacinia est. Integer tristique, erat eget tempus ullamcorper, tortor arcu porttitor sem, ornare blandit metus sapien vel lorem. Sed dapibus libero facilisis ligula venenatis mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur placerat, velit ac dapibus pretium, ante dui tempor velit, ut sodales justo sem sodales purus.", user1);


			forumRepository.save(post1);
			forumRepository.save(post2);

			Comment comment1 = new Comment(
					user1, post1, "Hello world"
			);

			Comment comment2 = new Comment(
					user1, post1, "Something interesting"
			);

			commentRepository.save(comment1);
			commentRepository.save(comment2);

			Comment reply1 = new Comment(
					user2, comment1, "Hello Reply1"
			);

			Comment reply2 = new Comment(
					user1, reply1, "Hello Reply2"
			);

			Comment reply3 = new Comment(
					user2, comment1, "Another reply to comment"
			);

			commentRepository.save(reply1);
			commentRepository.save(reply2);
			commentRepository.save(reply3);

		};
	}

}
