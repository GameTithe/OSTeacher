package com.example.demo.member.entity;

import com.example.demo.member.controller.dto.MemberDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*; // 여러 개 개별로 import 함

@Entity
@Setter
@Getter
@Table(name = "member_table")
public class MemberEntity {
    @Id // pk
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String memberEmail;

    @Column
    private String memberPassword;

    @Column
    private String memberName;

    @Column
    private String memberSkillStack; // 자료구조 추가 필요

    public static MemberEntity toMemberEntity(MemberDTO memberDTO)
    {
        MemberEntity memberEntity=  new MemberEntity();
        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
        memberEntity.setMemberName(memberDTO.getMemberName());
        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
        memberEntity.setMemberSkillStack((memberDTO.getMemberSkillStack()));

        return memberEntity;
    }
}
