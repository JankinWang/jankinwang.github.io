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

  topDir.closeSync()
}

/**
 * 为指定目录生成侧边栏配置
 *
 * @param {String} dirname 目录绝对路径
 * @return {Array} 
 */
function makeSidebar(dirname) {
  const dirHandler = fs.opendirSync(dirname);

  let sideBar = [];
  while (true) {
    const file = dirHandler.readSync();
    if (file === null) break;

    const [name, ext] = file.name.split('.');
    if (!file.isFile() || name === 'README' || ext !== 'md') continue;

    sideBar.push(name);
  }

  dirHandler.closeSync();

  // 添加 readme.md
  createReadme(dirname)

  return sideBar;
}

/**
 * 在指定目录下添加 README.md
 *
 * @param {*} dirname 目录绝对路径
 * @return {*} 
 */
function createReadme(dirname) {
  const readmePath = path.resolve(dirname, './README.md')

  // 如果存在直接返回
  if (fs.existsSync(readmePath)) return true;

  // 不存在创建
  fs.appendFileSync(readmePath, '---\nsidebarDepth: 2\n---')
}

makeDirConfig('notes');
module.exports = {sidebarConfig, notesNav};
