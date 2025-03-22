package com.example.demo.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/OS")
    public String index() {
        return "index"; // templates 폴더에서 index.html을 찾아간다.
    }

}
