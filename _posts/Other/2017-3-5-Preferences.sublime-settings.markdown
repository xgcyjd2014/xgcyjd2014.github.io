---
layout: post
title: Preferences.sublime-settings
author: 倪云港
tagpic: other.jpg
description: sublime设置英文翻译
category: other
keywords: 技术, sublime, 翻译
---

## Sublime Text 3 设置翻译

```

    // 主题文件的路径
    "color_scheme": "Packages/User/SublimeLinter/Solarized (Dark) (SL).tmTheme",

    // 设置字体和大小
    "font_face": "inziu iosevka SC",
    "font_size": 12,

    // 字体选项：no_bold不显示粗体字，no_italic不显示斜体字，no_antialias和no_antialias关闭反锯齿  
    // subpixel_antialias和no_round是OS X系统独有的
    "font_options": [],

    // 在文字上双击会全选当前的内容，如果里面出现以下字符，就会被截断
    "word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?",

    // 是否显示行号  
    "line_numbers": true,  
      
    // 是否显示行号边栏  
    "gutter": true,  
      
    // 行号边栏和文字的间距  
    "margin": 4,  
      
    // 是否显示代码折叠按钮  
    "fold_buttons": true,  

    // 不管鼠标在不在行号边栏，代码折叠按钮一直显示  
    "fade_fold_buttons": true,  
      
    //列显示垂直标尺，在中括号里填入数字，宽度按字符计算  
    "rulers": [],  
      
    // 是否打开拼写检查  
    "spell_check": false,  
      
    // Tab键制表符宽度  
    "tab_size": 2,  
      
    // 设为true时，缩进和遇到Tab键时使用空格替代  
    "translate_tabs_to_spaces": true,  

    // translate_tabs_to_spaces设置为true，Tab和Backspace的删除/插入作用于制表符宽度  
    // 否则作用于单个空格  
    "use_tab_stops": true,  
      
    // false时禁止在载入的时候检测制表符和空格  
    "detect_indentation": true,  
      
    // 按回车时，自动与制表位对齐  
    "auto_indent": true,  
      
    //针对C语言的  
    "smart_indent": false,  
      
    // 需要启用auto_indent，第一次打开括号缩进时插入空格？  
    "indent_to_bracket": true,  
      
    // 显示对齐的白线是否根据回车、tab等操作自动填补  
    "trim_automatic_white_space": true,  
      
    // 是否自动换行，如果选auto，需要加双引号  
    "word_wrap": false,  

    // 设置窗口内文字区域的宽度  
    "wrap_width": 0,  
      
    // 防止被缩进到同一级的字换行  
    "indent_subsequent_lines": true,  
      
    // 如果没有定义过，则文件居中显示（比如新建的文件）  
    "draw_centered": false,  
      
    // 自动匹配引号，括号等  
    "auto_match_enabled": true,  
      
    // 拼写检查的单词列表路径  
    "dictionary": "Packages/Language - English/en_US.dic",  

    // Sets which scopes are checked for spelling errors
    "spelling_selector": "markup.raw, source string.quoted - punctuation - meta.preprocessor.c.include, source comment - source comment.block.preprocessor, -(source, constant, keyword, storage, support, variable, markup.underline.link, meta.tag)",

    /// 代码地图的可视区域部分是否加上边框，边框的颜色可在配色方案上加入minimapBorder键 
    "draw_minimap_border": false,

    //代码地图范围高亮永久显示，否则在鼠标悬停与其时显示
    "always_show_minimap_viewport": false,

    // 突出显示当前光标所在的行 
    "highlight_line": true,

    // 设置光标闪动方式 "smooth", "phase", "blink" and "solid".
    "caret_style": "smooth",

    // 这个设置将调整光标尺寸
    "caret_extra_top": 0,
    "caret_extra_bottom": 0,
    "caret_extra_width": 0,

    // 是否特殊显示当前光标所在的括号、代码头尾闭合标记  
    "match_brackets": true,  
      
    // 设为false时，只有光标在括号或头尾闭合标记的两端时，match_brackets才生效  
    "match_brackets_content": true,  
      
    // 是否突出显示圆括号，match_brackets为true生效  
    "match_brackets_square": false,  
      
    // 是否突出显示大括号，match_brackets为true生效  
    "match_brackets_braces": false,  
      
    // 是否突出显示尖括号，match_brackets为true生效  
    "match_brackets_angle": false,  
      
    // html和xml下突出显示光标所在标签的两端，影响HTML、XML、CSS等  
    "match_tags": true,  
      
    // 全文突出显示和当前选中字符相同的字符  
    "match_selection": true, 

    // 设置每一行到顶部，以像素为单位的间距，效果相当于行距  
    "line_padding_top": 0,  
  
    // 设置每一行到底部，以像素为单位的间距，效果相当于行距  
    "line_padding_bottom": 0,  
      
    // 设置为false时，滚动到文本的最下方时，没有缓冲区  
    "scroll_past_end": true,  

    // 设置成true，当光标已经在第一行时，再Up则到行首，如果光标已经在最后一行，再Down则跳到行尾  
    "move_to_limit_on_up_down": false,  
      
    // 按space或tab时，实际会产生白色的点（一个空格一个点）或白色的横线（tab_size设置的制表符的宽度），选中状态下才能看到  
    // 设置为none时，什么情况下都不显示这些点和线  
    // 设置为selection时，只显示选中状态下的点和线  
    // 设置为all时，则一直显示  
    "draw_white_space": "selection",  
      
    // 制表位的对齐白线是否显示，颜色可在主题文件里设置（guide，activeGuide，stackGuide）  
    "draw_indent_guides": true,  
      
    // 制表位的对齐白线，draw_normal为一直显示，draw_active为只显示当前光标所在的代码控制域  
    "indent_guide_options": ["draw_normal"],  
      
    // 为true时，保存文件时会删除每行结束后多余的空格  
    "trim_trailing_white_space_on_save": false,  
      
    // 为true时，保存文件时光标会在文件的最后向下换一行  
    "ensure_newline_at_eof_on_save": false,  
      
    // 切换到其它文件标签或点击其它非本软件区域，文件自动保存  
    "save_on_focus_lost": false,

    // 通过写一个备用文件，然后重命名它在原来的文件保存
    "atomic_save": false,

    // 编码时不能自动检测编码时，将自动检测ASCII, UTF-8 和 UTF-16
    "fallback_encoding": "Western (Windows 1252)",

    // 默认编码格式
    "default_encoding": "UTF-8",

    // 包含空字节的文件被打开默认为十六进制  
    "enable_hexadecimal_encoding": true,  
      
    // 每一行结束的时候用什么字符做终止符  
    "default_line_ending": "system",  
      
    // 设置为enabled时，在一个字符串间按Tab将插入一个制表符  
    // 设置为true时，按Tab会根据前后环境进行代码自动匹配填补  
    "tab_completion": true,  
      
    // 代码提示  
    "auto_complete": true,  
      
    // 代码提示的大小限制  
    "auto_complete_size_limit": 4194304,  
      
    // 代码提示延迟显示  
    "auto_complete_delay": 50, 

    // 代码提示的控制范围
    "auto_complete_selector": "meta.tag - punctuation.definition.tag.begin, source - comment - string.quoted.double.block - string.quoted.single.block - string.unquoted.heredoc",

    // 触发代码提示的其他情况
    "auto_complete_triggers": [ {"selector": "text.html", "characters": "<"} ],

    // 设为false时，选择提示的代码按回车或点击可以输出出来，但选择true时不会输出而是直接换行
    "auto_complete_commit_on_tab": false,

    // auto_complete_commit_on_tab必须为true，控制代码提示的活跃度
    "auto_complete_with_fields": false,

    // 自动闭合 HTML/XML 标签
    "auto_close_tags": true,

    // 设置为false，使用Shift + tab总是插入制表符
    "shift_tab_unindent": false,

    // 选中的文本按Ctrl + f时，自动复制到查找面板的文本框里 
    "find_selected_text": true,

    // 开启文本拖动
    "drag_text": false,

    //
    // User Interface Settings
    //

    // 修改主题
    "theme": "Soda SolarizedDark.sublime-theme",

    // 滚动速度
    "scroll_speed": 1.0,

    // 左侧文件夹动画
    "tree_animation_enabled": true,

    // 控制软件中的动画
    "animation_enabled": true,

    // 使文件修改后的标签更明显
    "highlight_modified_tabs": true,

    "show_tab_close_buttons": true,

    // 加粗文件夹的显示
    "bold_folder_labels": true,

    // 水平垂直滚动条：system和disabled为默认显示方式，enabled为自动隐藏显示
    "overlay_scroll_bars": "system",

    // 显示标签折叠
    "enable_tab_scrolling": true,

    // 在状态栏显示文件编码
    "show_encoding": false,

    // 在状态栏显示行尾结束格式
    "show_line_endings": false,

    //
    // Application Behavior Settings
    //

    // 热推出功能！退出时不会提示是否保存文件，而是直接退出  
    // 下次打开软件时，文件保持退出前的状态，没来得及保存的内容都在，但并没有真实的写在原文件里 
    "hot_exit": true,

    // 记住全屏模式
    "remember_full_screen": false,

    // 总是及时重新读取文件
    "always_prompt_for_file_reload": false,

    // OS X only: 总是在新窗口打开文件
    "open_files_in_new_window": true,

    // OS X only: 在启动是开启一个空白窗口
    "create_window_at_startup": true,

    // 在标题栏显示文件完整路径
    "show_full_path": true,

    // 显示编译结果框
    "show_panel_on_build": true,

    // 单击文件预览，双击打开
    "preview_on_click": true,

    // 在侧边栏不显示的文件和文件夹
    "folder_exclude_patterns": [".svn", ".git", ".hg", "CVS"],
    "file_exclude_patterns": ["*.pyc", "*.pyo", "*.exe", "*.dll", "*.obj","*.o", "*.a", "*.lib", "*.so", "*.dylib", "*.ncb", "*.sdf", "*.suo", "*.pdb", "*.idb", ".DS_Store", "*.class", "*.psd", "*.db", "*.sublime-workspace"],
    // 在侧边栏显示蛋不会被搜索
    "binary_file_patterns": ["*.jpg", "*.jpeg", "*.png", "*.gif", "*.ttf", "*.tga", "*.dds", "*.ico", "*.eot", "*.pdf", "*.swf", "*.jar", "*.zip"],

    // 文件索引会分析所有侧边栏的文件
    "index_files": true,

    // 索引线程
    "index_workers": 0,

    // 不被索引的文件
    "index_exclude_patterns": ["*.log"],

    // 要忽略的插件
    "ignored_packages": ["Vintage"]
    
```