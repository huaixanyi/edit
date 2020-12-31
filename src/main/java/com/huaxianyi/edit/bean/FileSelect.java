package com.huaxianyi.edit.bean;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-31 14:19
 */
@Getter
@Setter
public class FileSelect implements Serializable {
    private static final long serialVersionUID = 1017052530464443347L;

    private String name;

    private String path;

}
