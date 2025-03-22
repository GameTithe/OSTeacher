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

    public void join(MemberDTO memberDTO)
    {
        // 1. dto to entity
        // repository의 join 호출, 반드시 entity객체로 넘긴다

        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);


    }
}
