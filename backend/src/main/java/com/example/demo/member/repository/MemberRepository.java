package com.example.demo.member.repository;

import com.example.demo.member.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {

    // 이메일로 회원 조회
    Optional<MemberEntity> findByMemberEmail(String memberEmail);
}