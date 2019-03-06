---
layout: post
title: 'JAVAWeb-动态网页开发'
author: 代秀强
description: JAVAWeb
tagpic: other.jpg
category: other 
---
html/css/javascript前端 （静态网页）
静态网站：只包含静态网页
动态网站：既有静态网页也有动态网页

静态网页;用户多次访问这个网页是，网页的源代码是不会改变的
动态网页：用户多次访问这个网页是，网页源代码是有可能改变的

使用servlet技术开发动态网页

Servlet:特点
    1）servlet就是一个普通java类，继承了HttpServlet类
    2）servlet交给Tomact服务器运行，（web服务软件0！！！
步骤：

1）编写一个普通的java类，继承HttpServlet类，覆盖doGet方法（
    注意：到Tomcat的lib目录下拷贝servlet-api.jar导入到你的项目中
    public class HelloServlet  extends HttpServlet{

    //覆盖doGET
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //解决乱码问题
        resp.setContentType("text/html;charset=utf-8");
        //向浏览器输出内容
        resp.getWriter().write("显示当前时间"+new Date());
    }
}

2）把servlet交给Tomcat服务器运行！！！
2.1把servlet对应的class文件拷贝到Tomcat项目中的WEB-INF/classes目录下
2.2在项目中的WEB-INF/web.xml文件配置servlet

            <?xml version="1.0" encoding="utf-8"?>
        <web-app xmlns="http://java.sun.com/xml/ns/javaee"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                      http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
          version="3.0"
          metadata-complete="true">
          <!-- 配置servlet-->
          <servlet>
            <!-- servlet名称，自定义 -->
            <servlet-name>HelloServlet</servlet-name>
          <!--  servlet类的全名：包名+类名 -->
          <servlet-class>HTTPservletOne.HelloServlet</servlet-class>
          </servlet>

          <servlet-mapping>
          <!--  servlet名称，和上面的名称保持一致 -->
            <servlet-name>HelloServlet</servlet-name>
            <!-- 公开给外部访问这个servlet的名称（路径） -->
            <url-pattern>/hello</url-pattern>
          </servlet-mapping>
    </web-app>

3.通过URL访问这个servlet
    http://localhost:8080/bbs/hello


用工具开发
1）创建一个bbs的web project
2）在WebRoot下编写静态网页
3）在src下编写动态网页
    3.1在src右选择“servlet”
    3.2写上servlet的包名，选择覆盖的doGet方法0-》next
    3.3修改servlet的名称，修改访问的servlet的URL-》finished
4）myecplise关联Tomcat服务器
    4.1window-》preference-》搜索Tomcat->收到“Tomcat。7.x”
    42选择Tomcat的根目录
    4.3把disable-.enable
5)部署网站
    5.1点击发布图标-》选择网站-》选择发布的Tomact服务器
-》OK
6）访问
    静态文件：http://localhost:8080//bbs/index.html
    动态网页：http://localhost:8080//bbs/hello


    总结：
        1）web服务软件作用：把本地的资源共享给外部访问
        2）Tomcat服务软件基本使用
            2.1启动：startup.bat
            2.2关闭：shutdown.bat
        3）网站的目录结构：
            webRoot：根目录
                文件
                -WEB-INF
                    -classes    存放class文件
                    -lib        存放jar包
                    web.xml配置servlet
        4）部署网站的三种方式
            4.1直接拷贝到webapps
            4.2虚拟网站
                server.xml
                <Context  docBase="网站的绝对路径“ path="/访问网站的名称"/>
            4.3访问xml文件方式配置虚拟网站
                在conf/Catalina/locahost
                添加bbs.xml
                <Context  docBase="网站的绝对路径“/>
                访问网站的名称就是xml的文件名称
            5）增加一个站点
                5.1server。xml添加host标签
                5.2修改hosts文件
                5.3访问站点使用站点名称
            6）手动开发一个servlet（手动开发一个servlet.txt)
            7）工具开发一个servlet(用工具开发servlet.txt)
