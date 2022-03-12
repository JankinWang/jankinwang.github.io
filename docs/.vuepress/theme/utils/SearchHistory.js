class SearchHistory {
  constructor(HistoryList) {
    this.HistoryList = Array.isArray(HistoryList) ? HistoryList : []
  }

  setHistory(text) {
    if (Array.isArray(text)) {
      this.HistoryList = Array.from(new Set([].concat(this.HistoryList, text)))
    } else if (typeof text === 'string' && !this.HistoryList.includes(text)) {
      this.HistoryList.push(text)
    }
  }

  clearHistory() {
    this.HistoryList = []
  }

  // 分词
  fenci(text) {
    text = text.trim()
    return text.split(/[\,\，\s]/)
  }

  // 标记关键字
  noteKeyword(text, keyword) {
    let regx = new RegExp(keyword, 'g')
    return text.replace(regx, `<em>${keyword}</em>`)
  }

  // 筛选历史记录
  filterHistory(keyword) {
    if (keyword.length <= 0) return []

    let wordArr = this.fenci(keyword)
    let result = []

    for (let text of this.HistoryList) {
      let flag = false
      let initalText = text

      for (let word of wordArr) {
        if (text.includes(word)) {
          flag = true
          text = this.noteKeyword(text, word)
        }
      }

      flag &&
        result.push({
          html: text,
          text: initalText,
        })
    }

    return result
  }
}

export default SearchHistory
