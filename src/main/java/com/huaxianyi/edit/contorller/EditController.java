package com.huaxianyi.edit.contorller;

import com.google.common.io.Files;
import com.huaxianyi.edit.bean.FileContent;
import com.huaxianyi.edit.bean.FileSelect;
import org.apache.commons.io.FileUtils;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.FileAlreadyExistsException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author yancheng
 * @version 1.0
 * @date 2020-12-30 17:40
 */
@Controller
@RequestMapping("/edit")
public class EditController {
    private static final String BLOG_PARENT_PATH = "D:\\workspace\\edit\\net-blog\\source\\_posts";

    @GetMapping("/index")
    public ModelAndView editView() {
        return new ModelAndView("index");
    }

    @ResponseBody
    @PostMapping("/fileSelect")
    public List<FileSelect> fileSelect() throws Exception {
        return blogFileList();
    }

    @ResponseBody
    @PostMapping("/fileDicSelect")
    public List<FileSelect> fileDicSelect() throws Exception {
        List<FileSelect> fileSelectList = new ArrayList<>();
        File file = new File(BLOG_PARENT_PATH);
        if (!file.exists()) {
            throw new FileNotFoundException();
        }
        File[] list = file.listFiles();
        assert list != null;
        for (File file2 : list) {
            if (file2.isDirectory()) {
                FileSelect select = new FileSelect();
                select.setName(file2.getName());
                select.setPath(file2.getPath());
                fileSelectList.add(select);
            }
        }
        return fileSelectList;
    }

    public List<FileSelect> blogFileList() throws Exception {
        List<FileSelect> fileSelectList = new ArrayList<>();
        File file = new File(BLOG_PARENT_PATH);
        if (!file.exists()) {
            throw new FileNotFoundException();
        }
        listLF(file, fileSelectList);
        return fileSelectList;
    }

    private void listLF(File file, List<FileSelect> fileSelectList) {
        File[] list = file.listFiles();
        assert list != null;
        for (File file2 : list) {
            if (file2.isDirectory()) {
                listLF(file2, fileSelectList);
            } else {
                FileSelect select = new FileSelect();
                select.setName(file2.getName());
                select.setPath(file2.getPath());
                fileSelectList.add(select);
            }
        }
    }

    @ResponseBody
    @PostMapping("/fileRead")
    public String fileRead(String path) throws Exception {
        File file = new File(path);
        if (!file.exists() || file.isDirectory()) {
            throw new FileNotFoundException();
        }
        List<String> lines = FileUtils.readLines(file, "UTF-8");
        return String.join("\n", lines);
    }

    @ResponseBody
    @PostMapping("/data")
    public String editData(String path, String value) throws Exception {
        File file = new File(path);
        if (!file.exists() || file.isDirectory()) {
            throw new FileNotFoundException();
        }
        Files.write(value.getBytes(), file);
        return fileRead(path);
    }

    @ResponseBody
    @PostMapping("/newFile")
    public FileContent newFile(String path, String name, Boolean isDic) throws Exception {
        if (isDic) {
            File file2 = new File(BLOG_PARENT_PATH + "\\" + name);
            if (file2.exists()) {
                throw new FileAlreadyExistsException(file2.getAbsolutePath());
            }
            if (!file2.mkdirs()) {
                throw new FileUploadException(file2.getAbsolutePath());
            }
        } else {
            File file = new File(path);
            if (!file.exists() || file.isDirectory()) {
                throw new FileNotFoundException();
            }
            File file2 = new File(path + "\\" + name + ".md");
            if (file2.exists()) {
                throw new FileAlreadyExistsException(file2.getAbsolutePath());
            }
            if (!file2.createNewFile()) {
                throw new FileUploadException(file2.getAbsolutePath());
            }
        }
        return new FileContent(this.fileDicSelect(),this.fileSelect());
    }
}
