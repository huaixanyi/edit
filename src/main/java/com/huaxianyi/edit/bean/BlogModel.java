package com.huaxianyi.edit.bean;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-09-30 16:26
 */
@Data
public class BlogModel {

    private List<Evaluation> treeList;
    private String initResponse;

    public BlogModel() {
        this.treeList = new ArrayList<>();
    }

    @Data
    public static class BlogFile {
        private String fileName;
        private String filePath;
        private String fileType;
    }

    @Data
    public static class Evaluation {
        private String id;
        private String label;
        private String parentId;
        private String title;
        private BlogFile blogFile;
        private Boolean isDir;
        private List<Evaluation> childList;
    }

}
