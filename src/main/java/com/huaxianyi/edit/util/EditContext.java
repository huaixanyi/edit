package com.huaxianyi.edit.util;

import com.google.common.collect.Lists;
import com.huaxianyi.edit.bean.FileSelect;

import java.util.List;
import java.util.Properties;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-31 17:29
 */
public class EditContext {

    public static String BLOG_PARENT_PATH;

    public static String _CONFIG_PATH;

    public static String _CONFIG_THEME_PATH;

    public static String _CONFIG_NAME = "_config.yml";

    public static String staticInitFile = BLOGFilePath.staticInitFile;

    public static List<String> pathList;

    static {
        String _posts = "/source/_posts";
        String _config = "/_config.yml";
        String _config_theme = "/themes/butterfly/_config.yml";
        String main_path = isOSLinux() ? BLOGFilePath.LINUX_PARENT_PATH : BLOGFilePath.WINDOW_PARENT_PATH;

        BLOG_PARENT_PATH = main_path + _posts;
        _CONFIG_PATH = main_path + _config;
        _CONFIG_THEME_PATH = main_path + _config_theme;
        pathList = Lists.newArrayList(_CONFIG_PATH,_CONFIG_THEME_PATH);
    }

    public static boolean isOSLinux() {
        Properties prop = System.getProperties();
        String os = prop.getProperty("os.name");
        return os != null && os.toLowerCase().contains("linux");
    }

    public static void systemFile(List<FileSelect> fileSelectList){
        FileSelect main_config = new FileSelect();
        main_config.setName(_CONFIG_NAME);
        main_config.setPath(_CONFIG_PATH);
        fileSelectList.add(main_config);

        FileSelect theme_config = new FileSelect();
        theme_config.setName(_CONFIG_NAME);
        theme_config.setPath(_CONFIG_THEME_PATH);


        fileSelectList.add(theme_config);
    }
}
