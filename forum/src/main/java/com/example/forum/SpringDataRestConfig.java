package com.example.forum;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Component
public class SpringDataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(
            RepositoryRestConfiguration config, CorsRegistry cors) {
        // For whatever reason spring-data-rest requires its own cors configuration
        cors
                .addMapping("/**")
                .allowedMethods("POST", "PUT", "GET",  "DELETE", "OPTIONS")
                .allowedOrigins("http://localhost:3000")
                .allowCredentials(true).maxAge(3600);
    }
}
