(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{439:function(s,t,n){"use strict";n.r(t);var a=n(45),l=Object(a.a)({},(function(){var s=this.$createElement,t=this._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"备份恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备份恢复"}},[this._v("#")]),this._v(" 备份恢复")]),this._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# 示例\nmysqldump -u olduser -p study_test>D:/study_test.sql # 注意：行尾没有分号;\n\n/* 备份与还原 */ ------------------\n备份，将数据的结构与表内数据保存起来。\n利用 mysqldump 指令完成。\n-- 导出\nmysqldump [options] db_name [tables]\nmysqldump [options] ---database DB1 [DB2 DB3...]\nmysqldump [options] --all--database\n1. 导出一张表\nmysqldump -u用户名 -p密码 库名 表名 > 文件名(D:/a.sql)\n2. 导出多张表\nmysqldump -u用户名 -p密码 库名 表1 表2 表3 > 文件名(D:/a.sql)\n3. 导出所有表\nmysqldump -u用户名 -p密码 库名 > 文件名(D:/a.sql)\n4. 导出一个库\nmysqldump -u用户名 -p密码 --lock-all-tables --database 库名 > 文件名(D:/a.sql)\n可以-w携带WHERE条件\n\n-- 导入\n1. 在登录mysql的情况下：\nsource  备份文件\n2. 在不登录的情况下\nmysql -u用户名 -p密码 库名 < 备份文件\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);