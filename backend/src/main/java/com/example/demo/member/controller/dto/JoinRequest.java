package com.example.demo.member.controller.dto;

import lombok.Data;

// 회원가입 요청 전용 DTO
@Data
public class JoinRequest {
    private String Id;

    private String name;

    private String phoneNumber;
}
