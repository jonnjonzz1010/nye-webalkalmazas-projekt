package com.employee.crud;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class EmployeeCreateReq {
    private String name;
    private String age;
    private String gender;
    private String email;
    private String address;
}
