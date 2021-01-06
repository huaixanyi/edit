package com.huaxianyi.edit.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @author yancheng
 * @version 1.0
 * @date 2021-01-06 15:59
 */
@Component
public class BLOGFilePath {

    public static String WINDOW_PARENT_PATH;
    public static String LINUX_PARENT_PATH;

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

    @Value("${blog.windowParentPath}")
    public void setWindowParentPath(String windowParentPath) {
        WINDOW_PARENT_PATH = windowParentPath;
    }

    @Value("${blog.linuxParentPath}")
    public void setLinuxParentPath(String linuxParentPath) {
        LINUX_PARENT_PATH = linuxParentPath;
    }
}
