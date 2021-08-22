## Json 相关函数

json_encode — 对变量进行 JSON 编码

此函数的option选项

-   **`JSON_HEX_TAG`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))

     所有的 < 和 > 转换成 \u003C 和 \u003E。自 PHP 5.3.0 起生效。 

-   **`JSON_HEX_AMP`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    所有的 & 转换成 \u0026。     自 PHP 5.3.0 起生效。         

-   **`JSON_HEX_APOS`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    所有的 ' 转换成 \u0027。     自 PHP 5.3.0 起生效。         

-   **`JSON_HEX_QUOT`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    所有的 " 转换成 \u0022。    自 PHP 5.3.0 起生效。         

-   **`JSON_FORCE_OBJECT`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    使一个非关联数组输出一个类（Object）而非数组。     在数组为空而接受者需要一个类（Object）的时候尤其有用。     自 PHP 5.3.0 起生效。         

-   **`JSON_NUMERIC_CHECK`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    将所有数字字符串编码成数字（numbers）。     自 PHP 5.3.3 起生效。         

-   **`JSON_PRETTY_PRINT`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html)) 

    用空白字符格式化返回的数据。     自 PHP 5.4.0 起生效。         

-   **`JSON_UNESCAPED_SLASHES`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    不要编码 */*。     自 PHP 5.4.0 起生效。         

-   **`JSON_UNESCAPED_UNICODE`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    以字面编码多字节 Unicode 字符（默认是编码成 \uXXXX）。     自 PHP 5.4.0 起生效。 

-   **`JSON_PARTIAL_OUTPUT_ON_ERROR`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html)) 

    ​    替换一些不可编码的值，而不是提示失败    Available since PHP 5.5.0.         

-   **`JSON_PRESERVE_ZERO_FRACTION`**     ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    ​     确保浮点值始终被编码为浮点值。   Available since PHP 5.6.6.         

-   **`JSON_UNESCAPED_LINE_TERMINATORS`**    ([integer](mk:@MSITStore:E:\桌面快捷\文档\php文档\PHP手册\php_manual_zh.chm::/res/language.types.integer.html))    

    ​     当 JSON_UNESCAPED_UNICODE 以字面编码多字节 Unicode 字符时，保持行终止符不被转义  Available since PHP 7.1.0.     

