## PHP 数组函数

>   [官方文档](https://www.php.net/manual/zh/book.array.php)

### 其他数组相关

[is_array()](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.is-array.html) 

[explode()](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.explode.html),    

[implode()](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.implode.html), [split()](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.split.html),     

[preg_split()](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.preg-split.html)

[unset()](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.unset.html). 

### 添加、移除数组元素

-   [array_pop](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-pop.html) — 弹出数组最后一个单元（出栈）
-   [array_push](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-push.html) — 将一个或多个单元压入数组的末尾（入栈）
-   [array_shift](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-shift.html) — 将数组开头的单元移出数组
-   [array_unshift](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-unshift.html) — 在数组开头插入一个或多个单元
-   [array_unique](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-unique.html) — 移除数组中重复的值



### 数组与变量转换

-   [extract](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.extract.html) — 从数组中将变量导入到当前的符号表【根据关联数组中的元素定义变量】
-   [compact](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.compact.html) — 建立一个数组，包括变量名和它们的值 【用指定变量创建数组元素，变量名为 键，值为 元素的值】
-   [list](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.list.html) — 把数组中的值赋给一组变量



### 取值

-   [array_values](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-values.html) — 返回数组中所有的值
-   [array_rand](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-rand.html) — 从数组中随机取出一个或多个单元
-   [array_slice](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-slice.html) — 从数组中取出一段
-   [array_splice](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-splice.html) — 去掉数组中的某一部分并用其它值取代
-   [array_column](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-column.html) — 返回数组中指定的一列



-   [key](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.key.html) — 从关联数组中取得键名
-   [array_keys](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-keys.html) — 返回数组中部分的或所有的键名

-   [array_key_first](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-key-first.html) — 获取指定数组的第一个键值
-   [array_key_last](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-key-last.html) — 获取一个数组的最后一个键值



-   [array_reverse](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-reverse.html) — 返回单元顺序相反的数组



### 检查判断、搜索

-   [in_array](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.in-array.html) — 检查数组中是否存在某个值
-   [array_key_exists](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-key-exists.html) — 检查数组里是否有指定的键名或索引
-   [key_exists](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.key-exists.html) — 别名 array_key_exists
-   [array_search](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-search.html) — 在数组中搜索给定的值，如果成功则返回首个相应的键名



### 排序

>   [排序官方文档](https://www.php.net/manual/zh/array.sorting.php)

  **按值排序**

-   [rsort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.rsort.html) — 对数组逆向排序
-   [sort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.sort.html) — 对数组排序

-   [arsort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.arsort.html) — 对数组进行逆向排序并保持索引关系
-   [asort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.asort.html) — 对数组进行排序并保持索引关系
-   [natcasesort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.natcasesort.html) — 用“自然排序”算法对数组进行不区分大小写字母的排序
-   [natsort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.natsort.html) — 用“自然排序”算法对数组排序



  **按键排序**

-   [krsort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.krsort.html) — 对数组按照键名逆向排序
-   [ksort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.ksort.html) — 对数组按照键名排序



  **多数组排序**

-   [array_multisort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-multisort.html) — 对多个数组或多维数组进行排序



  **用户自定义排序**

-   [uasort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.uasort.html) — 使用用户自定义的比较函数对数组中的值进行排序并保持索引关联
-   [uksort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.uksort.html) — 使用用户自定义的比较函数对数组中的键名进行排序
-   [usort](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.usort.html) — 使用用户自定义的比较函数对数组中的值进行排序



### 填充数组

-   [array_fill_keys](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-fill-keys.html) — 使用指定的键和值填充数组
-   [array_fill](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-fill.html) — 用给定的值填充数组
-   [array_pad](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-pad.html) — 以指定长度将一个值填充进数组





### 过滤、遍历

-   [array_filter](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-filter.html) — 用回调函数过滤数组中的单元

-   [array_map](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-map.html) — 为数组的每个元素应用回调函数

-   [array_reduce](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-reduce.html) — 用回调函数迭代地将数组简化为单一的值

-   [array_walk_recursive](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-walk-recursive.html) — 对数组中的每个成员递归地应用用户函数

-   [array_walk](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-walk.html) — 使用用户自定义函数对数组中的每个元素做回调处理

    

  **手动遍历数组**

-   [current](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.current.html) — 返回数组中的当前单元
-   [pos](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.pos.html) — current 的别名
-   [each](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.each.html) — 返回数组中当前的键／值对并将数组指针向前移动一步
-   [end](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.end.html) — 将数组的内部指针指向最后一个单元
-   [next](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.next.html) — 将数组中的内部指针向前移动一位
-   [prev](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.prev.html) — 将数组的内部指针倒回一位
-   [reset](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.reset.html) — 将数组的内部指针指向第一个单元



### 替换元素

-   [array_replace_recursive](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-replace-recursive.html) — 使用传递的数组递归替换第一个数组的元素
-   [array_replace](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-replace.html) — 使用传递的数组替换第一个数组的元素



### 合并数组

-   [array_merge_recursive](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-merge-recursive.html) — 递归地合并一个或多个数组
-   [array_merge](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-merge.html) — 合并一个或多个数组



### 分割数组

-   [array_chunk](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-chunk.html) — 将一个数组分割成多个



### 对比差异

  **差集**

-   [array_diff_assoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-diff-assoc.html) — 带索引检查计算数组的差集
-   [array_diff_key](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-diff-key.html) — 使用键名比较计算数组的差集
-   [array_diff_uassoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-diff-uassoc.html) — 用用户提供的回调函数做索引检查来计算数组的差集
-   [array_diff_ukey](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-diff-ukey.html) — 用回调函数对键名比较计算数组的差集
-   [array_diff](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-diff.html) — 计算数组的差集



-   [array_udiff_assoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-udiff-assoc.html) — 带索引检查计算数组的差集，用回调函数比较数据

-   [array_udiff_uassoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-udiff-uassoc.html) — 带索引检查计算数组的差集，用回调函数比较数据和索引

-   [array_udiff](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-udiff.html) — 用回调函数比较数据来计算数组的差集

    

  **交集**

-   [array_intersect_key](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-intersect-key.html) — 使用键名比较计算数组的交集
-   [array_intersect_uassoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-intersect-uassoc.html) — 带索引检查计算数组的交集，用回调函数比较索引
-   [array_intersect_ukey](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-intersect-ukey.html) — 用回调函数比较键名来计算数组的交集
-   [array_intersect](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-intersect.html) — 计算数组的交集

 

-   [array_uintersect_assoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-uintersect-assoc.html) — 带索引检查计算数组的交集，用回调函数比较数据
-   [array_uintersect_uassoc](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-uintersect-uassoc.html) — 带索引检查计算数组的交集，用单独的回调函数比较数据和索引
-   [array_uintersect](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-uintersect.html) — 计算数组的交集，用回调函数比较数据





### 数组统计

-   [count](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.count.html) — 计算数组中的单元数目，或对象中的属性个数
-   [sizeof](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.sizeof.html) — count 的别名

-   [array_sum](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-sum.html) — 对数组中所有值求和

-   [array_count_values](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-count-values.html) — 统计数组中所有的值
-   [array_product](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-product.html) — 计算数组中所有值的乘积



### 创建数组

-   [array](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array.html) — 新建一个数组
-   [range](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.range.html) — 根据范围创建数组，包含指定的元素

-   [array_combine](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-combine.html) — 创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值

    

### 操作数组

-   [array_flip](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.array-flip.html) — 交换数组中的键和值
-   [shuffle](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/function.shuffle.html) — 打乱数组

