package com.example.demo.member.service;

import com.example.demo.member.controller.dto.MemberDTO;
import com.example.demo.member.entity.MemberEntity;
import com.example.demo.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    // 회원 저장 메서드
    public void save(MemberDTO memberDTO) {
        MemberEntity memberEntity = memberDTO.toEntity(); // DTO에서 Entity 변환 (또는 별도의 메서드 사용)
        memberRepository.save(memberEntity);
    }

    // 예시) 로그인 로직 (간단히 이메일 비교 등)
    public boolean login(MemberDTO memberDTO) {
        return memberRepository.findByMemberEmail(memberDTO.getMemberEmail())
                .filter(entity -> entity.getMemberPassword().equals(memberDTO.getMemberPassword()))
                .isPresent();
    }
}