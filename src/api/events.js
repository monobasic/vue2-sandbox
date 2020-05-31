function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  async getEventCount(search) {
    await sleep(1000)
    return 30 - search.length
  }
}
