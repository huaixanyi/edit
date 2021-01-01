package com.huaxianyi.edit.util;

import java.util.Properties;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-31 17:29
 */
public class EditContext {

    public static String BLOG_PARENT_PATH;
    public static String staticInitFile = "" +
            "---\n" +
            "title: Hello World\n" +
            "date: \n" +
            "type: \n" +
            "comments: 默认true\n" +
            "description: \n" +
            "top_img: \n" +
            "mathjax: \n" +
            "katex: \n" +
            "aside: false\n" +
            "---\n" +
            "Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).\n" +
            "\n" +
            "## Quick Start\n" +
            "\n" +
            "### Create a new post\n" +
            "\n" +
            "``` bash\n" +
            "$ hexo new \"My New Post\"\n" +
            "```" +
            "";

    static {
        BLOG_PARENT_PATH = isOSLinux() ? "/net-blog/source/_posts" : "E:/JAVA_PROS/net-blog/source/_posts";
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
