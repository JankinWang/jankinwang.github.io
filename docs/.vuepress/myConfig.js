const fs = require('fs')
const path = require('path')

/**
 * docs目录 其他目录都相对于此目录
 * 受默认主题 sidebar 限制，只能对此目录下的一级目录有效
 * 比如：/css/ 会覆盖 /css/sass/, 访问 /css/sass/ 实际打开的还是 /css/
 */
const docsDir = path.resolve(__dirname, '../')

/**
 *
 * 生成目录导航和文件侧边栏
 * @param {String} markdownDirName docs目录下存放 Markdown 文件的目录名称
 * @returns {Object} {navConfig,sidebarConfig}
 */
function createNavAndSidbar(markdownDirName) {
  const navConfig = []
  const sidebarConfig = {}
  const markdownPath = path.resolve(docsDir, markdownDirName)
  const mkDirHandle = dirForEach(markdownPath)
  const exclude = excludeList(markdownPath)

  for (subDir of mkDirHandle) {
    if (subDir.isDirectory() && !exclude.has(subDir.name)) {
      /**
       * 目录存在且没被排除 */
      const subDirPath = `\/${markdownDirName}\/${subDir.name}\/`
      const theSidebar = createSidebar(path.join(docsDir, subDirPath))
      const theNavLink = `${subDirPath}${theSidebar[0] || ''}`

      sidebarConfig[subDirPath] = theSidebar
      navConfig.push({ text: subDir.name, link: theNavLink })
    }
  }

  return { navConfig, sidebarConfig }
}

// 导出接口
module.exports = { createNavAndSidbar }

/**
 *
 * 为指定目录生成侧边栏配置
 * @param {String} dirname 目录绝对路径
 * @return {Array}
 */
function createSidebar(dirname) {
  let sidebar = []
  const dirHandler = dirForEach(dirname)

  for (file of dirHandler) {
    const [name, ext] = file.name.split('.')
    // README.md 之外的 markdown 文件
    if (file.isFile() && ext === 'md' && name !== 'README') {
      sidebar.push(name)
    }
  }

  // 创建 readme.md 文件
  createReadme(dirname)
  return sidebar
}

/**
 *
 * 在指定目录下创建 README.md
 * @param {*} dirname 目录绝对路径
 * @return {*}
 */
function createReadme(dirname) {
  const readmePath = path.resolve(dirname, './README.md')
  if (!fs.existsSync(readmePath)) {
    fs.appendFileSync(readmePath, '---\nsidebarDepth: 2\n---') // README.md 不存则创建
  }
}

/**
 *
 * @description 目录生成器，方便遍历目录
 * @param {*} dirname 绝对路径
 */
function* dirForEach(dirname) {
  const dirHandler = fs.opendirSync(dirname)

  while (true) {
    const file = dirHandler.readSync()

    if (file === null) break
    yield file
  }

  dirHandler.closeSync()
}

/**
 *
 * 排除目录列表
 * @param mkPath 存放 Markdown 文件的根目录
 * @returns {Set<string>}
 */
function excludeList(mkPath) {
  const excludeConf = []
  const configPath = path.resolve(mkPath, './exclude.config.js')

  if (fs.existsSync(configPath)) {
    console.log('文件 exclude.config.js 存在')
    excludeConf = require(configPath)
  } else {
    console.error('文件 exclude.config.js 不存在')
  }

  return new Set(excludeConf)
}
