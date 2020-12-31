package com.huaxianyi.edit.bean;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-31 16:16
 */
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FileContent {

    private List<FileSelect> pathList;

    private List<FileSelect> fileList;

}
