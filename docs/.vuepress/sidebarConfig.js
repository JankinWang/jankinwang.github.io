const fs = require('fs');
const path = require('path');
const docsDir = path.resolve(__dirname, '../');

/**
 * 生成目录导航和文件侧边栏
 *
 * @param {*} topDirName
 */
function createNavAndSidbar(topDirName) {
  const notesNav = [];
  const sidebarConfig = {};
  const topDir = dirForEach(path.resolve(docsDir, topDirName));
  
  for(subDir of topDir) {
    if (subDir.isDirectory()) {
      const SubDirName = `\/${topDirName}\/${subDir.name}\/`;

      notesNav.push({ text: subDir.name, link: SubDirName });
      sidebarConfig[SubDirName] = createSidebar(
        path.join(docsDir, SubDirName)
      );
    }
  }
    
  return {
    notesNav,
    sidebarConfig,
  };
}

/**
 * 为指定目录生成侧边栏配置
 *
 * @param {String} dirname 目录绝对路径
 * @return {Array}
 */
function createSidebar(dirname) {
  let sideBar = [];
  const dirHandler = dirForEach(dirname);

  for(file of dirHandler) {
    const [name, ext] = file.name.split('.');
    if (file.isFile() && ext === 'md' && name !== 'README') {
      sideBar.push(name); // README.md 之外的 markdown 文件
    }
  }

  // 添加 readme.md
  createReadme(dirname);
  return sideBar;
}

/**
 * 在指定目录下添加 README.md
 *
 * @param {*} dirname 目录绝对路径
 * @return {*}
 */
function createReadme(dirname) {
  const readmePath = path.resolve(dirname, './README.md');
  if (!fs.existsSync(readmePath)) {
    fs.appendFileSync(readmePath, '---\nsidebarDepth: 2\n---'); // README.md 不存则创建
  }
}

/**
 * 目录遍历器
 *
 * @param {*} dirname 绝对路径
 */
function* dirForEach(dirname) {
  const dirHandler = fs.opendirSync(dirname);

  while (true) {
    const file = dirHandler.readSync();

    if (file === null) break;
    yield file;
  }

  dirHandler.closeSync();
}


module.exports = { sidebarConfig, notesNav } = createNavAndSidbar('notes');
