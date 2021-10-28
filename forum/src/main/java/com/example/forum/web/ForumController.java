package com.example.forum.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ForumController {

    @GetMapping("/")
    public String home() {
        return "Hello World";
    }

}
