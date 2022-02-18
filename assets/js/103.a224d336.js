(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{478:function(n,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"表的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表的操作"}},[n._v("#")]),n._v(" 表的操作")]),n._v(" "),a("h4",{attrs:{id:"创建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[n._v("#")]),n._v(" 创建表")]),n._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("CREATE [TEMPORARY] TABLE[ IF NOT EXISTS] [库名.]表名 ( 表的结构定义 )[表选项]\n        每个字段必须有数据类型\n        最后一个字段后不能有逗号\n        TEMPORARY 临时表，会话结束时表自动消失\n        对于字段的定义(详情参见`列属性`)：\n            字段名 数据类型 [NOT NULL | NULL] [DEFAULT default_value] [AUTO_INCREMENT] [UNIQUE [KEY] | [PRIMARY] KEY] [COMMENT 'string']\n\n\n-- 表选项\n    -- 字符集\n        CHARSET = charset_name\n        如果表没有设定，则使用数据库字符集\n    -- 存储引擎\n        ENGINE = engine_name\n        表在管理数据时采用的不同的数据结构，结构不同会导致处理方式、提供的特性操作等不同\n        常见的引擎：InnoDB MyISAM Memory/Heap BDB Merge Example CSV MaxDB Archive\n        不同的引擎在保存表的结构和数据时采用不同的方式\n        MyISAM表文件含义：.frm表定义，.MYD表数据，.MYI表索引\n        InnoDB表文件含义：.frm表定义，表空间数据和日志文件\n        SHOW ENGINES -- 显示存储引擎的状态信息\n        SHOW ENGINE 引擎名 {LOGS|STATUS} -- 显示存储引擎的日志或状态信息\n    -- 自增起始数\n    \tAUTO_INCREMENT = 行数\n    -- 数据文件目录\n        DATA DIRECTORY = '目录'\n    -- 索引文件目录\n        INDEX DIRECTORY = '目录'\n    -- 表注释\n        COMMENT = 'string'\n    -- 分区选项\n        PARTITION BY ... (详细见手册)\n        \n    -- 列属性(列约束)\n        \n   \n   \n   \t/* 列属性（列约束） */ ------------------\n    1. PRIMARY 主键\n        - 能唯一标识记录的字段，可以作为主键。\n        - 一个表只能有一个主键。\n        - 主键具有唯一性。\n        - 声明字段时，用 primary key 标识。\n            也可以在字段列表之后声明\n                例：create table tab ( id int, stu varchar(10), primary key (id));\n        - 主键字段的值不能为null。\n        - 主键可以由多个字段共同组成。此时需要在字段列表后声明的方法。\n            例：create table tab ( id int, stu varchar(10), age int, primary key (stu, age));\n\n    2. UNIQUE 唯一索引（唯一约束）\n        使得某字段的值也不能重复。\n\n    3. NULL 约束\n        null不是数据类型，是列的一个属性。\n        表示当前列是否可以为null，表示什么都没有。\n        null, 允许为空。默认。\n        not null, 不允许为空。\n        insert into tab values (null, 'val');\n            -- 此时表示将第一个字段的值设为null, 取决于该字段是否允许为null\n\n    4. DEFAULT 默认值属性\n        当前字段的默认值。\n        insert into tab values (default, 'val');    -- 此时表示强制使用默认值。\n        create table tab ( add_time timestamp default current_timestamp );\n            -- 表示将当前时间的时间戳设为默认值。\n            current_date, current_time\n\n    5. AUTO_INCREMENT 自动增长约束\n        自动增长必须为索引（主键或unique）\n        只能存在一个字段为自动增长。\n        默认为1开始自动增长。可以通过表属性 auto_increment = x进行设置，或 alter table tbl auto_increment = x;\n\n    6. COMMENT 注释\n        例：create table tab ( id int ) comment '注释内容';\n\n    7. FOREIGN KEY 外键约束\n        用于限制主表与从表数据完整性。\n        alter table t1 add constraint `t1_t2_fk` foreign key (t1_id) references t2(id);\n            -- 将表t1的t1_id外键关联到表t2的id字段。\n            -- 每个外键都有一个名字，可以通过 constraint 指定\n        存在外键的表，称之为从表（子表），外键指向的表，称之为主表（父表）。\n        作用：保持数据一致性，完整性，主要目的是控制存储在外键表（从表）中的数据。\n        MySQL中，可以对InnoDB引擎使用外键约束：\n        语法：\n        foreign key (外键字段） references 主表名 (关联字段) [主表记录删除时的动作] [主表记录更新时的动作]\n        此时需要检测一个从表的外键需要约束为主表的已存在的值。外键在没有关联的情况下，可以设置为null.前提是该外键列，没有not null。\n        可以不指定主表记录更改或更新时的动作，那么此时主表的操作被拒绝。\n        如果指定了 on update 或 on delete：在删除或更新时，有如下几个操作可以选择：\n        1. cascade，级联操作。主表数据被更新（主键值更新），从表也被更新（外键值更新）。主表记录被删除，从表相关记录也被删除。\n        2. set null，设置为null。主表数据被更新（主键值更新），从表的外键被设置为null。主表记录被删除，从表相关记录外键被设置成null。但注意，要求该外键列，没有not null属性约束。\n        3. restrict，拒绝父表删除和更新。\n        注意，外键只被InnoDB存储引擎所支持。其他引擎是不支持的。\n\n")])])]),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])]),n._v(" "),a("h4",{attrs:{id:"查看所有表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有表"}},[n._v("#")]),n._v(" 查看所有表")]),n._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("SHOW TABLES[ LIKE 'pattern']\nSHOW TABLES FROM  库名\n")])])]),a("h4",{attrs:{id:"查看表结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看表结构"}},[n._v("#")]),n._v(" 查看表结构")]),n._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("SHOW CREATE TABLE 表名 （信息更详细）\nDESC 表名 / DESCRIBE 表名 / EXPLAIN 表名 / SHOW COLUMNS FROM 表名 [LIKE 'PATTERN']\nSHOW TABLE STATUS [FROM db_name] [LIKE 'pattern']\n")])])]),a("h4",{attrs:{id:"修改表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改表"}},[n._v("#")]),n._v(" 修改表")]),n._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 重命名\nRENAME TABLE 原表名 TO 新表名\nRENAME TABLE 原表名 TO 库名.表名 （可将表移动到另一个数据库）\n-- RENAME可以交换两个表名 \nRENAME TABLE t1 TO t3,t2 TO t1,t2 TO t3;\n-- 另一种重命名得方式\nlock tables t1 write ,t2 write;\nalter table t1 rename to t3;\nalter table t2 rename to t1;\nalter table t3 rename to t2;\nunlock tables;\n\n# 修改表选项（属性）\nALTER TABLE 表名 表的选项\neg: ALTER TABLE 表名 ENGINE=MYISAM;\n\n# 修改表的字段结构\nALTER TABLE 表名 操作名\n        -- 操作名\n            ADD[ COLUMN] 字段定义       -- 增加字段\n                AFTER 字段名          -- 表示增加在该字段名后面\n                FIRST               -- 表示增加在第一个\n            ADD PRIMARY KEY(字段名)   -- 创建主键\n            ADD UNIQUE [索引名] (字段名)-- 创建唯一索引\n            ADD INDEX [索引名] (字段名) -- 创建普通索引\n            DROP[ COLUMN] 字段名      -- 删除字段\n            MODIFY[ COLUMN] 字段名 字段属性     -- 支持对字段属性进行修改，不能修改字段名(所有原有属性也需写上)\n            CHANGE[ COLUMN] 原字段名 新字段名 字段属性      -- 支持对字段名修改\n            DROP PRIMARY KEY    -- 删除主键(删除主键前需删除其AUTO_INCREMENT属性)\n            DROP INDEX 索引名 -- 删除索引\n            DROP FOREIGN KEY 外键    -- 删除外键\n            \n# 删除表\n    DROP TABLE [IF EXISTS] 表名 ...\n# 清空表数据\n    TRUNCATE [TABLE] 表名\n# 复制表结构\n    CREATE TABLE 表名 LIKE 要复制的表名\n# 复制表结构和数据\n    CREATE TABLE 表名 [AS] SELECT * FROM 要复制的表名\n# 检查表是否有错误\n    CHECK TABLE tbl_name [, tbl_name] ... [option] ...\n# 优化表\n    OPTIMIZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...\n# 修复表\n    REPAIR [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ... [QUICK] [EXTENDED] [USE_FRM]\n# 分析表\n    ANALYZE [LOCAL | NO_WRITE_TO_BINLOG] TABLE tbl_name [, tbl_name] ...\n")])])]),a("h4",{attrs:{id:"锁表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁表"}},[n._v("#")]),n._v(" 锁表")]),n._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("/* 锁表 */\n表锁定只用于防止其它客户端进行不正当地读取和写入\nMyISAM 支持表级锁，InnoDB 支持行级锁\n\n-- 锁定\n    LOCK TABLES tbl_name [AS alias]\n-- 解锁\n    UNLOCK TABLES\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);