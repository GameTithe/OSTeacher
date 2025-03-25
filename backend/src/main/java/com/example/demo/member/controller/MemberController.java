package com.example.demo.member.controller;

import com.example.demo.member.controller.dto.MemberDTO;
import com.example.demo.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController  // REST API 전용 컨트롤러
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    // 회원가입 API: React에서 POST 요청으로 JSON 데이터를 보내면, DTO로 변환되어 처리됨.
    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody MemberDTO memberDTO) {
        try {
            memberService.save(memberDTO);
            return ResponseEntity.ok("회원가입 성공!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("회원가입 실패: " + e.getMessage());
        }
    }

    // 로그인 API
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberDTO memberDTO) {
        // memberService.login(memberDTO) 같은 로그인 처리 로직을 추가하면 됨.
        // 여기서는 예시로 간단히 성공 여부만 반환
        boolean loginResult = memberService.login(memberDTO); // 서비스에서 구현
        if(loginResult){
            return ResponseEntity.ok("로그인 성공!");
        } else {
            return ResponseEntity.status(401).body("로그인 실패!");
        }
    }
}