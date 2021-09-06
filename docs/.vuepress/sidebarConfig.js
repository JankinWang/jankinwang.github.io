const fs = require('fs');
const path = require('path');
const docsDir = path.resolve(__dirname, '../');

// 排除目录
const exclude = ['Linux', 'Docker', '数据结构'];

/**
 * 生成目录导航和文件侧边栏
 *
 * @param {*} topDirName
 */
function createNavAndSidbar(topDirName) {
  const notesNav = [];
  const sidebarConfig = {};
  const topDir = dirForEach(path.resolve(docsDir, topDirName));

  for (subDir of topDir) {
    // 排除指定目录
    if (exclude.includes(subDir.name)) continue;

    if (subDir.isDirectory()) {
      const subDirName = `\/${topDirName}\/${subDir.name}\/`;
      const theSidebar = createSidebar(path.join(docsDir, subDirName));
      const theNavLink = `${subDirName}${sidebarConfig[subDirName][0] || ''}`;

      sidebarConfig[subDirName] = theSidebar
      notesNav.push({ text: subDir.name, link: theNavLink });
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
  let sidebar = [];
  const dirHandler = dirForEach(dirname);

  for (file of dirHandler) {
    const [name, ext] = file.name.split('.');

    // README.md 之外的 markdown 文件
    if (file.isFile() && ext === 'md' && name !== 'README') {
      sidebar.push(name);
    }
  }

  // 添加 readme.md
  createReadme(dirname);
  return sidebar;
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
