# 数据基础操作

>   详细操作请查看 `数据操作`目录下对应文章

### 新增

```mysql
 INSERT [INTO] 表名 [(字段列表)] VALUES (值列表)[, (值列表), ...]
        -- 如果要插入的值列表包含所有字段并且顺序一致，则可以省略字段列表。
        -- 可同时插入多条数据记录！
        REPLACE 与 INSERT 完全一样，可互换。
    INSERT [INTO] 表名 SET 字段名=值[, 字段名=值, ...]
    
-- 插入多行示例：
 insert [into] `student` (name,sex,age) values ('张三', ’男‘, 15),('李素','女'，16);

```



### 查询

```mysql
 SELECT 字段列表 FROM 表名[ 其他子句]
        -- 可来自多个表的多个字段
        -- 其他子句可以不使用
        -- 字段列表可以用*代替，表示所有字段
```



### 删除

```mysql
DELETE FROM 表名[ 删除条件子句]
        没有条件子句，则会删除全部
        
-- 示例
delete from `student` where name = '张三';
```



### 更新

```mysql
UPDATE 表名 SET 字段名=新值[, 字段名=新值] [更新条件]
```

