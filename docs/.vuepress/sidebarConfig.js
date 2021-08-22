const fs = require('fs');
const { dirname } = require('path');
const path = require('path');

const sidebarConfig = {};
const notesNav = [];

// 获取 notes 目录下的所有目录
const docsDir = path.resolve(__dirname, '../');


/**
 * 生成目录索引和文件侧边栏
 *
 * @param {*} topDirName
 */
function makeDirConfig(topDirName) {
  const topDir = fs.opendirSync(path.resolve(docsDir, topDirName));

  // 读取 topDir 中的所有目录
  while(true) {
    const subDir = topDir.readSync();

    // 停止读取条件
    if (subDir === null) break;

    if (subDir.isDirectory()) {
      const SubDirName = `/${topDirName}/${subDir.name}/`;
      notesNav.push({text: subDir.name, link: SubDirName})
      sidebarConfig[SubDirName] = makeSidebar(path.resolve(docsDir, `${topDirName}/${subDir.name}/`));
    }
  }
}

/**
 * 为指定目录生成侧边栏配置
 *
 * @param {String} dirname
 * @return {Array} 
 */
function makeSidebar(dirname) {
  const dirHandler = fs.opendirSync(dirname);

  let sideBar = [];
  while (true) {
    const file = dirHandler.readSync();
    if (file === null) break;

    const [name, ext] = file.name.split('.');
    if (name === 'README' || ext !== 'md') continue;

    sideBar.push(name);
  }

  dirHandler.closeSync();

  return sideBar;
}

makeDirConfig('notes');
module.exports = {sidebarConfig, notesNav};
