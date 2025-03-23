package com.example.demo.member.controller.dto;

import com.example.demo.member.entity.MemberEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MemberDTO {

    private Long id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private String memberSkillStack;

    public MemberEntity toEntity() {
        return MemberEntity.builder()
                .memberEmail(memberEmail)
                .memberPassword(memberPassword)
                .memberName(memberName)
                .memberSkillStack(memberSkillStack)
                .build();
    }

    public static MemberDTO fromEntity(MemberEntity entity) {
        MemberDTO dto = new MemberDTO();
        dto.setId(entity.getId());
        dto.setMemberEmail(entity.getMemberEmail());
        dto.setMemberPassword(entity.getMemberPassword());
        dto.setMemberName(entity.getMemberName());
        dto.setMemberSkillStack(entity.getMemberSkillStack());
        return dto;
    }
}