package com.huaxianyi.edit.util;

import java.util.Properties;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-31 17:29
 */
public class EditContext {

    public static String BLOG_PARENT_PATH;

    static {
        BLOG_PARENT_PATH = isOSLinux() ? "\\net-blog\\source\\_posts" : "D:\\workspace\\edit\\net-blog\\source\\_posts";
    }

    public static boolean isOSLinux() {
        Properties prop = System.getProperties();
        String os = prop.getProperty("os.name");
        if (os != null && os.toLowerCase().contains("linux")) {
            return true;
        } else {
            return false;
        }
    }
}
