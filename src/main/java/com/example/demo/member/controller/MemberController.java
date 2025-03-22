package com.example.demo.member.controller;

import com.example.demo.member.controller.dto.JoinRequest;
import com.example.demo.member.controller.dto.MemberDTO;
import com.example.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.hibernate.mapping.Join;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequiredArgsConstructor
public class MemberController {

    //생성자 주입
    private final MemberService memberService;


    @GetMapping("/member/join")
    public String joinForm()
    {
        return "join";
    }

    @PostMapping("/member/join")
    public String join(@ModelAttribute MemberDTO memberDTO)
    {
        System.out.println("MemberController.join");
        System.out.println("memberDTO = " + memberDTO);
        memberService.join(memberDTO);
        return "index";
    }

//    @PostMapping("/join")
//    public String join(@RequestBody JoinRequest joinRequest){
//        String result = memberService.join(joinRequest);
//
//        if("success".equalsIgnoreCase(result))
//        {
//            return "success";
//        }
//        else {
//            return "fail";
//        }
//    }
}
