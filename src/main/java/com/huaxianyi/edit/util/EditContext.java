package com.huaxianyi.edit.util;

import java.util.Properties;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-31 17:29
 */
public class EditContext {

    public static String BLOG_PARENT_PATH;
    public static String staticInitFile = BLOGFilePath.staticInitFile;

    static {
        String _posts = "/source/_posts";
        BLOG_PARENT_PATH = isOSLinux() ?
                BLOGFilePath.LINUX_PARENT_PATH + _posts : BLOGFilePath.WINDOW_PARENT_PATH + _posts;
    }

    public static boolean isOSLinux() {
        Properties prop = System.getProperties();
        String os = prop.getProperty("os.name");
        return os != null && os.toLowerCase().contains("linux");
    }
}
