import fg from 'fast-glob'
import fs from 'fs';

// 获取文件
export function getPageFiles(pageDirOptions, option = {}) {
  const entries = fg.sync(pageDirOptions, option);
  return entries;
}

// 覆盖形式写入
export function writeRouterFile(path, str = '') {
  const fd = fs.openSync(path, 'w');

  fs.writeSync(fd, str);
  fs.closeSync(fd);
}